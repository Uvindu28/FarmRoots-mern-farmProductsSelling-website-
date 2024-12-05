import React, { useEffect } from 'react';
import fruits from '../assets/images/fruit.png';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Marketplace() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset from the original trigger point
    });
  }, []);

  const { t, i18n } = useTranslation("global");

  return (
    <div className="w-full h-[663px] bg-white">
      <div
        className="w-[1153px] h-[450px] bg-[#E9EFFB] relative rounded-3xl left-44 top-28"
        data-aos="fade-up"
      >
        <div className="absolute top-24 left-36" data-aos="fade-right">
          <h1
            className="font-poppins font-bold text-[42px] leading-[68px]"
            data-aos="zoom-in"
          >
            {t("marketplace.h1")}
          </h1>
          <h3
            className="text-center font-poppins font-semibold text-[16px] leading-[27px] w-full max-w-[430px] mt-1 relative right-5"
            data-aos="fade-up"
          >
            {t("marketplace.h2")}
          </h3>
          <button
            className="hover:bg-green-700 bg-green-600 duration-100 rounded-[5px] p-2 w-[150px] text-white font-poppins font-medium mt-6"
            data-aos="flip-left"
          >
            {t("marketplace.button")}
          </button>
        </div>
        <div
          className="absolute top-48 right-0 w-[400px] h-[330px] bg-white rounded-tl-[100px]"
          data-aos="fade-left"
        >
          <img
            src={fruits}
            alt="Fruits"
            className="w-[596px] h-[351px] absolute bottom-16 right-16"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}

export default Marketplace;