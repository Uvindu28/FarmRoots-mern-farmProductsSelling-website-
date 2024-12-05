import { useEffect } from 'react';
import sellers from '../assets/images/sellers.png';
import buyers from '../assets/images/image.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux'; // Assuming Redux is used

function SellersBuyers() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  // Access login state (e.g., Redux or Context)
  const currentUser = useSelector((state) => state.user.currentUser);
  const role = currentUser?.role; // Assuming userType is part of currentUser

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);

  const handleLoginClick = (type) => {
    if (currentUser) {
      // User is logged in, navigate based on role
      if (role === 'Farmer') {
        navigate('shop');
      } else if (role === 'Buyer') {
        navigate('buyershop');
      }
    } else {
      // User is not logged in, navigate to login page with role info
      navigate('/login', { state: { role: type } });
    }
  };

  return (
    <div className='w-full h-[623px] bg-white'>
      <div className='relative top-8'>
        {/* Heading with Fade-in effect */}
        <div className='flex items-center justify-center font-poppins' data-aos="fade-up">
          <h1 className='font-bold text-[34px] leading-[51px] text-center w-full max-w-[550px] mt-5'>
            {t("SellersBuyers.mainH1")}
          </h1>
        </div>

        {/* Description with Fade-in effect */}
        <p className='flex items-center justify-center font-poppins font-bold text-[16px] leading-[24px] text-gray-500 mt-3' data-aos="fade-up">
          {t("SellersBuyers.mainP")}
        </p>

        <div className='flex gap-[50px] items-center justify-center mt-12'>
          {/* Seller Card */}
          <div className='w-[514px] h-[428px] rounded-[8px] bg-[#E9EFFB] shadow-lg hover:shadow-2xl' data-aos="fade-right">
            <div className='flex flex-col'>
              <img
                src={sellers}
                alt="Sellers"
                className='w-[443px] h-[206px] hover:scale-105 transition-transform duration-300 rounded-[5px] mx-auto my-4'
              />
            </div>
            <h1 className='font-poppins font-bold text-[32px] leading-[42px] text-[#2D3748] ml-4 mt-3'>
              {t("sellers.sellersH1")}
            </h1>
            <h3 className='font-poppins font-bold text-[14px] leading-[21px] ml-4 mt-2 text-gray-600'>
              {t("sellers.sellersh3")} <span className='font-medium'>{t("sellers.sellersh3span")}</span>
            </h3>
            <h3 className='font-poppins font-bold text-[14px] leading-[21px] ml-4 text-gray-600'>
              {t("sellers.sellersh4")} <span className='font-medium'>{t("sellers.sellersh4span")}</span>
            </h3>
            <button
              onClick={() => handleLoginClick('Farmer')}
              className='hover:bg-green-700 bg-green-600 rounded-[5px] p-2 w-[180px] text-white font-poppins font-medium ml-4 mt-4 transition duration-300'>
              {t("sellers.sellersbutton")}
            </button>
          </div>

          {/* Buyer Card */}
          <div className='w-[514px] h-[428px] rounded-[8px] bg-[#E9EFFB] shadow-lg hover:shadow-2xl' data-aos="fade-left">
            <div className='flex flex-col'>
              <img
                src={buyers}
                alt="Buyers"
                className='w-[443px] h-[206px] hover:scale-105 transition-transform duration-300 rounded-[5px] mx-auto my-4'
              />
            </div>
            <h1 className='font-poppins font-bold text-[32px] leading-[42px] text-[#2D3748] ml-4 mt-3'>
              {t("buyers.buyersH1")}
            </h1>
            <h3 className='font-poppins font-bold text-[14px] leading-[21px] ml-4 mt-2 text-gray-600'>
              {t("buyers.buyersh3")} <span className='font-medium'>{t("buyers.buyersh3span")}</span>
            </h3>
            <h3 className='font-poppins font-bold text-[14px] leading-[21px] ml-4 text-gray-600'>
              {t("buyers.buyersh4")} <span className='font-medium'>{t("buyers.buyersh4span")}</span>
            </h3>
            <button
              onClick={() => handleLoginClick('Buyer')}
              className='hover:bg-green-700 bg-green-600 rounded-[5px] p-2 w-[180px] text-white font-poppins font-medium ml-4 mt-4 transition duration-300'>
              {t("buyers.buyersbutton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersBuyers;
