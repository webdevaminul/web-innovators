export default function PrimaryButton({ icon: Icon, text }) {
  return (
    <a
      href="#_"
      className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center text-textReverse">
        <span className="relative w-5 h-5 mr-2 text-textReverse">
          <Icon className="w-full h-full text-textReverse" />
        </span>
        {text}
      </span>
    </a>
  );
}
