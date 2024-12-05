import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { items } from '../Data/items';

interface TypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (name: string) => {
    onTypeChange(name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-between min-w-[200px]"
      >
        <span>{selectedType || 'Select Item'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-[300px] max-h-[400px] overflow-y-auto bg-white rounded-md shadow-lg border border-gray-200">
          <div className="p-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.name)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-50 w-full ${
                  selectedType === item.name ? 'bg-green-50 border border-green-200' : ''
                }`}
              >
                <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="ml-2 text-sm">{item.name}</span>
                <span className="ml-auto text-xs text-gray-500">{item.type}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeSelector;