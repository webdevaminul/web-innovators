import PropTypes from "prop-types";
const Title = ({ title, subTitle }) => {
  return (
    <div className="py-4 md:py-6">
      <h2 className="text-center text-2xl md:text-4xl font-black font-bai text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-600 to-red-500">
        {title}
      </h2>
      <p className="text-center md:text-lg max-w-lg mx-auto mt-2">{subTitle}</p>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default Title;
