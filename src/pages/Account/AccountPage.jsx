// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '../../ReduxStateManagement/slices/authSlice';
// import { motion, AnimatePresence } from 'framer-motion';
// import { IoPersonOutline, IoKeyOutline, IoDocumentTextOutline } from 'react-icons/io5';
// import { BiChart, BiBarChartAlt2, BiLineChart, BiDownArrowCircle, BiTransfer } from 'react-icons/bi';
// import { FaMoneyBillWave } from 'react-icons/fa';
// import { RiTeamLine } from 'react-icons/ri';
// import { IoMdArrowRoundDown, IoMdMenu } from 'react-icons/io';
// import { PiHandDepositBold, PiHandWithdrawBold } from "react-icons/pi";
// import { MdOutlineArrowForwardIos, MdSupportAgent, MdHelpOutline, MdClose } from 'react-icons/md';
// import { FiShare2, FiLink } from 'react-icons/fi';
// import { AiOutlineLogout } from 'react-icons/ai';
// import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from 'react-icons/hi';
// import { BsArrowDownUp, BsThreeDotsVertical } from 'react-icons/bs';
// import { SiWhatsapp } from 'react-icons/si';
// import Footer from '../../partials/Footer';
// import headerLogo from "../../images/sidebarLogoCollapsed.png"
// import ODLImg from "../../images/ODlbg.png"

// // Active Plans List Component
// const ActivePlansList = ({ activatedPackages }) => {
//   const activePackages = activatedPackages?.filter(pkg => pkg.status === 'active') || [];

//   if (activePackages.length === 0) {
//     return null;
//   }

//   return (
//     <div className="w-full mt-2 mb-3">
//       <h3 className="text-xs text-center sm:text-left text-blue-300 mb-1">
//         <span className="text-sm sm:text-base opacity-70">Active Plans:</span>
//       </h3>
//       <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
//         {activePackages.map((pkg, index) => (
//           <motion.div
//             key={index}
//             className="bg-blue-900/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-blue-400/20"
//             whileHover={{ scale: 1.05, borderColor: "rgba(96, 165, 250, 0.4)" }}
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             {pkg.name}
//             {pkg.amount && ` (${pkg.amount} USDT)`}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Enhanced menu card component with glass morphism
// const MenuCard = ({ icon: Icon, label, onClick }) => (
//   <motion.div
//     onClick={onClick}
//     className="bg-gradient-to-br from-[#1c254a]/90 to-[#0e1738]/90 backdrop-blur-md p-1 sm:p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg border border-blue-400/20 h-24"
//     whileHover={{
//       scale: 1.05,
//       boxShadow: "0 10px 25px -5px rgba(59,130,246,0.3)",
//       y: -2,
//       borderColor: "rgba(96, 165, 250, 0.5)"
//     }}
//     whileTap={{ scale: 0.95 }}
//     transition={{ type: "spring", stiffness: 400, damping: 15 }}
//   >
//     <motion.div
//       className="text-xl sm:text-2xl mb-2 text-blue-400 bg-[#070d25]/80 p-1 sm:p-3 rounded-full border border-blue-500/20"
//       whileHover={{ y: -2, rotate: 10 }}
//     >
//       <Icon />
//     </motion.div>
//     <span className="text-xs sm:text-sm font-medium text-center text-blue-100">{label}</span>
//   </motion.div>
// );

// // Enhanced special menu item with vibrant styling
// const SpecialMenuCard = ({ icon: Icon, label, onClick, variant = "danger" }) => {
//   const colorClasses = {
//     danger: {
//       text: "text-red-400",
//       bg: "from-red-900/30 to-red-800/20",
//       border: "border-red-500/30",
//       iconBg: "bg-[#270a0a]/80",
//       glow: "rgba(239,68,68,0.25)"
//     },
//     primary: {
//       text: "text-blue-400",
//       bg: "from-blue-900/30 to-blue-800/20",
//       border: "border-blue-500/30",
//       iconBg: "bg-[#070d25]/80",
//       glow: "rgba(59,130,246,0.25)"
//     }
//   };

