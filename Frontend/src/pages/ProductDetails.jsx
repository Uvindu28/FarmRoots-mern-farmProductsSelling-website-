import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar} from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt, FaTags, FaUser } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
  
    useEffect(() => {
      fetchProductDetails();
    }, []);
  
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8800/api/products/find/${id}`);
        const data = await response.json();
        setProduct(data.success ? data.data : data);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      }
    };
  
    useEffect(() => {
      if (product?.categoryId) {
        const categoryId = product.categoryId._id || product.categoryId; // Adjust as needed
        fetchRelatedProducts(categoryId);
      }
    }, [product]);
  
    const fetchRelatedProducts = async (categoryId) => {
      try {
        const response = await fetch(`http://localhost:8800/api/products/related/${categoryId}`);
        const data = await response.json();
        setRelatedProducts(data.success ? data.data : []);
      } catch (err) {
        console.error("Failed to fetch related products:", err);
      }
    };
  
    if (!product) return <div>Loading...</div>;
  
    return (
      <div className="container mx-auto py-8 mb-5">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Details Section */}
            <div className="p-8 md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6 text-lg">{product.desc}</p>
  
              {/* Details with Icons */}
              <div className="space-y-4">
                <p className="flex items-center text-gray-500 text-sm">
                  <FaMapMarkerAlt className="text-green-600 mr-2" />
                  <span className="font-semibold">Location:</span> {product.location}
                </p>
                <p className="flex items-center text-gray-500 text-sm">
                  <FaTags className="text-blue-600 mr-2" />
                  <span className="font-semibold">Category:</span> 
                  {typeof product.categoryId === "object" ? product.categoryId.name : "Uncategorized"}
                </p>
                <p className="flex items-center text-gray-500 text-sm">
                  <span className="font-semibold mr-2 text-green-600">Price:</span>
                  <span className="text-green-600 font-bold text-lg">
                    Rs. {product.price} per Kg
                  </span>
                </p>
                <p className="flex items-center text-gray-500 text-sm">
                  <span className="font-semibold">Quantity Available:</span> {product.quantity}
                </p>
              </div>
  
              {/* Farmer Details Section */}
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Farmer Information</h2>
                <div className="flex items-center text-gray-600">
                  <FaUser className="text-blue-500 mr-2" />
                  <span className="font-semibold">Farmer Name: kamal hettiarachchi</span> 
                  {product.userId ? product.userId.name : "Unknown"}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhoneAlt className="text-blue-500 mr-2" />
                  <span className="font-semibold">Contact Number: 0764610843</span> 
                  
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-green-500 mr-2" />
                  <span className="font-semibold">Farmer Location: No 31, sadujana road,Nuwara eliya</span> 
                  {product.userId ? product.userId.location : "Not Available"}
                </div>
              </div>
  
              {/* Buttons */}
              <div className="mt-8 flex flex-wrap space-x-4">
                <button className="flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  <FaPhoneAlt className="mr-2" /> Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose This Product?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>High-quality materials and craftsmanship.</li>
          <li>Affordable price for the quality offered.</li>
          <li>Environmentally friendly and sustainably sourced.</li>
          <li>Widely recommended by industry professionals.</li>
        </ul>
      </div>
  
        {/* Related Products */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={relatedProduct.imgUrl}
                  alt={relatedProduct.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{relatedProduct.quantity}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Rs. {relatedProduct.price} per Kg
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default ProductDetails;
  