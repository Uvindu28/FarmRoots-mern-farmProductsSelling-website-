
import homeimg from '../../assets/images/sellerhome.jpg'



function SellerHome() {

  return (
    <div>
      <img src={homeimg} alt="" className='w-full h-[700px] object-cover' />
    <div className='w-full h-[702px] bg-gray-700'>
     <img src={homeimg} alt="" className='w-full h-[700px] object-cover' />
     <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/85  to-black/100 opacity-75 w-full h-[700px] top-[0px] "> </div>

     <div className='w-[696px] h-[216px] flex items-center justify-center  absolute inset-0 top-28 left-96'>
                <h1 className='h-[132px] text-center w-full max-w-[600px] mt-5 font-poppins font-bold text-[43px] leading-[60px] align-middle text-white'>
                Sell your products directly to thousands of businesses
                </h1>
            </div>

            <div className='w-[756px] h-[216px] absolute inset-1 flex items-center justify-center  top-72 left-[365px]'>
                <p className='w-full max-w-[470px] mt-5 h-[60px] font-poppins font-bold text-[20px] leading-[30px] text-white '>
                Your single source to a nationwide network of buyers looking to purchase fresh produc
                </p>
            </div>
           
            {/* <div className=' relative left-[626px] bottom-72'>
            <button className='bg-primary rounded-[5px] p-2 pl-2 w-[150px] text-white font-poppins font-medium ml-3 '></button>            
            </div> */}


    </div>
    </div>
  )
}

export default SellerHome