import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-green-100 last:border-none">
    <button
      className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-green-50 transition-colors"
      onClick={onToggle}
    >
      <span className="text-lg font-medium text-gray-800">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-green-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-green-600" />
      )}
    </button>
    {isOpen && (
      <div className="px-4 pb-6 text-gray-600 animate-fadeIn">
        {answer}
      </div>
    )}
  </div>
);

export default FaqItem;