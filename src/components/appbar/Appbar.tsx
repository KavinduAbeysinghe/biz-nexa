import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Appbar = () => {
  const [navClass, setNavClass] = useState<string>("");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setNavClass("appbar");
    } else {
      setNavClass("");
    }
  });

  return (
    <div
      className={`${navClass} md:ml-[17.5rem] m-3 rounded-xl fixed top-0 right-0 left-0 flex z-50 bg-blue-200 text-sm py-3`}
    >
      <nav
        className="w-full mx-auto px-4 flex justify-between md:justify-end"
        aria-label="Global"
      >
        <a
          className="text-gray-500 hover:text-gray-700 cursor-pointer md:hidden flex items-center"
          data-hs-overlay="#docs-sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="-5 -7 24 24"
          >
            <path
              fill="currentColor"
              d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
            />
          </svg>
        </a>
        <div className="flex flex-row items-center gap-5">
          <input
            type="text"
            className="hidden min-[511px]:block py-2 px-3 border-[1px] rounded bg-transparent border-gray-400 focus:outline-0 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            placeholder="Search here..."
          />
          {/* <a href="#">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="min-[511px]:hidden text-lg text-gray-500 hover:text-gray-700"
            />
          </a> */}
          <a href="#">
            <FontAwesomeIcon
              icon={faBell}
              className="text-lg text-gray-500 hover:text-gray-700"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-lg text-gray-500 hover:text-gray-700"
            />
          </a>
          <a
            className="font-semibold flex justify-center items-center gap-2 text-gray-600 hover:text-gray-700"
            href="#"
          >
            <img
              src={require("../../assets/images/person.jpg")}
              alt=""
              className="h-9 w-9 rounded-full object-cover"
            />
            Stephanie
          </a>
        </div>
      </nav>
    </div>
  );
};
