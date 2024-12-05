import { Route, Routes } from "react-router-dom";
import "./App.css";
import Featured from "./components/Featured";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Marketplace from "./components/MarketPlace";
import SelectUs from "./components/SelectUs";
import SellersBuyers from "./components/SellersBuyers";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SellerShop from "./SellerPages/SellerShop";
import SellerProfile from "./SellerPages/SellerProfile";
import BuyerSHop from "./pages/BuyerSHop";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import FAQ from "./components/FAQ";
import ArticlePage from "./components/blogPosts/ArticlePage";
import BlogData from "./components/blogPosts/BlogData";
import About from "./components/About";
import ProductCard from "../src/pages/ProductCard"
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      {/* ToastContainer to enable toast notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Routes>
        {/* Main layout route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <SellersBuyers />
              <Marketplace />
              <SelectUs />
              <Featured />
              <FAQ/>
              <Footer/>
            </>
          }
        />
        {/* Login and SignUp routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<SellerShop />} />
        <Route path="/sellerprofile" element={<SellerProfile/>} />
       <Route path="/buyershop" element={<BuyerSHop/>} />
       <Route path="/article" element={<ArticlePage/>} />
       <Route path="/blog-data" element={<BlogData/>} />
       <Route path="/admin" element={<AdminPanel/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/card" element={<ProductCard/>}/>
       <Route path="/product/:id" element={<ProductDetails/>} />
           
      </Routes>
    </>
  );
}

export default App;
