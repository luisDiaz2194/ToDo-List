
function InputForm({ label, value, onChange, placeholder = '', name = '', type = '', idInput = '', onValidation, className}) {

  const validationForm = (event) => {
    //Como en este caso la única validación es que los campos no estén vacíos, no hago una condición por cada target 
        const isValid = event.target.value.trim() !== '';
        onValidation({
          validationInputTarget: event.target.name,
          validationInputTargetValue: event.target.value,
          validationInputTargetResult: isValid
        })
        console.log(className)
  }


  return (
    <div className="flex flex-col mb-4 text-left">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        id = {idInput}
        value={value}
        onChange={onChange}
        onBlur={validationForm}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded ${className || ''}`}
      />
    </div>
  );
}

export default InputForm;
