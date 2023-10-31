interface SwitchProps {
  label: string;
  id: string;
  defaultChecked?: boolean;
  disabled: boolean;
}

export const Switch = ({
  label,
  id,
  defaultChecked,
  disabled,
}: SwitchProps) => {
  return (
    <div className={"flex flex-col"}>
      <label htmlFor={id} className="text-sm mb-2 font-semibold">
        {label}
      </label>
      <input
        disabled={disabled}
        defaultChecked={defaultChecked}
        type="checkbox"
        id={id}
        className="relative shrink-0 w-[3.25rem] h-7 bg-gray-200 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none

  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
      />
    </div>
  );
};
