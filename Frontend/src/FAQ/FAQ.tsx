import React, { useState } from 'react';
import { Sprout, ShoppingBasket } from 'lucide-react';
import FaqItem from './FaqItem';
import { faqData } from './faqData';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b font-poppins from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our farm-to-table marketplace
        </p>

        {faqData.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              {category.title === "For Farmers" ? (
                <Sprout className="w-6 h-6 text-green-600" />
              ) : (
                <ShoppingBasket className="w-6 h-6 text-green-600" />
              )}
              <h2 className="text-2xl font-semibold text-gray-800">
                {category.title}
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {category.items.map((item, itemIndex) => (
                <FaqItem
                  key={itemIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                  onToggle={() => toggleItem(categoryIndex, itemIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}