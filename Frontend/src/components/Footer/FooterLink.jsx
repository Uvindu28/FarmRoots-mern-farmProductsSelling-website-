import PropTypes from 'prop-types'; // Import PropTypes

const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  );
};

// Define PropTypes validation
FooterLink.propTypes = {
  href: PropTypes.string.isRequired, // 'href' must be a string and is required
  children: PropTypes.node.isRequired, // 'children' can be any renderable node and is required
};

export default FooterLink;
