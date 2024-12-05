import React,{useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from 'react-google-multi-lang';


const CustomLanguageSwitcher = () => {
    const { setLanguage } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);
  
    const toggleLanguage = () => {
      const newLanguage = isEnglish ? 'si' : 'en'; // 'si' for Sinhala and 'en' for English
      setLanguage(newLanguage);
      setIsEnglish(!isEnglish);
    };
  return (
    
    <div>
              <div className="flex space-x-4 relative left-[600px]">
        {/* Language Toggle Switch */}
        <div className="relative inline-block w-16 h-8 cursor-pointer" onClick={toggleLanguage}>
          <div className="absolute top-[5px] left-0 w-[60px] border-2 border-black h-6 rounded-full transition-colors duration-300"></div>
          <div className={`absolute top-[7.1px] w-5 h-5 bg-green-700 rounded-full transition-transform duration-300 transform ${isEnglish ? 'translate-x-0' : 'translate-x-[32px]'}`}></div>
          <span className={`absolute right-[69px] top-2 text-[14px] font-medium text-black transition-opacity duration-300`}>
            ENG
          </span>
          <span className={`absolute left-[69px] top-2 text-[14px] font-bold text-black transition-opacity duration-300`}>
            සිං
          </span>
        </div>

        {/* Login and Register Buttons */}
        {/* <button className="bg-primary rounded-[5px] p-2 w-[70px] text-white font-poppins font-medium">
          Login
        </button>
        <button className="bg-primary rounded-[5px] p-2 pl-2 w-[80px] text-white font-poppins font-medium">
          Register
        </button> */}

        <FaUserCircle className='w-[35px] h-[35px] text-green-600 relative left-16' />
      </div>
      
    </div>
  )
}

export default CustomLanguageSwitcher
