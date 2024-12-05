import SocialLinks from './SocialLinks';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import LogoD from './Logo.svg';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-green-100 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
 
              <img 
                src={LogoD} 
                alt="Your Logo" 
                className="h-10 w-auto" 
              />
            </div>

            <SocialLinks />
          </div>

          <FooterSection title="Marketplace">
            <div className="flex flex-col gap-2">
              <FooterLink href="/for-buyers">For Buyers</FooterLink>
              <FooterLink href="/for-sellers">For Sellers</FooterLink>
            </div>
          </FooterSection>


          <FooterSection title="Resources">
            <div className="flex flex-col gap-2">
              <FooterLink href="/article">Farmer Wiki</FooterLink>
              <FooterLink href="#FAQ">FAQ</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="About Us">
            <div className="flex flex-col gap-2">
              <FooterLink href="/about">About Us</FooterLink>
            </div>
          </FooterSection>

          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
