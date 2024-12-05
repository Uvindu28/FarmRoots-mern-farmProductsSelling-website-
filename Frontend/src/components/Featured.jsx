import React, { useEffect } from 'react';
import image1 from '../assets/images/infinityi.png';
import image2 from '../assets/images/infinityii.png';
import image3 from '../assets/images/infinityiii.png';
import image4 from '../assets/images/infinityiv.png';
import image5 from '../assets/images/infinityv.png';
import image6 from '../assets/images/infinityvi.png';
import image7 from '../assets/images/infinityvii.png';
import image8 from '../assets/images/infinityviii.png';
import image9 from '../assets/images/infinityix.png';
import image10 from '../assets/images/founder.png';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS

function Featured() {
  const { t, i18n } = useTranslation("global");

  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='w-full h-[730px] bg-primary'>
      <div className='w-full h-[443px] rounded-b-[180px] bg-[#EDF2F7]'>
        <div className='flex items-center justify-center relative top-9'>
          <h1 className='font-poppins text-[#2D3748] font-bold text-[44px] leading-[67px]'
              data-aos="fade-up">
            {t("featured.h1")}
          </h1>
        </div>
        <div className="overflow-hidden bg-[#EDF2F7] py-6 relative top-20">
          <div className="flex w-full animate-scroll" data-aos="slide-up">
            {images.concat(images).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`img-${index}`}
                className="w-[180px] h-[60px] mx-4"
                data-aos="fade-up" // Adds fade-up animation to images
              />
            ))}
          </div>
        </div>
      </div>

      <div className='w-[1063px] h-[210px] bg-white shadow-xl items-center relative bottom-32 rounded-md left-56'
           data-aos="fade-up">
        <div className='w-[125px] h-[125px] bg-gray-200 relative top-11 left-16 rounded-full'>
          <img src={image10} alt="" className='w-[125px] h-[125px]' />
        </div>
        <div>
          <h1 className='w-full max-w-[760px] text-center relative bottom-16 left-56 text-[#2D3748] font-poppins font-medium text-[16px] leading-[24px]'
              data-aos="fade-up">
            {t("featured.p")}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