//   const colors = colorClasses[variant];

//   return (
//     <motion.div
//       onClick={onClick}
//       className={`bg-gradient-to-br ${colors.bg} backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg border ${colors.border} h-24`}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: `0 10px 25px -5px ${colors.glow}`,
//         y: -2
//       }}
//       whileTap={{ scale: 0.95 }}
//       transition={{ type: "spring", stiffness: 400, damping: 15 }}
//     >
//       <motion.div
//         className={`text-2xl mb-2 ${colors.text} ${colors.iconBg} p-3 rounded-full border border-opacity-20 ${variant === "danger" ? "border-red-500" : "border-blue-500"}`}
//         whileHover={{
//           rotate: variant === "danger" ? -12 : 10,
//           y: -2
//         }}
//       >
//         <Icon />
//       </motion.div>
//       <span className={`text-sm font-medium text-center ${colors.text}`}>{label}</span>
//     </motion.div>
//   );
// };

// // Enhanced section component with animated heading
// const Section = ({ title, children, className }) => (
//   <motion.section
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="mb-8"
//   >
//     <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-4 text-blue-300 flex w-full items-center">
//       <motion.span
//         className="inline-block mr-3 w-[100%]"
//         animate={{ y: [0, -2, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         {title}
//       </motion.span>
//       <motion.div
//         className="h-1.5 bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-transparent rounded-full flex-grow"
//         initial={{ width: 0 }}
//         animate={{ width: "100%" }}
//         transition={{ duration: 1.5, delay: 0.2 }}
//       />
//     </h3>
//     <div className="grid grid-cols-3 gap-4">
//       {children}
//     </div>
//   </motion.section>
// );

// // Enhanced about link component
// const AboutLink = ({ onClick }) => (
//   <motion.div
//     onClick={onClick}
//     className="bg-gradient-to-r from-[#1c254a]/90 to-[#0e1738]/90 backdrop-blur-md p-4 rounded-xl flex justify-between items-center cursor-pointer shadow-lg border border-blue-400/20"
//     whileHover={{
//       scale: 1.02,
//       boxShadow: "0 10px 25px -5px rgba(59,130,246,0.3)",
//       borderColor: "rgba(96, 165, 250, 0.5)"
//     }}
//     whileTap={{ scale: 0.98 }}
//   >
//     <div className="flex items-center">
//       <div className="bg-[#070d25]/80 p-2 rounded-lg mr-3 border border-blue-500/20">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
//           <circle cx="12" cy="12" r="10"></circle>
//           <line x1="12" y1="16" x2="12" y2="12"></line>
//           <line x1="12" y1="8" x2="12.01" y2="8"></line>
//         </svg>
//       </div>
//       <span className="font-bold text-blue-100">About RippFarm</span>
//     </div>

//     <motion.div
//       className="bg-[#070d25]/80 p-2 rounded-lg border border-blue-500/20"
//       whileHover={{ x: 4 }}
//     >
//       <MdOutlineArrowForwardIos className="text-blue-400" />
//     </motion.div>
//   </motion.div>
// );

// const AccountPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const { walletBalance, activatedPackages } = useSelector((state) => state.packageDetail);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState("account");

//   // Function to check if user has any active packages
//   const hasActivePackages = () => {
//     return activatedPackages && activatedPackages.some(pkg => pkg.status === 'active');
//   };

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isAuthenticated, navigate]);

//   const handleLogout = () => {
//     dispatch(logoutUser()).then(() => {
//       navigate("/user/login");
//     });
//   };

//   const copyReferralId = () => {
//     if (user && user.username) {
//       navigator.clipboard.writeText(user.username);
//       // Use a toast notification instead of alert
//       showNotification('Referral ID copied to clipboard!');
//     }
//   };

