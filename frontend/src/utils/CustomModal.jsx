import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CustomModal = ({ modalOpen, setModalOpen, message,text }) => {
  const { user } = useSelector((state) => state.authUsers);
  const role = user?.userInfo?.userRole;
  const navigate = useNavigate();
  const handleConfirmed = () => {
    setModalOpen(false);
    navigate("/sign-in");
  };
  return (
    <>
      <div
        className={`${
          modalOpen
            ? " scale-[1] opacity-100 zoom-in transition-all"
            : " scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 `}
      >
        <div className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4 ">
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full pl-3 lg:pl-8">
            <h2 className="text-[1.7rem] font-[500] text-[#202020]">
              {message}
            </h2>
            <p className="text-[1rem] text-[#525252]">
              {role === "Admin" ? "You are not eligible to become an intructor" : text }
            </p>
          </div>
          {role !== "Admin" && (
            <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6">
              <button
                className="px-4 py-2 border border-[#a8a8a8] rounded-lg text-[#585858]"
                onClick={() => setModalOpen(false)}
              >
                Not interested
              </button>
              <button
                className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#ffffff]"
                onClick={handleConfirmed}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

CustomModal.propTypes = {
  modalOpen: PropTypes.node,
  setModalOpen: PropTypes.func,
  message: PropTypes.string,
  text: PropTypes.string,
};

export default CustomModal;
