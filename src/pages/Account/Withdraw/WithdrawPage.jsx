import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWalletBalance } from '../../../ReduxStateManagement/slices/packageSlice';
import Footer from '../../../partials/Footer';
import { motion } from "framer-motion";
import { IoMdArrowRoundDown } from 'react-icons/io';

const WithdrawalPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("account");
  
  // Get wallet balance from redux store
  const walletBalance = useSelector(state => state.packageDetail.walletBalance);
  // Get addresses from redux store
  const addresses = useSelector(state => state.addresses.addresses);
  
  // Local state
  const [selectedWallet, setSelectedWallet] = useState('profit');
  const [withdrawalCurrency, setWithdrawalCurrency] = useState('usdt');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    // Reset withdrawal currency if switching to withdrawal wallet
    if (wallet === 'withdrawal') {
      setWithdrawalCurrency('usdt');
    }
  };

  const handleCurrencySelect = (currency) => {
    setWithdrawalCurrency(currency);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimals
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setWithdrawalAmount(value);
      setErrorMessage('');
    }
  };

  const navigateToAddressDetails = () => {
    navigate('/user/account/address-detail');
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawalAmount);
    
    // Validate minimum withdrawal amount
    if (amount < 10) {
      setErrorMessage('minimum withdrawal amount $ 10');
      return;
    }

    // Validate sufficient balance
    if (amount > walletBalance) {
      setErrorMessage('Insufficient balance for withdrawal');
      return;
    }

    // Validate address is added and verified
    const selectedCurrencyAddress = addresses[withdrawalCurrency];
    if (!selectedCurrencyAddress || !selectedCurrencyAddress.address || !selectedCurrencyAddress.isVerified) {
      setErrorMessage(`Please add and verify your ${withdrawalCurrency.toUpperCase()} address first`);
      return;
    }

    // Process withdrawal
    dispatch(updateWalletBalance(walletBalance - amount));
    
    // Show success message
    setSuccessMessage(`Successfully withdrawn $${amount} to your ${withdrawalCurrency.toUpperCase()} address`);
    setWithdrawalAmount('');
    
    // Clear success message 
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className='max-w-xl mx-auto h-full bg-gradient-to-b from-[#000621] via-[#0a0e2e] to-[#141539]'>
      {/* Header */}
      <motion.header className="top-0 left-0 z-30 transition-all duration-300">
        <div className="px-4 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            <motion.button
              onClick={() => navigate(-1)}
              className="mr-4 bg-[#070d25]/80 p-2 rounded-lg border border-blue-500/20"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoMdArrowRoundDown className="text-xl transform rotate-90 text-blue-400" />
            </motion.button>
            <h1 className="text-2xl font-bold text-blue-400">Withdrawal</h1>
          </div>
        </div>
      </motion.header>
      <div className="flex flex-col items-center text-white px-3 sm:px-6 pt-8 pb-28 sm:pb-32">      
        {/* Address Addition Box */}
        <div className="w-full bg-[#1e2938] border border-[#3f89e2] rounded-2xl p-3 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-gray-400 text-base sm:text-lg font-bold">Rohini, </span>
              <span className="text-sm sm:text-base font-medium tracking-wide text-gray-400">
                {(!addresses.usdt?.isVerified && !addresses.xrp?.isVerified) ? 
                  "Withdrawal Address not added yet" : 
                  "Withdrawal Address added"}
              </span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            {/* Only show Add USDT Address button if not verified */}
            {!addresses.usdt?.isVerified && (
              <button 
                onClick={navigateToAddressDetails}
                className="bg-[#3f89e2] hover:bg-blue-600 text-white text-sm py-1 sm:py-2 px-3 sm:px-4 rounded-full cursor-pointer"
              >
                Add USDT Address
              </button>
            )}
            {/* Only show Add XRP Address button if not verified */}
            {!addresses.xrp?.isVerified && (
              <button 
                onClick={navigateToAddressDetails}
                className="bg-[#3f89e2] hover:bg-blue-600 text-white text-sm py-1 sm:py-2 px-3 sm:px-4 rounded-full cursor-pointer"
              >
                Add XRP Address
              </button>
            )}
          </div>
        </div>
        
        {/* Wallet Selection */}
        <div className="w-full mb-6">
          <h2 className="text-base tracking-wide text-gray-300 mb-3">Select Wallet</h2>
          <div className="flex gap-3">
            <button 
              className={`flex-1 px-2 sm:px-3 py-3 rounded-xl border ${selectedWallet === 'profit' ? 'bg-[#01204e] border-blue-500' : 'bg-gray-800 border-gray-700'}`}
              onClick={() => handleWalletSelect('profit')}
            >
              <div className="flex items-center text-[13px] sm:text-sm">
                <div className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full mr-2 sm:mr-4 ${selectedWallet === 'profit' ? 'bg-blue-400' : 'bg-gray-700'}`}></div>
                Profit Wallet
              </div>
            </button>
            <button 
              className={`flex-1 px-2 sm:px-3 py-3 rounded-xl border ${selectedWallet === 'withdrawal' ? 'bg-[#01204e] border-blue-500' : 'bg-gray-800 border-gray-700'}`}
              onClick={() => handleWalletSelect('withdrawal')}
            >
              <div className="flex items-center text-[13px] sm:text-sm">
                <div className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full mr-2 sm:mr-4 ${selectedWallet === 'withdrawal' ? 'bg-blue-400' : 'bg-gray-700'}`}></div>
                Withdrawal Wallet
              </div>
            </button>
          </div>
        </div>
        
        {/* Currency Selection */}
        <div className="w-full Helpdesk mb-6">
          <h2 className="text-base tracking-wide text-gray-300 mb-3">I want to withdraw in</h2>
          <div className="flex gap-3">
            <button 
              className={`flex-1 px-2 sm:px-3 py-3 rounded-xl border relative ${withdrawalCurrency === 'usdt' ? 'bg-[#01204e] border-blue-500' : 'bg-gray-800 border-gray-700'}`}
              onClick={() => handleCurrencySelect('usdt')}
            >
              <div className="flex items-center text-[13px] sm:text-sm">
                <div className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full mr-2 sm:mr-4 ${withdrawalCurrency === 'usdt' ? 'bg-blue-400' : 'bg-gray-700'}`}></div>
                USDT (BEP 20)
              </div>
              {withdrawalCurrency === 'usdt' && (
                <span className="absolute -top-3 sm:-top-2 right-0 bg-blue-600 text-xs px-2 rounded-bl-md rounded-tr-md">
                  Recommended
                </span>
              )}
            </button>
            {selectedWallet === 'profit' && (
              <button 
                className={`flex-1 px-2 sm:px-3 py-3 rounded-xl border ${withdrawalCurrency === 'xrp' ? 'bg-[#01204e] border-blue-500' : 'bg-gray-800 border-gray-700'}`}
                onClick={() => handleCurrencySelect('xrp')}
              >
                <div className="flex items-center text-[13px] sm:text-sm">
                  <div className={`w-4 sm:w-6 h-4 sm:h-6 rounded-full mr-3 sm:mr-4 ${withdrawalCurrency === 'xrp' ? 'bg-blue-400' : 'bg-gray-700'}`}></div>
                  XRP Ledger
                </div>
              </button>
            )}
          </div>
        </div>
        
        {/* Wallet Balance */}
        <div className="w-full mb-8 sm:mb-12">
          <h2 className="text-base tracking-wide text-gray-300 mb-3">Profit Wallet</h2>
          <div className="px-2 sm:px-4 py-3 sm:py-4 rounded-xl bg-blue-900 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-blue-500 mr-2 sm:mr-3"></div>
              <span className="text-base sm:text-lg">Current balance</span>
            </div>
            <div className="text-2xl font-bold">
              $ <span>{walletBalance.toLocaleString()}</span>.<span className="text-gray-400">00</span>
            </div>
          </div>
        </div>
        
        {/* Withdrawal Amount Input */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-sm sm:text-lg tracking-wide text-gray-400 mb-3">Enter the amount you want to withdraw</h2>
          
          <div className="relative w-full mb-3 sm:mb-5">
            <div className="flex items-center justify-center">
              <span className="text-blue-400 text-4xl mr-2">$</span>
              <input
                type="text"
                value={withdrawalAmount}
                onChange={handleAmountChange}
                className="bg-transparent text-white text-4xl font-bold outline-none text-center w-64 sm:w-92 withdraw-input"
                placeholder="0.00"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
          </div>
          
          <div className="flex items-center text-sm sm:text-base tracking-wide text-gray-400 mt-1">
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            minimum withdrawal amount $ 10
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">
              {errorMessage}
            </div>
          )}
        </div>
        
        {/* Withdraw Button */}
        <button 
          onClick={handleWithdraw}
          className={`px-8 sm:px-14 py-3 sm:py-4 rounded-3xl text-base sm:text-lg tracking-wide font-bold ${
            parseFloat(withdrawalAmount) >= 10 && addresses[withdrawalCurrency]?.isVerified 
              ? 'bg-blue-500 hover:bg-blue-600' 
              : 'bg-gray-700 cursor-not-allowed'
          }`}
          disabled={parseFloat(withdrawalAmount) < 10 || !addresses[withdrawalCurrency]?.isVerified}
        >
          {parseFloat(withdrawalAmount) > 0 
            ? `WITHDRAW $${parseFloat(withdrawalAmount).toLocaleString()}`
            : 'WITHDRAW'
          }
        </button>
        
        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-5 right-5 bg-green-600 p-4 rounded-md shadow-lg">
            {successMessage}
          </div>
        )}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 max-w-xl mx-auto"
      >
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
    </div>
  );
};

export default WithdrawalPage;