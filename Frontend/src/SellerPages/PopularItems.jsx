import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopularItems() {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchUserProducts = async () => {
            if (currentUser) {
                try {
                    const response = await axios.get(`http://localhost:8800/api/products/user/${currentUser._id}`);
                    const productsData = Array.isArray(response.data) ? response.data : [];
                    setProducts(productsData);
                } catch (error) {
                    console.error("Error fetching user products:", error);
                }
            }
        };

        fetchUserProducts();
    }, [currentUser]);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(
                `http://localhost:8800/api/products/delete/${productId}`,
                {
                    withCredentials: true, // Include cookies with the request
                }
            );
            setProducts((prevProducts) => prevProducts.filter((item) => item._id !== productId));
            toast.success("Product deleted successfully!");
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product.");
        }
    };
    
    

    return (
        <div className="w-full min-h-screen relative top-16 bg-white flex flex-col items-center py-8 font-poppins">
            <ToastContainer />
            <h1 className="text-xl font-bold mb-6 relative pl-40 pt-3 pb-3 bg-slate-200 w-full">My Products</h1>
            
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-auto">
                    {products.map((item) => (
                        <div
                            key={item._id}
                            className="bg-gray-200 w-[300px] gap-7 shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
                        >
                            <div className="flex flex-col">
                                <img
                                    src={item.imgUrl}
                                    alt="Seller"
                                    className="w-[493px] h-[206px] rounded-[5px] object-cover mx-auto my-4"
                                />
                            </div>
                            <div className="border-2 bg-[#6CBA7D] rounded-[20px] w-32 h-[30px] text-center">
                                <h2 className="text-[14px] font-semibold ml-2 mt-[3px]">{item.categoryId ? item.categoryId.name : 'Category not found'}</h2>
                            </div>
                            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                            <div className="flex gap-2">
                                <CiLocationOn className="text-lg" />
                                <p className="text-gray-600">{item.location}</p>
                            </div>
                            <p className="text-gray-600 mt-1">{item.quantity}</p>
                            <div className="flex justify-between">
                                <p className="text-gray-600 mt-1">{item.price}</p>
                                <MdDelete
                                    className="text-2xl cursor-pointer"
                                    onClick={() => handleDelete(item._id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    );
}

export default PopularItems;
