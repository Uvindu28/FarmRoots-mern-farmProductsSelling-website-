import { useState } from "react";
import Back from "../assets/images/basic.jpg";
import Logo from "../assets/images/Logo.svg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromNavbar = location.state?.fromNavbar || false;

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/signin", { email, password }, { withCredentials: true });
        const user = res.data;
        dispatch(loginSuccess(user));

        toast.success("Login successful!");

        // Navigate based on the login source and user role
        if (user.role === "Admin") {
            navigate("/admin"); // Go to home page
        } 
        else if (fromNavbar) {
          navigate("/");
      }
        else if (user.role === "Farmer") {
            navigate("/shop"); // Go to Farmer shop
        } else if (user.role === "Buyer") {
            navigate("/buyer"); // Go to Buyer shop
        } 
         else {
            console.error("Unknown role: ", user.role);
        }
    } catch (err) {
        dispatch(loginFailure());
        toast.error("Login failed: " + (err.response?.data?.message || "Unknown error"));
    }
};


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-[100vw] h-[30vw] font-poppins max-w-md">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="FarmRoot Logo" className="h-12 mb-4" />
        </div>
        <form className="space-y-8" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
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
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
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
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-500"
          >
            Login
          </button>
          <p className="text-center justify-center">
            Don&apos;t have an Account?{" "}
            <Link
              to={"/signup"}
              className="text-green-400 hover:text-green-700 hover:underline"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
