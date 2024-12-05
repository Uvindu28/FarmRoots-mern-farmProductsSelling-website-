import React from 'react';

const CardBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[200px] h-[250px] relative rounded-[20px] bg-gradient-to-br from-[#3a3838cc] via-[#1f1f1f] to-[#1f1f1f] shadow-[0_25px_50px_rgba(0,0,0,0.55)] cursor-pointer transition-transform duration-300 hover:scale-[0.9]">
        <span className="absolute top-[-10px] left-[-10px] w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
          <span className="absolute w-[150%] h-[40px] bg-gradient-to-br from-[#ff6547] via-[#ffb144] to-[#ff7053] transform rotate-[-45deg] translate-y-[-20px] flex items-center justify-center text-white font-semibold tracking-widest uppercase shadow-[0_5px_10px_rgba(0,0,0,0.23)]">
            Premium
          </span>
        </span>
        <span className="absolute bottom-0 left-0 w-[10px] h-[10px] z-[-1] bg-gradient-to-br from-[#FF512F] to-[#F09819] shadow-[140px_-140px_0px_rgba(204,63,71,0.5)]"></span>
      </div>
    </div>
  );
}

export default CardBox;
