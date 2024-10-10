import PropTypes from 'prop-types';
const Title = ({ title, subTitle }) => {
  return (
    <div className="py-4 md:py-6">
      <h2 className="text-center font-bold text-3xl font-bai">{title}</h2>
      <p className="text-center text-xl font-bai mt-2 max-w-lg mx-auto">{subTitle}</p>
    </div>
  );
};
Title.propTypes = {
  title : PropTypes.string,
  subTitle : PropTypes.string,
}
export default Title;
