
function InputForm({ label, value, onChange, placeholder = '', name = '', type = '', idInput = '' }) {
  return (
    <div className="flex flex-col mb-4 text-left">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        id = {idInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded "
      />
    </div>
  );
}

export default InputForm;
