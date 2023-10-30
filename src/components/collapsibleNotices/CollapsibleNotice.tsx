interface CollapsibleNoticeProps {
  priority: "high" | "medium" | "low";
  title: string;
  id: string;
}

export const CollapsibleNotice = ({
  priority,
  title,
  id,
}: CollapsibleNoticeProps) => {
  return (
    <div
      className={`${
        priority === "high"
          ? "bg-red-100 border-red-300"
          : priority === "medium"
          ? "bg-yellow-100 border-yellow-300"
          : "bg-gray-100 border-gray-300"
      } rounded p-3 border-[1px] text-sm`}
    >
      <p
        className={`${
          priority === "high"
            ? "text-red-700"
            : priority === "medium"
            ? "text-yellow-700"
            : "text-gray-700"
        } font-semibold`}
      >
        {title}
      </p>
      <p className="mt-2">
        <a
          className="hs-collapse-toggle inline-flex items-center gap-x-2 text-blue-600"
          href="javascript:;"
          id={id}
          data-hs-collapse={`#${id}-heading`}
        >
          <span className="hs-collapse-open:hidden">Read more</span>
          <span className="hs-collapse-open:block hidden">Read less</span>
          <svg
            className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
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
        </a>
      </p>
      <div
        id={`${id}-heading`}
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby={id}
      >
        <p>
          This is a collapse body. It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing
          and hiding via CSS transitions.
        </p>
      </div>
    </div>
  );
};
