interface TextFieldProps {
  label: string;
  type: any;
  icon?: any;
  placeholder?: string;
  id: string;
  helperText: string;
  error: boolean;
  required: boolean;
  register: any;
}

export const TextField = ({
  label,
  type,
  icon,
  placeholder,
  id,
  helperText,
  error,
  required,
  register,
}: TextFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-semibold mb-2 ${
          error && "text-red-700"
        }`}
      >
        {label} <span className="text-red-700">{required ? "*" : ""}</span>
      </label>
      <div className="relative">
        <input
          {...register}
          type={type}
          id={id}
          className={`py-2 px-3 block w-full border-[1px] ${
            error && "border-red-700"
          } rounded-md text-sm focus:outline-0 ${
            icon ? "pr-10" : ""
          } focus:border-transparent focus:ring-2 ring-0 focus:ring-blue-600 transition-all`}
          placeholder={placeholder}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {icon}
          </div>
        )}
      </div>
      <p className="text-red-700 text-xs mt-2">{helperText}</p>
    </div>
  );
};
