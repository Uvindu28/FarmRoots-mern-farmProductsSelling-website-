import React from 'react'
import homeimg  from '../assets/images/home.png';



function Body() {
   

  return (
    <div className='w-full h-[429px] bg-custom-gradient'>
      <img src={homeimg} alt="" className='w-[284px] h-[429px] rounded-e-full '/>
    
    <div className='relative bottom-[340px] left-[500px] font-semibold font-poppins space-y-4  '>
      <h1 className='leading-[46.94px] text-[40px] tracking-[1px]  w-[593px] h-[145px] '>Sell your products directly to thousands of businesses</h1>
      <h2 className='leading-[46.94px]  text-[22px]  w-[960px] h-[145px] relative bottom-7'>Your single source to a nationwide network of buyers looking to purchase fresh produce</h2>
      <button className='bg-primary rounded-[5px]  p-2 pl-2 w-[230px] h-[60px] text-white font-poppins font-medium relative bottom-16'>Join for Free</button>

    </div>
    

    </div>
  )
}
export default Body