//   // Mock function for notification system
//   const showNotification = (message) => {
//     const notification = document.createElement('div');
//     notification.className = 'fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg z-50';
//     notification.textContent = message;
//     document.body.appendChild(notification);

//     setTimeout(() => {
//       notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
//       setTimeout(() => document.body.removeChild(notification), 300);
//     }, 2000);
//   };

//   const openWhatsApp = () => {
//     window.open('https://wa.me/1234567890', '_blank');
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col min-h-screen max-w-xl mx-auto text-white relative overflow-hidden"
//     >

//       {/* Background image overlay */}
//       <div className="absolute inset-0 z-0 opacity-90">
//         <img src={ODLImg} alt="Background" className="w-full h-full opacity-10" />
//       </div>

//       {/* Header with enhanced glass effect */}
//       <motion.header
//         className={`sticky top-0 z-30 transition-all duration-300 ${
//           isScrolled ? 'bg-[#121c3b]/95  shadow-blue-900/10' : 'bg-[#121c3b]/80 backdrop-blur-sm'
//         }`}
//       >
//         <div className="p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <motion.button
//               onClick={() => navigate(-1)}
//               className="mr-4 bg-[#070d25]/80 p-2 rounded-lg border border-blue-500/20"
//               whileHover={{ scale: 1.1, rotate: -5 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <IoMdArrowRoundDown className="text-xl transform rotate-90 text-blue-400" />
//             </motion.button>
//             <h1 className="text-lg font-bold text-blue-100">Account</h1>
//           </div>
//           <div className="flex items-center">
//            <img src={headerLogo} alt="Header Logo" className="w-8 h-8" />
//           </div>
//         </div>
//       </motion.header>

//       {/* User Profile with enhanced styling */}
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="p-4 z-10 border-b border-blue-500/10 "
//       >
//         <div className="flex flex-col sm:flex-row sm:items-center w-full">
//           {/* Profile + Status with enhanced effects */}
//           <div className="relative sm:w-[20%] flex justify-center sm:justify-start">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//               className="relative"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70 blur-md"></div>
//               <img
//                 src={user?.profilePic || `https://ui-avatars.com/api/?name=${user?.username || 'RippFarm user'}&background=4CAF50&color=fff`}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md shadow-blue-500/20 relative z-10"
//               />
//               {/* Dynamic status badge with enhanced animation */}
//               <motion.div
//                 className={`absolute -bottom-3 sm:-bottom-4 right-1 rounded-full px-2 py-1 text-xs font-medium shadow-md z-20 ${
//                   hasActivePackages() ? 'bg-gradient-to-r from-green-500 to-green-400 border border-green-300/30' : 'bg-gradient-to-r from-gray-600 to-gray-500 border border-gray-400/30'
//                 }`}
//                 animate={{ scale: hasActivePackages() ? [1, 1.1, 1] : 1 }}
//                 transition={{ duration: 2, repeat: hasActivePackages() ? Infinity : 0 }}
//               >
//                 {hasActivePackages() ? 'Active' : 'Inactive'}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Info and Actions with enhanced styling */}
//           <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow w-full sm:w-[80%]">
//             <h2 className="font-bold text-lg text-white text-center sm:text-left">{user?.username || 'RippFarm User'}</h2>

//             {/* Show all active packages */}
//             <ActivePlansList activatedPackages={activatedPackages} />

