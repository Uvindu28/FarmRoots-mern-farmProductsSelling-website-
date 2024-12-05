import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { BiLike, BiDislike } from "react-icons/bi";
import image10 from '../assets/images/founder.png'; // Default profile image
import image11 from '../assets/images/two.jpg'; // Banner image
import { updateUser } from '../redux/userSlice'; // Action to update the user profile in Redux
import "../index.css";

const FarmerProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    about: currentUser?.about || "",
    farmtype: currentUser?.farmtype || "",
    location: currentUser?.location || "",
    experince: currentUser?.experince || "",
    phone: currentUser?.phone || "",
    Gmail: currentUser?.Gmail || "",
  });

  const [likesCount, setLikesCount] = useState(currentUser?.likes?.length || 0);
  const [dislikesCount, setDislikesCount] = useState(currentUser?.dislikes?.length || 0);
  const [likeAnimation, setLikeAnimation] = useState(false);

  useEffect(() => {
    setLikesCount(currentUser?.likes?.length || 0);
    setDislikesCount(currentUser?.dislikes?.length || 0);
  }, [currentUser]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', productData.title);
    formData.append('desc', productData.desc);
    formData.append('price', productData.price);
    formData.append('location', productData.location);
    formData.append('quantity', productData.quantity);
    formData.append('categoryId', productData.categoryId);
    if (productData.imgUrl) formData.append('imgUrl', productData.imgUrl);
  
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
      setProductData({
        title: '',
        desc: '',
        price: '',
        location: '',
        quantity: '',
        categoryId: '',
        imgUrl: null
      });
      toggleModal();
    } catch (error) {
      toast.error("Failed to add product.");
      console.error(error);
    }
  };

  const handleLike = async () => {
    try {
      setLikeAnimation(true);
      const res = await axios.put(
        `http://localhost:8800/api/users/like/${currentUser._id}`,
        {}, { withCredentials: true }
      );
      setLikesCount(res.data.likesCount);
      setDislikesCount(res.data.dislikesCount);
    } catch (err) {
      console.error("Error liking profile:", err);
    }
  };

  const handleDislike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/users/dislike/${currentUser._id}`,
        {}, { withCredentials: true }
      );
      setLikesCount(res.data.likesCount);
      setDislikesCount(res.data.dislikesCount);
    } catch (err) {
      console.error("Error disliking profile:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 font-poppins bg-white shadow-2xl rounded-xl overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full h-48">
        <img
          src={image11}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -top-16 flex justify-center">
        {currentUser?.image ? (
          <img
            src={currentUser.image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        ) : (
          <img
            src={image10}
            alt="Default"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        )}
      </div>

      {/* Name and Like/Dislike Section */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-gray-800">{currentUser?.name || "User Name"}</h2>
        <p className="text-gray-500 mt-1 text-sm">Organic Farmer</p>

        <div className="mt-3 flex items-center justify-center space-x-4">
          <button
            className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full text-green-600 hover:bg-green-200 text-sm"
            onClick={handleLike}
          >
            <BiLike className={`text-lg ${likeAnimation ? 'animate-like' : ''}`} />
            <span>{likesCount}</span>
          </button>
          <button
            className="flex items-center space-x-2 px-3 py-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200 text-sm"
            onClick={handleDislike}
          >
            <BiDislike className="text-lg" />
            <span>{dislikesCount}</span>
          </button>
        </div>

        <button
          onClick={handleModalOpen}
          className="mt-4 px-4 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow hover:opacity-90 text-sm"
        >
          Manage Profile
        </button>
      </div>

      {/* About Me Section */}
      <div className="mt-8 px-6">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-green-500 inline-block pb-1">
          About Me
        </h3>
        <div className="mt-4 flex flex-wrap gap-6">
          <div className="flex-1 text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg shadow-md">
            {currentUser?.about || "Add a bio to tell others more about you..."}
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Farm Type", value: currentUser?.farmtype || "N/A" },
                { label: "Location", value: currentUser?.location || "N/A" },
                { label: "Experience", value: currentUser?.experince || "N/A" },
                { label: "Phone", value: currentUser?.phone || "N/A" },
                { label: "Gmail", value: currentUser?.Gmail || "N/A" },
              ].map((info, index) => (
                <div key={index} className="p-4 border-l-4 border-green-500 bg-white shadow-sm rounded-lg">
                  <h4 className="text-sm text-gray-500">{info.label}</h4>
                  <p className="text-gray-800 font-medium text-base">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleFormSubmit}>
              {["about", "farmtype", "location", "experince", "phone"].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700 capitalize">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
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
};

export default FarmerProfile;