interface SearchFieldProps {
  placeholder: string;
}

export const SearchField = ({ placeholder }: SearchFieldProps) => {
  return (
    <div className="relative grow">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-full text-sm py-2 px-3 pl-10 border-[1px] rounded bg-transparent border-gray-400 focus:outline-0 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        placeholder={placeholder}
      />
    </div>
  );
};
