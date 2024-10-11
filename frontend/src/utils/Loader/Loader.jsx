import "./loader.css";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-24">
      <div className="text-2xl animate-bounce-left">{`<`}</div>
      <div className="w-6 h-6 mx-5 bg-black clip-diamond"></div>
      <div className="text-2xl animate-bounce-right">{`>`}</div>
    </div>
  );
};

export default Loader;
