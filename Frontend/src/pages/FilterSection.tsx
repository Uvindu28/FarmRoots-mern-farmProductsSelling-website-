import React from 'react';
import { Filter } from 'lucide-react';
import TypeSelector from './TypeSelector.tsx';

interface FilterSectionProps {
  selectedType: string;
  selectedLocation: string;
  selectedFormType: string;
  onTypeChange: (type: string) => void;
  onLocationChange: (location: string) => void;
  onFormTypeChange: (formType: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedType,
  selectedLocation,
  selectedFormType,
  onTypeChange,
  onLocationChange,
  onFormTypeChange,
}) => {
  const locations = [
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Batticaloa',
    'Anuradhapura',
    'Trincomalee',
  ];

  return (
    <div className="flex flex-wrap gap-4 items-center mb-8">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-600" />
        <span className="font-medium">Filter</span>
      </div>
      
      <TypeSelector selectedType={selectedType} onTypeChange={onTypeChange} />

      <select
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <select
        value={selectedFormType}
        onChange={(e) => onFormTypeChange(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Form Type</option>
        <option value="Organic">Organic</option>
        <option value="Conventional">Conventional</option>
      </select>
    </div>
  );
}

export default FilterSection;