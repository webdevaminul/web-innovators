const Title = ({ title, subTitle }) => {
  return (
    <div className="py-4 md:py-6">
      <h2 className="text-center font-bold text-3xl font-bai">{title}</h2>
      <p className="text-center text-xl font-bai mt-2 max-w-lg mx-auto">{subTitle}</p>
    </div>
  );
};
export default Title;
