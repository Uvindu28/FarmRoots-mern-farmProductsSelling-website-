import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import abouti from "../assets/images/abouti.jpg";
import aboutii from "../assets/images/aboutii.jpg";
import aboutiii from "../assets/images/abou.jpg";
import logo from "../assets/images/logo.png";
import hayles from "../assets/images/Hayleys.png";
import elephanthouse from "../assets/images/elephanthouse.png";
import cargils from "../assets/images/cargills.png";
import keels from "../assets/images/keels.png";
import cbl from "../assets/images/cbl.png";
import araliya from "../assets/images/Araliya.png";
import nestlay from "../assets/images/nestlay.png";
import nbc from "../assets/images/nbc.png";
import malibon from "../assets/images/maliban.png";
import Footer from './Footer/Footer';




function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
<div className="relative w-full h-auto font-poppins overflow-hidden">
  {/* Background Image */}
  <img src={abouti} alt="" className="object-cover w-full h-72" data-aos="fade-up" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 h-72 bg-gradient-to-tr from-[#030303] via-black/50 to-black/90"></div>

  {/* Logo Section */}
  <div className="absolute top-4 left-4 flex items-center space-x-3 z-10">
  <img src={logo} alt="Farmroot Logo" className="w-12 h-12 rounded-full" />
  <h1 className="text-3xl font-bold text-white">Farmroot</h1>

  {/* Add the About Us tag */}
  <h2 className="text-6xl font-extrabold  text-white relative left-[414px] top-24 font-poppins">About Us</h2>
</div>



  {/* Title */}
 
  {/* About Content */}
  <div className="relative w-full bg-gray-50 py-12 px-8 md:px-16 lg:px-24 rounded-lg shadow-lg"  data-aos="fade-right">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left Side */}
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">We are Farmroot</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-4xl font-bold text-green-600">225</h4>
          <p className="text-gray-700 mt-2">
          Farmers registered to sell their fresh organic produce and handmade goods.
          </p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-green-600">75</h4>
          <p className="text-gray-700 mt-2">
          Buyers purchasing high-quality, organic, and locally grown products directly from farmers.
          </p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-green-600">1800</h4>
          <p className="text-gray-700 mt-2">
          Successful transactions empowering farmers and delivering fresh produce to families nationwide.</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="space-y-6" >
      <p className="text-black font-bold leading-relaxed">
        <div className='h-16 w-1 bg-primary relative right-5 top-16'>  </div>
        Organic farming is not just a method; it's a commitment to work in harmony with nature, to nurture the soil, cultivate with care, and foster a sustainable legacy for future generations. It embodies a philosophy that respects the balance of ecosystems while providing for human needs.
      
      </p>
      <p className="text-gray-700 leading-relaxed">
      Organic farming is an agricultural approach that prioritizes the use of natural and sustainable practices to cultivate crops and raise livestock. The principles of organic farming are rooted in enhancing soil health, promoting biodiversity, and minimizing the use of synthetic chemicals. This method ensures that farming remains environmentally friendly and health-conscious.      </p>
      <p className="text-gray-700 leading-relaxed">
      Techniques such as crop rotation, cover cropping, and composting are employed to enhance soil structure and fertility. These practices not only improve the quality of the produce but also preserve the land for future use. Organic farming thrives on sustainable innovation, ensuring that agriculture benefits both nature and society.

</p>
    </div>
  </div>
</div>

{/* Quality of us */}

{/* Quality of Us */}
<div className="relative w-full bg-white py-12 px-8 md:px-16 lg:px-24 rounded-lg shadow-lg mt-12"  data-aos="fade-up">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Image */}
    <div>
      <img src={aboutiii} alt="Quality of Us" className="w-full h-[600px] object-cover rounded-3xl shadow-md" />
    </div>

    {/* Right Side - Content */}
    <div className="space-y-8">
    
      <div>
     
        <h3 className="text-2xl font-bold text-gray-800">Vegetables</h3>
        <p className="text-gray-700 mt-2 leading-relaxed">
        The cultivation and care of vegetables prioritize freshness and quality, ensuring they are nutrient-rich and harvested at the peak of ripeness to meet consumer demands.
