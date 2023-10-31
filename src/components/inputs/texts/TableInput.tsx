interface TableInputProps {
  type: any;
  value: any;
}

export const TableInput = ({ type, value }: TableInputProps) => {
  return (
    <input
      className={
        "w-full py-2 px-3 border-[1px] rounded bg-transparent focus:outline-0 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
      }
      type={type}
      defaultValue={value}
    />
  );
};
