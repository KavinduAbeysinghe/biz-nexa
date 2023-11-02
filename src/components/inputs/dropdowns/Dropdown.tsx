interface DropdownProps {
  title: string;
  options: Array<any>;
}

export const Dropdown = ({ title, options }: DropdownProps) => {
  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-slideup-animation"
        type="button"
        className="hs-dropdown-toggle py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
      >
        {title}
        <svg
          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2"
        aria-labelledby="hs-dropdown-slideup-animation"
      >
        {options?.map((opt: any, index) => (
          <a
            key={index}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            onClick={opt?.onClick}
          >
            {opt?.option}
          </a>
        ))}
      </div>
    </div>
  );
};