//             <div className="flex flex-col sm:flex-row items-center sm:items-start mt-2">
//               <div className="bg-[#070d25]/70 backdrop-blur-md rounded-full w-full sm:w-auto flex items-center px-3 py-1.5 border border-blue-500/20">
//                 <span className="text-gray-400 text-base sm:text-lg mr-6">Referral ID:</span>
//                 <h1 className="bg-transparent border-none outline-none text-sm sm:text-lg flex-grow text-blue-300">
//                   {user?.sponsorId || 'RippFarm'}
//                 </h1>
//                 <motion.button
//                   onClick={copyReferralId}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-blue-400 p-1 ml-4"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//                     <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//                   </svg>
//                 </motion.button>
//               </div>
//               <motion.button
//                 onClick={openWhatsApp}
//                 className="mt-2 sm:mt-0 sm:ml-6 bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-full shadow-md shadow-green-500/20 border border-green-500/30"
//                 whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(34,197,94,0.4)" }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <SiWhatsapp className="text-white" />
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Content Sections with improved spacing and styling */}
//       <div className="flex-grow px-4 py-6 space-y-8 overflow-y-auto pb-24 z-10">
//         {/* Profile Section */}
//         <Section title="Profile">
//           <MenuCard icon={IoPersonOutline} label="Account Info" onClick={() => navigate('/account-info')} />
//           <MenuCard icon={IoKeyOutline} label="Change Password" onClick={() => navigate('/change-password')} />
//           <MenuCard icon={IoDocumentTextOutline} label="USDT Details" onClick={() => navigate('/usdt-details')} />
//         </Section>

//         {/* Reports Section */}
//         <Section title="Reports">
//           <MenuCard icon={BiChart} label="Bot profit" onClick={() => navigate('/user/report/bot-profit')} />
//           <MenuCard icon={BiBarChartAlt2} label="Level income" onClick={() => navigate('/user/report/level-income')} />
//           <MenuCard icon={BiLineChart} label="Direct team" onClick={() => navigate('/user/report/direct')} />
//           <MenuCard icon={BiDownArrowCircle} label="Downline team" onClick={() => navigate('/user/report/downline')} />
//           <MenuCard icon={BiTransfer} label="Transactions" onClick={() => navigate('/user/report/transaction-report')} />
//           <MenuCard icon={FaMoneyBillWave} label="My Earning" onClick={() => navigate('/user/report/my-earning')} />
//         </Section>

//         {/* Deposit/Withdrawal Section */}
//         <Section title="Deposit / Withdrawal">
//           <MenuCard icon={PiHandDepositBold} label="Fund Deposit" onClick={() => navigate('/user/deposit')} />
//           <MenuCard icon={PiHandWithdrawBold} label="Fund Withdrawal" onClick={() => navigate('/fund-withdrawal')} />
//           <MenuCard icon={BsArrowDownUp} label="Fund Transfer" onClick={() => navigate('/fund-transfer')} />
//         </Section>

//         {/* Referral Program */}
//         <Section title="Referral Program">
//           <MenuCard icon={FiLink} label="Share Referral Link" onClick={() => navigate('/share-referral')} />
//           <MenuCard icon={FiShare2} label="Share App" onClick={() => navigate('/share-app')} />
//           <MenuCard icon={RiTeamLine} label="My Network" onClick={() => navigate('/my-network')} />
//         </Section>

//         {/* Help Center */}
//         <Section title="Help center">
//           <MenuCard icon={MdSupportAgent} label="Support" onClick={() => navigate('/support')} />
//           <MenuCard icon={MdHelpOutline} label="FAQ" onClick={() => navigate('/faq')} />
//           <SpecialMenuCard icon={AiOutlineLogout} label="Logout" onClick={handleLogout} variant="danger" />
//         </Section>

//         {/* About Section */}
//         <AboutLink onClick={() => navigate('/about-rippfarm')} />
//       </div>

//       {/* Footer with improved animation */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="z-10"
//       >
//         <Footer activeTab={activeTab} setActiveTab={setActiveTab}/>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AccountPage;



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../ReduxStateManagement/slices/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoPersonOutline,
  IoKeyOutline,
  IoDocumentTextOutline,
  IoPerson,
} from "react-icons/io5";
import {
  BiChart,
  BiBarChartAlt2,
  BiLineChart,
  BiDownArrowCircle,
  BiTransfer,
} from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { IoMdArrowRoundDown, IoMdMenu } from "react-icons/io";
import { PiHandDepositBold, PiHandWithdrawBold } from "react-icons/pi";
import {
  MdOutlineArrowForwardIos,
  MdSupportAgent,
  MdHelpOutline,
  MdClose,
} from "react-icons/md";
import { FiShare2, FiLink } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsArrowDownUp, BsThreeDotsVertical } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Footer from "../../partials/Footer";
import headerLogo from "../../images/sidebarLogoCollapsed.png";
import ODLImg from "../../images/ODlbg.png";
import bgLogo from "../../images/accountPageLogo.png"

