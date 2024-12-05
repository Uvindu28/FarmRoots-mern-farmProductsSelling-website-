import { useState } from 'react';
import { useTranslation } from 'react-i18next';


import NavBar from './NavBar';

function Header() {
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('eng'); // Default language

  const handleToggleLanguage = () => {
    const newLanguage = language === 'eng' ? 'sin' : 'eng';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Change the language using i18n
  };

  return (
    <div className="shadow-md h-[73px] w-full flex items-center px-6">



      {/* Navbar and Language Toggle Button */}
      <NavBar language={language} onToggleLanguage={handleToggleLanguage} />
    </div>
  );
}

export default Header;