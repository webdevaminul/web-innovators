
const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-md p-6">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p className="mt-4">Are you sure you want to delete this blog post?</p>
        <div className="mt-4 flex justify-end">
          <button className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