</p>
      </div>

      
      <div>
        <h3 className="text-2xl font-bold text-gray-800">Fruits</h3>
        <p className="text-gray-700 mt-2 leading-relaxed">
        Fruits are grown with attention to their natural sweetness and vibrant colors, offering a variety of options that are not only delicious but also packed with essential vitamins and antioxidants.        </p>
      </div>

     
      <div>
        <h3 className="text-2xl font-bold text-gray-800">Fresh Produce </h3>
        <p className="text-gray-700 mt-2 leading-relaxed">
        Our platform connects farmers and buyers to deliver fresh, locally-grown vegetables and fruits, supporting sustainable agriculture and healthy living.        </p>
      </div>
    </div>
  </div>
</div>

{/* Partners of us. */}

{/* Partners of Us */}
<div className="relative w-full h-[900px] bg-gray-100 py-12 px-8 md:px-16 lg:px-24 rounded-lg shadow-lg mt-12" data-aos="fade-down">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* Left Side - Content */}
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-gray-800">Our Partners</h2>
      <p className="text-gray-600">
        Our dedicated partners share a unified vision of empowering farmers, promoting sustainable agriculture, and fostering innovation in the industry. They have been instrumental in transforming challenges into opportunities, ensuring progress at every step.
      </p>

      {/* Partner Details */}
      <div className="space-y-6">
        {/* Partner 1 */}
        <div>
          <h3 className="text-2xl font-bold text-green-700">Global Agriculture Leaders</h3>
          <p className="text-gray-700 mt-2">
            Collaborating with global innovators to provide cutting-edge technologies for modern farming.
          </p>
        </div>

        {/* Partner 2 */}
        <div>
          <h3 className="text-2xl font-bold text-green-700">Sustainable Farming Advocates</h3>
          <p className="text-gray-700 mt-2">
            Supporting eco-friendly farming and biodiversity preservation for a sustainable future.
          </p>
        </div>

        {/* Partner 3 */}
        <div>
          <h3 className="text-2xl font-bold text-green-700">Local Community Partners</h3>
          <p className="text-gray-700 mt-2">
            Strengthening local farmer communities by providing resources and infrastructure.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div>
      <img 
        src={aboutii} 
        alt="Our Partners" 
        className="w-full h-[500px] object-cover rounded-3xl shadow-md"  data-aos="fade-down" duration="300"
      />
    </div>
  </div>


<div className="w-full h-32 relative top-12  right-5 py-8"  data-aos="fade-left">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-around space-x-6">
    {/* Logo 1 */}
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={hayles}
        alt="Logo 1"
        className="w-40 h-40 object-contain"
      />
    </div>
    {/* Logo 2 */}
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={keels}
        alt="Logo 2"
        className="w-40 h-40 object-contain"
      />
    </div>
    {/* Logo 3 */}
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={cargils}
        alt="Logo 3"
        className="w-40 h-40 object-contain"
      />
    </div>
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={elephanthouse}
        alt="Logo 3"
       className="w-40 h-40 object-contain"
      />
    </div>
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={cbl}
        alt="Logo 3"
        className="w-36 h-36 object-contain"
      />
    </div>

    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={araliya}
        alt="Logo 3"
        className="w-40 h-40 object-contain"
      />
    </div>
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={nestlay}
        alt="Logo 3"
        className="w-40 h-40 object-contain"
      />
    </div>
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={nbc}
        alt="Logo 3"
        className="w-40 h-40 object-contain"
      />
    </div>
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={malibon}
        alt="Logo 3"
        className="w-40 h-40 object-contain"
      />
    </div>
    
  </div>
</div>


</div>

<Footer/>

</div>

  

  )
}

export default About