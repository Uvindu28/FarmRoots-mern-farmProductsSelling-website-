import React, { useEffect } from 'react';
import select from '../assets/images/selectimg.jpg';
import { IoSettings } from "react-icons/io5";
import { FaPiggyBank } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS

function SelectUs() {
  const { t, i18n } = useTranslation("global");

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full h-[754px] bg-primary text-white p-6 relative">
      <h1 className='font-poppins font-bold text-white text-[44px] leading-[64px] ml-24 relative top-6'
          data-aos="fade-up">
        {t("selectus.h1")}
      </h1>
 
      <div className="flex flex-col gap-[2px] font-poppins md:flex-row justify-around items-start space-y-2 md:space-y-0 md:space-x-6 relative right-24 top-24">
        {/* Flex Item 1 */}
        <div className="max-w-md" data-aos="fade-right">
          <span><IoSettings className='w-[36px] h-[38px] mb-4'/></span>
          <h3 className="text-xl font-bold mb-2">{t("selectus.itm1h1")}</h3>
          <p className="text-base leading-relaxed w-full max-w-[330px]">
            {t("selectus.itm1h2")}
          </p>
        </div>
        {/* Flex Item 2 */}
        <div className="max-w-md relative right-72" data-aos="fade-left">
          <span><FaPiggyBank className='w-[36px] h-[38px] mb-4'/></span>
          <h3 className="text-xl font-bold mb-2">{t("selectus.itm2h1")}</h3>
          <p className="text-base leading-relaxed w-full max-w-[350px]">
            {t("selectus.itm2h2")}
          </p>
        </div>
      </div>
 
      <div className="flex flex-col font-poppins gap-[2px] md:flex-row justify-around items-start space-y-2 md:space-y-0 md:space-x-6 relative right-24 top-44">
        {/* Flex Item 3 */}
        <div className="max-w-md" data-aos="fade-right">
          <span><GiWorld className='w-[36px] h-[38px] mb-4'/></span>
          <h3 className="text-xl font-bold mb-2">{t("selectus.itm3h1")}</h3>
          <p className="text-base leading-relaxed w-full max-w-[330px]">
            {t("selectus.itm3h2")}
          </p>
        </div>
        {/* Flex Item 4 */}
        <div className="max-w-md relative right-72" data-aos="fade-left">
          <span><VscVerifiedFilled className='w-[36px] h-[38px] mb-4'/></span>
          <h3 className="text-xl font-bold mb-2">{t("selectus.itm4h1")}</h3>
          <p className="text-base leading-relaxed w-full max-w-[350px]">
            {t("selectus.itm4h2")}
          </p>
        </div>
      </div>

      {/* Right Corner Image */}
      <img
        src={select} // Replace with your image URL
        alt="Decorative"
        className="absolute top-0 right-0 rounded-s-full h-[754px]"
        data-aos="zoom-in"
      />
    </div>
  )
}

export default SelectUs;