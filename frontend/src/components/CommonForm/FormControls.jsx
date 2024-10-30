
const FormControls = ({ formControls = [], formData, setFormData }) => {

    function renderComponentByType(getControlItem) {
        let element = null;
        const currentControlItemValue = formData[getControlItem.name] || "";
    
        switch (getControlItem.componentType) {
          case "input":
            element = (
              <input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}
                value={currentControlItemValue}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [getControlItem.name]: event.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            );
            break;
          case "select":
            element = (
              <div className="relative w-full">
                <select
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: event.target.value,
                    })
                  }
                  value={currentControlItemValue}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled value="">
                    {getControlItem.label}
                  </option>
                  {getControlItem.options && getControlItem.options.length > 0
                    ? getControlItem.options.map((optionItem) => (
                        <option key={optionItem.id} value={optionItem.id}>
                          {optionItem.label}
                        </option>
                      ))
                    : null}
                </select>
              </div>
            );
            break;
          case "textarea":
            element = (
              <textarea
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                value={currentControlItemValue}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [getControlItem.name]: event.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            );
            break;
    
          default:
            element = (
              <input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}
                value={currentControlItemValue}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [getControlItem.name]: event.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            );
            break;
        }
    
        return element;
      }
    

    return (
        <div className="flex flex-col gap-3">
      {formControls.map((controleItem) => (
        <div key={controleItem.name}>
          <label htmlFor={controleItem.name}>{controleItem.label}</label>
          {renderComponentByType(controleItem)}
        </div>
      ))}
    </div>
    );
};

export default FormControls;