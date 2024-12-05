import PropTypes from 'prop-types'; // Import PropTypes

const FooterSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      {children}
    </div>
  );
};

// Define PropTypes validation
FooterSection.propTypes = {
  title: PropTypes.string.isRequired, // 'title' must be a string and is required
  children: PropTypes.node.isRequired, // 'children' can be any renderable node and is required
};

export default FooterSection;
