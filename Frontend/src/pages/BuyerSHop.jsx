import { useEffect, useState } from "react";
import { FaFilter, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const BuyerShop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      fetchProducts(); // Fetch all products if "All" is selected
    } else {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory, locationFilter]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/categories/getall");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/products/getall");
      const data = await response.json();
      setProducts(data.success ? data.data : data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const fetchProductsByCategory = async (categoryName) => {
    try {
      const response = await fetch(
        `http://localhost:8800/api/categories/category-name/${categoryName}`
      );
      const data = await response.json();
      setProducts(data.success ? data.data : []); // Update products state
    } catch (err) {
      console.error("Failed to fetch products by category:", err);
    }
  };

  const filterByLocation = (location) => {
    setLocationFilter(location);
  };

  const sortByPrice = (order) => {
    const sortedProducts = [...products].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const isNewProduct = (createdAt) => {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    return new Date(createdAt) > oneDayAgo;
  };

  const filteredProducts = products.filter((product) => {
    const matchesLocation = locationFilter
      ? product.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;

    return matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-100">
<Header/>

      <main className="container mx-auto py-8 p-10">
        {/* Banner Slider */}
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="h-96"
          >
            <SwiperSlide>
              <img
                src={banner1}
                alt="Banner 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-4 flex items-center space-x-4 mb-5">
          <button
            className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow"
            onClick={() => sortByPrice("asc")}
          >
            <FaFilter />
            <span>Sort Price: Low to High</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow"
            onClick={() => sortByPrice("desc")}
          >
            <FaFilter />
            <span>Sort Price: High to Low</span>
          </button>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Filter by location"
            className="px-4 py-2 rounded-lg border border-gray-300"
            onChange={(e) => filterByLocation(e.target.value)}
          />
        </div>

        <h1 className="font-bold text-2xl text-center mb-8">FEATURED PRODUCTS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative transition-all duration-300 ease-in-out hover:scale-105"
            >
              {isNewProduct(product.createdAt) && (
                <span
                  className="absolute top-[-65px] right-[150px] w-[150%] h-[20px] bg-gradient-to-br p-3 from-[#ff0000] via-[#ff5733] to-[#ff6f61] transform rotate-[-45deg] translate-y-[-100px] flex items-center justify-center text-white tracking-widest shadow-[0_5px_10px_rgba(0,0,0,0.23)]"
                  style={{
                    transformOrigin: "top right",
                  }}
                >
                  New
                </span>
              )}

              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.categoryId?.name}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-semibold text-red-500">
                    Qty: <span className="text-red-600">{product.quantity}</span>
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    1Kg Rs. {product.price}
                  </p>
                </div>
                <div className="flex items-center mt-3 text-gray-600">
                  <FaMapMarkerAlt size={16} />
                  <span className="ml-2">{product.location}</span>
                  <button
    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-28"
    onClick={() => navigate(`/product/${product._id}`)}
  >More
  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default BuyerShop;
