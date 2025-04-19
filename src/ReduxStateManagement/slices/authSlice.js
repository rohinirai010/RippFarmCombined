import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API call functions - replace with actual API calls
const mockRegisterUser = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Store in localStorage to persist data
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      resolve({ user: userData, success: true });
    }, 500);
  });
};

const mockLoginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Checking if logging in with mobile number
      if (credentials.mobile && !credentials.username && !credentials.email) {
        const user = users.find(
          (u) => u.mobile === credentials.mobile && 
                 u.password === credentials.password
        );
        
        if (user) {
          resolve({ user, success: true });
        } else {
          reject({ message: 'Invalid credentials', success: false });
        }
        return;
      }
      
      // login logic for username/email
      const user = users.find(
        (u) => (u.username === credentials.username || 
                u.email === credentials.email || 
                u.mobile === credentials.mobile) && 
               u.password === credentials.password
      );
      
      if (user) {
        resolve({ user, success: true });
      } else {
        reject({ message: 'Invalid credentials', success: false });
      }
    }, 500);
  });
};

// Async thunks for registration and login
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await mockRegisterUser(userData);
      // Store auth token in localStorage
      localStorage.setItem('authToken', JSON.stringify({ 
        token: 'mock-auth-token-' + Date.now(),
        user: response.user
      }));
      return response;
    } catch (error) {
      return rejectWithValue(error.message || 'Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await mockLoginUser(credentials);
      // Store auth token in localStorage
      localStorage.setItem('authToken', JSON.stringify({ 
        token: 'mock-auth-token-' + Date.now(),
        user: response.user
      }));
      return response;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

// Load user from local storage
export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const authData = localStorage.getItem('authToken');
      
      if (!authData) {
        return rejectWithValue('No authenticated user');
      }
      
      // Parse the JSON data safely
      try {
        const parsedData = JSON.parse(authData);
        if (!parsedData || !parsedData.user) {
          localStorage.removeItem('authToken'); // Clean up invalid data
          return rejectWithValue('Invalid authentication data');
        }
        return { user: parsedData.user, success: true };
      } catch (parseError) {
        localStorage.removeItem('authToken'); // Clean up corrupt data
        return rejectWithValue('Failed to parse authentication data');
      }
    } catch (error) {
      return rejectWithValue('Failed to load user');
    }
  }
);

// Logout user
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('users');
    return { success: true };
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  successMessage: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.successMessage = 'Registration successful!';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.successMessage = 'Login successful!';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Load user cases
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loadUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })

      // Logout cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.successMessage = 'Logged out successfully';
      });
  }
});

export const { clearError, clearSuccessMessage } = authSlice.actions;

export default authSlice.reducer;

