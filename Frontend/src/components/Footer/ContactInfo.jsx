import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-lg text-gray-800">Contact Us</h3>
      <div className="flex flex-col gap-2 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>22/8 Kanampiitya Road, Galle</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>0701234567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>contact@farmRoots.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
