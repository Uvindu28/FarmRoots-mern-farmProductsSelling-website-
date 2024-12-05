import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  type: string;
  location: string;
  formType: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, rating, type, formType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-2">
          {formType}
        </span>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{type}</span>
          <span className="font-bold text-green-600">Rs. {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;