// Active Plans List Component
const ActivePlansList = ({ activatedPackages }) => {
  const activePackages =
    activatedPackages?.filter((pkg) => pkg.status === "active") || [];

  if (activePackages.length === 0) {
    return null;
  }

  return (
    <div className=" flex flex-row items-center justify-center gap-1 bg-[#061758]/70 backdrop-blur-md rounded-full w-auto px-3 py-1.5 border border-blue-500/20">
      <h3 className="text-xs text-center sm:text-left text-blue-300 ">
        <span className="text-gray-400 text-sm ">Active Plan {" "}:</span>
      </h3>
      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
        {activePackages.map((pkg, index) => (
          <motion.div
            key={index}
            className=" text-sm sm:text-xs  flex-grow text-blue-300 "
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {pkg.name}
            {pkg.amount && ` (${pkg.amount} USDT)`}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// menu card component
const MenuCard = ({ icon: Icon, label, onClick }) => (
  <motion.div
    onClick={onClick}
    className="flex flex-col items-center justify-center"

    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  >
    <motion.div className=" mb-2 text-[#6473c0] ">
      <Icon className="w-8 sm:w-10 h-8 sm:h-10"/>
    </motion.div>
    <span className="text-xs sm:text-sm font-semibold text-center text-[#6e75b7]">
      {label}
    </span>
  </motion.div>
);

// special menu item
const SpecialMenuCard = ({
  icon: Icon,
  label,
  onClick,
  variant = "danger",
}) => {
  const colorClasses = {
    danger: {
      text: "text-red-400",
      bg: "from-red-900/30 to-red-800/20",
      border: "border-red-500/30",
      iconBg: "bg-[#270a0a]/80",
      glow: "rgba(239,68,68,0.25)",
    },
    primary: {
      text: "text-blue-400",
      bg: "from-blue-900/30 to-blue-800/20",
      border: "border-blue-500/30",
      iconBg: "bg-[#070d25]/80",
      glow: "rgba(59,130,246,0.25)",
    },
  };

  const colors = colorClasses[variant];

  return (
    <motion.div
      onClick={onClick}
      className={`bg-gradient-to-br ${colors.bg} backdrop-blur-md p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg border ${colors.border} h-24`}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 25px -5px ${colors.glow}`,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.div
        className={`text-xl sm:text-2xl mb-2 ${colors.text} ${
          colors.iconBg
        } p-2 rounded-full border border-opacity-20 ${
          variant === "danger" ? "border-red-500" : "border-blue-500"
        }`}
        whileHover={{
          rotate: variant === "danger" ? -12 : 10,
          y: -2,
        }}
      >
        <Icon />
      </motion.div>
      <span className={`text-sm font-medium text-center ${colors.text}`}>
        {label}
      </span>
    </motion.div>
  );
};

// section component
const Section = ({ title, className }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6 sm:mb-8"
  >
    <h3 className="text-base sm:text-xl font-semibold  text-[#a8b0f1] flex gap-5 w-full items-center">
      <div className="rotate-180 flex flex-col gap-[2px]">
        <div className="w-6 h-[5px] bg-gradient-to-r from-transparent  to-[#abb2eb]/60 rounded-xl"></div>
        <div className="w-4 h-[5px] bg-gradient-to-r from-transparent  to-[#a8b0f1]/60 rounded-xl"></div>
        <div className="w-2 h-[5px] bg-gradient-to-r from-transparent  to-[#a8b0f1]/60 rounded-xl"></div>
      </div>
      <motion.span
        className="inline-block  w-[100%]"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {title}
      </motion.span>
      <div className="flex flex-col gap-[2px]">
        <div className="w-2 h-[5px] bg-gradient-to-r from-transparent  to-[#a8b0f1]/60 rounded-xl"></div>
        <div className="w-4 h-[5px] bg-gradient-to-r from-transparent  to-[#a8b0f1]/60 rounded-xl"></div>
        <div className="w-6 h-[5px] bg-gradient-to-r from-transparent  to-[#a8b0f1]/60 rounded-xl"></div>
      </div>
     
    </h3>
    
  </motion.section>
);

const AboutLink = ({ onClick }) => (
  <motion.div
    onClick={onClick}
    className="bg-gradient-to-r from-[#061758]/90 to-[#0e1738]/90 backdrop-blur-md p-4 rounded-xl flex justify-between items-center cursor-pointer shadow-lg border border-blue-400/20"
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(59,130,246,0.3)",
      borderColor: "rgba(96, 165, 250, 0.5)",
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center">
      <div className="bg-[#070d25]/80 p-2 rounded-lg mr-3 border border-blue-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
      <span className="font-bold text-blue-100">About RippFarm</span>
    </div>

    <motion.div
      className="bg-[#070d25]/80 p-2 rounded-lg border border-blue-500/20"
      whileHover={{ x: 4 }}
    >
      <MdOutlineArrowForwardIos className="text-blue-400" />
    </motion.div>
  </motion.div>
);

const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { walletBalance, activatedPackages } = useSelector(
    (state) => state.packageDetail
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("account");

  // Function to check if user has any active packages
  const hasActivePackages = () => {
    return (
      activatedPackages &&
      activatedPackages.some((pkg) => pkg.status === "active")
    );
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/");
    });
  };

  const copyReferralId = () => {
    if (user && user.username) {
      navigator.clipboard.writeText(user.username);

      showNotification("Referral ID copied to clipboard!");
    }
  };

  // Mock function for notification system
  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className =
      "fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg z-50";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add(
        "opacity-0",
        "transition-opacity",
        "duration-300"
      );
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    // Main wrapper
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col min-h-screen max-w-xl mx-auto text-white bg-gradient-to-b from-[#000621] via-[#0a0e2e] to-[#141539] relative overflow-hidden"
    >
      <img src={bgLogo} alt="Header Logo" className="w-72 sm:w-90 h-72 sm:h-90 absolute opacity-50 top-0 -left-12 sm:-left-16" />
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ODLImg}
          alt="Background"
          className="w-full h-full opacity-10"
        />
      </div>

      {/* Header  */}
      <motion.header
        className="sticky top-0 z-30 transition-all duration-300 "
      >
        <div className="px-4 pt-3 pb-1 flex justify-between items-center">
          <div className="flex items-center">
            <motion.button
              onClick={() => navigate(-1)}
              className="mr-4 bg-[#070d25]/80 p-2 rounded-lg border border-blue-500/20"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoMdArrowRoundDown className="text-xl transform rotate-90 text-blue-400" />
            </motion.button>
          
          </div>
         
        </div>
      </motion.header>

      {/* User Profile  */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-4 z-10 border-b border-blue-500/10"
      >
        <div className="flex flex-col sm:flex-row items-center w-full">
          {/* Profile + Status  */}

          {/* Info and Actions  */}
          <div className=" sm:mt-0 sm:ml-4 flex-grow w-full sm:w-[80%]">
            <div className="flex flex-row gap-5 sm:gap-8 items-center justify-center">

          <div className="relative sm:w-[20%] flex justify-center sm:justify-start">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70 blur-md"></div>
              <img
                src={
                  user?.profilePic ||
                  `https://ui-avatars.com/api/?name=${
                    user?.username || "RippFarm user"
                  }&background=0f122c&color=fff`
                }
                alt="Profile"
                className="w-16 sm:w-24 h-16 sm:h-24 rounded-full border-2 border-[#7f7ff1] shadow-md shadow-blue-500/20 relative z-10"
              />
              {/* Dynamic status badge */}
              <motion.div
                className={`absolute top-1 sm:top-2 -right-[1px] rounded-full w-4 sm:w-5 h-4 sm:h-5 shadow-md z-20 ${
                  hasActivePackages()
                    ? "bg-gradient-to-r from-green-500 to-green-700 border border-green-300/30"
                    : "bg-gradient-to-r from-gray-600 to-gray-500 border border-gray-400/30"
                }`}
                animate={{ scale: hasActivePackages() ? [1, 1.1, 1] : 1 }}
                transition={{
                  duration: 2,
                  repeat: hasActivePackages() ? Infinity : 0,
                }}
              >
               
              </motion.div>
            </motion.div>
          </div>
            <div className="flex flex-col ">

            <div className="flex flex-row gap-4">

            <h2 className="font-bold text-2xl sm:text-3xl text-[#b5befa] text-center  ">
              {user?.username || "RippFarm User"}
              
            </h2>
            <h2 className={` rounded-4xl px-4 sm:px-6  flex items-center text-sm sm:text-base  font-medium shadow-md z-20 ${
                  hasActivePackages()
                    ? "bg-[#010c44] border-2 border-[#162a8d] text-[#888fcf] shadow-sm shadow-[#162a8d]"
                    : "bg-gradient-to-r from-gray-600 to-gray-500 border border-gray-400/30"
                }`}>

            {hasActivePackages()?"Active" :"Inactive"}
            </h2>
            </div>
            <h1 className="text-[#676c96] font-medium text-lg sm:text-xl">{user?.fullName || "RippFarm User"}</h1>
            </div>
            </div>

            
            <div className={`flex flex-col sm:flex-row items-center justify-enter gap-3 sm:gap-4 mt-6 ${hasActivePackages()? "" : "justify-center" }`}>

            {/* Show all active packages */}
            <ActivePlansList activatedPackages={activatedPackages} />

            <div className="flex flex-row items-center ">
              <div className="bg-[#061758]/70 backdrop-blur-md rounded-full w-full sm:w-auto flex items-center px-3 py-1.5 border border-blue-500/20">
                <span className="text-gray-400 text-sm  mr-2">
                  Referral ID:
                </span>
                <h1 className="bg-transparent border-none outline-none text-sm  flex-grow text-blue-300">
                  {user?.sponsorId || "RippFarm"}
                </h1>
                <motion.button
                  onClick={copyReferralId}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-400  ml-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </motion.button>
              </div>
              <motion.button
                onClick={openWhatsApp}
                className=" ml-3 bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-full shadow-md shadow-green-500/20 border border-green-500/30"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 12px rgba(34,197,94,0.4)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <SiWhatsapp className="text-white" />
              </motion.button>
            </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <div className="px-4 sm:px-6 overflow-y-auto pb-24 z-10 mt-5 space-y-6">
        {/* Profile Section */}
        <div className="w-full flex flex-col items-center justify-center px-3 py-4 rounded-4xl bg-gradient-to-r from-[#14173d] via-[#282f5b] to-[#12153b] border-t-1 border-r-1   border-[#3b497e]   cursor-pointer shadow-lg">
          <Section title="Account Privileges" />
          <div className="grid grid-cols-3 gap-3 sm:gap-10">
            <MenuCard
              icon={IoPerson}
              label="Account Info"
              onClick={() => navigate("/account-info")}
            />

            <MenuCard
              icon={IoKeyOutline} label="Change Password" onClick={() => navigate('/change-password')}
            />

            <MenuCard
             icon={IoDocumentTextOutline} label="USDT Details" onClick={() => navigate('/usdt-details')}
            />
          </div>
        </div>

        {/* Reports Section */}
        <div className="w-full flex flex-col items-center justify-center px-3 py-4 rounded-4xl bg-gradient-to-r from-[#0d1333] via-[#28305a] to-[#0d1333] border-t-1 border-l-1   border-[#3b497e]   cursor-pointer shadow-lg">
          <Section title="Reports" />
          <div className="grid grid-cols-3 gap-x-8 sm:gap-x-14 gap-y-3 sm:gap-y-6">
            <MenuCard
              icon={BiChart}
              label="Bot profit"
              onClick={() => navigate("/user/report/bot-profit")}
            />

<MenuCard
             icon={BiBarChartAlt2}
             label="Level income"
             onClick={() => navigate("/user/report/level-income")}
            />

            <MenuCard
              icon={BiLineChart}
              label="Direct team"
              onClick={() => navigate("/user/report/direct")}
            />
             <MenuCard
            icon={BiDownArrowCircle}
            label="Downline team"
            onClick={() => navigate("/user/report/downline")}
          />
          <MenuCard
            icon={BiTransfer}
            label="Transactions"
            onClick={() => navigate("/user/report/transaction-report")}
          />
          <MenuCard
            icon={FaMoneyBillWave}
            label="My Earning"
            onClick={() => navigate("/user/report/my-earning")}
          />

            
          </div>
        </div>
      

        {/* Deposit/Withdrawal Section */}
        <div className="w-full flex flex-col items-center justify-center px-3 py-4 rounded-4xl bg-gradient-to-r from-[#0d1333] via-[#28305a] to-[#0d1333] border-t-1 border-r-1   border-[#3b497e]  cursor-pointer shadow-lg">
          <Section title="Deposit / Withdrawal" />
          <div className="grid grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-6">
          <MenuCard
            icon={PiHandDepositBold}
            label="Fund Deposit"
            onClick={() => navigate("/user/deposit")}
          />
          <MenuCard
            icon={PiHandWithdrawBold}
            label="Fund Withdrawal"
            onClick={() => navigate("/fund-withdrawal")}
          />
          <MenuCard
            icon={BsArrowDownUp}
            label="Fund Transfer"
            onClick={() => navigate("/fund-transfer")}
          />

            
          </div>
        </div>
      


        {/* Referral Program */}
        <div className="w-full flex flex-col items-center justify-center px-3 py-4 rounded-4xl bg-gradient-to-r from-[#0d1333] via-[#28305a] to-[#0d1333] border-t-1 border-l-1   border-[#3b497e]   cursor-pointer shadow-lg">
          <Section title="Referral Program" />
          <div className="grid grid-cols-3 gap-x-3 sm:gap-x-10 gap-y-6">
          <MenuCard
            icon={FiLink}
            label="Share Referral Link"
            onClick={() => navigate("/share-referral")}
          />
          <MenuCard
            icon={FiShare2}
            label="Share App"
            onClick={() => navigate("/share-app")}
          />
          <MenuCard
            icon={RiTeamLine}
            label="My Network"
            onClick={() => navigate("/my-network")}
          />
            
          </div>
        </div>
       
        {/* Help Center */}
        <div className="w-full flex flex-col items-center justify-center px-3 py-4 rounded-4xl bg-gradient-to-r from-[#0d1333] via-[#28305a] to-[#0d1333] border-t-1 border-r-1   border-[#3b497e]  cursor-pointer shadow-lg">
          <Section title="Help center" />
          <div className="grid grid-cols-3 gap-x-6 sm:gap-x-18 gap-y-6">
          <MenuCard
            icon={MdSupportAgent}
            label="Support"
            onClick={() => navigate("/support")}
          />
          <MenuCard
            icon={MdHelpOutline}
            label="FAQ"
            onClick={() => navigate("/faq")}
          />
          <SpecialMenuCard
            icon={AiOutlineLogout}
            label="Logout"
            onClick={handleLogout}
            variant="danger"
          />
            
          </div>
        </div>
      
        {/* About Section */}
        <AboutLink onClick={() => navigate("/about-rippfarm")} />
      </div>

      {/* Footer with improved animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10"
      >
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
    </motion.div>
  );
};

export default AccountPage;
