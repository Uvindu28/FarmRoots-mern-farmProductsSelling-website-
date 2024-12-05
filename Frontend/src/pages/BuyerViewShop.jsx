import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { items } from '../data/items';

function BuyerViewShop() {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFormType, setSelectedFormType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesItem = !selectedItem || product.name === selectedItem;
    const matchesLocation = !selectedLocation || product.location === selectedLocation;
    const matchesFormType = !selectedFormType || product.formType === selectedFormType;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesItem && matchesLocation && matchesFormType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Filters */}
      <FilterSection
        selectedType={selectedItem}
        selectedLocation={selectedLocation}
        selectedFormType={selectedFormType}
        onTypeChange={setSelectedItem}
        onLocationChange={setSelectedLocation}
        onFormTypeChange={setSelectedFormType}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            type={product.type}
            location={product.location}
            formType={product.formType}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default BuyerViewShop;