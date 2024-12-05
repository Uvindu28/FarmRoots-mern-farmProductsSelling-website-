import React from 'react';
import homeimg from '../assets/images/homeimg.jpg';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('global');

  return (
    <div className="relative w-full h-[702px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${homeimg})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        {/* Title */}
        <h1 className="text-center w-full max-w-[550px] font-poppins font-extrabold text-[50px] md:text-[60px] leading-[1.2] tracking-wide shadow-lg drop-shadow-lg">
          {t('home.h1')}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 w-full max-w-[600px] text-center font-poppins font-medium text-[18px] md:text-[22px] leading-[1.5] text-gray-200">
          {t('home.h2')}
        </p>

        {/* Button */}
        <button className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 rounded-[8px] px-6 py-3 text-white font-poppins font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          {t('home.button')}
        </button>
      </div>
    </div>
  );
}

export default Home;