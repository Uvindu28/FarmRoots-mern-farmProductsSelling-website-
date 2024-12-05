import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
        <Facebook size={20} />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
        <Instagram size={20} />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
        <Linkedin size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
