import { useState } from "react";
import Back from "../assets/images/basic.jpg";
import Logo from "../assets/images/Logo.svg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios"; // Ensure axios is configured correctly
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Farmer");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const navigate = useNavigate();

  // Toggle visibility for password fields
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmShowPassword(!confirmShowPassword);

  // Handle profile picture selection
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePicPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    if (profilePic) {
      formData.append("image", profilePic);
    }

    try {
      const response = await axios.post("/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Sign-up successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.log("Sign-up successful:", response.data);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign-up failed!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Sign-up failed:", error.response?.data || error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-[600px] h-[600px] font-poppins">
        <div className="flex flex-col items-center mb-4">
          <img src={Logo} alt="FarmRoot Logo" className="h-12 mb-2" />
          <label htmlFor="profilePic" className="relative cursor-pointer">
            <img
              src={profilePicPreview || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-lg"
            />
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </label>
          <span className="text-sm text-gray-600 mt-1">
            Click to upload profile picture
          </span>
        </div>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-11 cursor-pointer text-gray-600"
              >
                {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type={confirmShowPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-11 cursor-pointer text-gray-600"
              >
                {confirmShowPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Select Role</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              name="role"
            >
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-500"
          >
            Sign Up
          </button>
          <p className="text-center justify-center">
            Already have an Account?{" "}
            <Link
              to={"/login"}
              className="text-green-400 hover:text-green-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;