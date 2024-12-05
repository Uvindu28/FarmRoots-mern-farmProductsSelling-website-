import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { IoAddCircle } from "react-icons/io5";
import PopularItems from "./PopularItems";
import image10 from '../assets/images/founder.png'; // Default profile image
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SellerShop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector(state => state.user); // Access currentUser from Redux store
  const [productData, setProductData] = useState({
    title: '',
    desc: '',
    price: '',
    location: '',
    quantity: '',
    categoryId: '',
    imgUrl: null
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      imgUrl: e.target.files[0]
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("desc", productData.desc);
    formData.append("price", productData.price);
    formData.append("location", productData.location);
    formData.append("quantity", productData.quantity);
    formData.append("categoryId", productData.categoryId);
    if (productData.imgUrl) formData.append("imgUrl", productData.imgUrl);

    try {
      const response = await axios.post(
        "http://localhost:8800/api/products", 
        formData, 
        { 
          withCredentials: true, 
          headers: { 
            "Content-Type": "multipart/form-data", 
            Authorization: `Bearer ${currentUser.token}`
          }
        }
      );

      toast.success("Product added successfully!");

      // Reset form data after successful submission
      setProductData({
        title: '',
        desc: '',
        price: '',
        location: '',
        quantity: '',
        categoryId: '',
        imgUrl: null
      });

      toggleModal(); // Close the modal after product is added
    } catch (error) {
      toast.error("Failed to add product.");
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-[2001px]">
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <h1 className="text-3xl font-bold font-poppins">FarmRoots</h1>
          </div>
          <div className="flex-grow text-center md:text-left">
            <p className="text-lg font-poppins ml-11">Welcome back, Seller! Add new products and grow your business.</p>
          </div>
          <div className="text-center md:text-right flex items-center space-x-4">
            <button
              onClick={toggleModal}
              className="flex items-center bg-white hover:bg-gray-100 text-green-600 px-6 p-2 rounded-lg space-x-2 shadow-md transition transform hover:scale-105"
            >
              <IoAddCircle size={24} />
              <span>Add Product</span>
            </button>

            <Link to="/sellerprofile">
              <div className="w-[45px] h-[45px] bg-red-200 rounded-full overflow-hidden">
                {currentUser?.image ? (
                  <img
                    src={currentUser.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={image10}
                    alt="Default"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <PopularItems />

      {/* Modal for Adding Product */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-[500px]">
            <h2 className="font-poppins font-bold text-xl mb-4">Add Product</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Product Name */}
              <input
                type="text"
                name="title"
                value={productData.title}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="w-full border rounded p-2 font-poppins"
                required
              />

              {/* Product Description */}
              <textarea
                name="desc"
                value={productData.desc}
                onChange={handleInputChange}
                placeholder="Product Description"
                className="w-full border rounded p-2 font-poppins"
                rows="4"
                required
              ></textarea>

              {/* Product Price */}
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="w-full border rounded p-2 font-poppins"
                required
              />

              {/* Product Location */}
              <input
                type="text"
                name="location"
                value={productData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full border rounded p-2 font-poppins"
                required
              />

              {/* Product Quantity */}
              <input
                type="number"
                name="quantity"
                value={productData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="w-full border rounded p-2 font-poppins"
                required
              />

              {/* Product Category */}
              <select
                name="categoryId"
                value={productData.categoryId}
                onChange={handleInputChange}
                className="w-full border rounded p-2 font-poppins"
                required
              >
                <option value="" disabled>Select Category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                {/* Add more categories as needed */}
              </select>

              {/* Image Upload */}
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full border p-2"
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default SellerShop;
