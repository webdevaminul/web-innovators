import FormControls from "./FormControls";

const CommonForm = ({
    handleSubmit,
    buttonText,
    formControls = [],
    formData,
    setFormData,
    isButtonDisabled = false,
  }) => {
    return (
        <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <button disabled={isButtonDisabled} type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </button>
    </form>
    );
};

export default CommonForm;