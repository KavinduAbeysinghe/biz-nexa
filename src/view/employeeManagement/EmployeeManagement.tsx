import { Avatar } from "../../components/avatar/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button } from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

export const EmployeeManagement = () => {
  const employees = [
    {
      name: "Jane Warren",
      img: require("../../assets/images/person.jpg"),
      designation: "UI/UX Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "janewarren@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Mary Johnson",
      img: require("../../assets/images/person1.jpg"),
      designation: "Frontend Engineer",
      department: "Dev",
      hiredDate: "2/3/17",
      email: "maryjohnson@hotmail.com",
      phone: "(299) 345 1019",
      status: "active",
    },
    {
      name: "Emily Brown",
      img: require("../../assets/images/person2.jpg"),
      designation: "Backend Engineer",
      department: "Dev",
      hiredDate: "2/5/18",
      email: "emilybrown@hotmail.com",
      phone: "(299) 555 1019",
      status: "away",
    },
    {
      name: "Thomas Jones",
      img: require("../../assets/images/person3.jpg"),
      designation: "Graphic Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "thomasjones@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Ethan Anderson",
      img: require("../../assets/images/person4.jpg"),
      designation: "Software Engineer",
      department: "Dev",
      hiredDate: "7/7/20",
      email: "ethananderson@hotmail.com",
      phone: "(299) 555 1019",
      status: "offline",
    },
    {
      name: "Sophia Wilson",
      img: require("../../assets/images/person5.jpg"),
      designation: "Software Engineer",
      department: "Dev",
      hiredDate: "7/7/20",
      email: "sophiawilson@hotmail.com",
      phone: "(299) 555 1019",
      status: "offline",
    },
    {
      name: "Daniel Smith",
      img: require("../../assets/images/person6.jpg"),
      designation: "UI/UX Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "danielsmith@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Michael Miller",
      img: require("../../assets/images/person7.jpg"),
      designation: "Frontend Engineer",
      department: "R&D",
      hiredDate: "7/7/20",
      email: "michaelmiller@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Olivia Brown",
      img: require("../../assets/images/person8.jpg"),
      designation: "Project Manager",
      department: "Business",
      hiredDate: "7/7/20",
      email: "oliviabrown@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Robert Davis",
      img: require("../../assets/images/person9.jpg"),
      designation: "Sales Manager",
      department: "Business",
      hiredDate: "7/7/20",
      email: "robertdavis@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
  ];

  const navigate = useNavigate();

  const handleCreateEmployee = () => {
    navigate("/control/employee-management/create-employee");
  };

  const actions = [
    {
      name: "View",
      action: () => {},
    },
    {
      name: "Edit",
      action: () => {},
    },
    {
      name: "Delete",
      action: () => {},
    },
  ];

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Employee Management</p>
      <div className="flex justify-between flex-wrap gap-3 mb-5">
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
            placeholder="Search here..."
          />
        </div>
        <div className={"flex gap-3 items-center"}>
          <FilterAltIcon
            className={"text-gray-600 cursor-pointer hover:text-primary"}
          />
          <Button
            text={"+ Add Employee"}
            btnClass={"primary"}
            type={"button"}
            onClick={handleCreateEmployee}
          />
        </div>
      </div>
      <span className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
        Total Employees {employees.length}
      </span>
      <div className="grid grid-cols-12 gap-5">
        {employees?.map((emp: any, index) => (
          <div
            className="card col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-2xl text-sm"
            key={index}
          >
            <div
              className={"float-right top-0 hs-dropdown relative inline-flex"}
            >
              <MoreHorizIcon className={"cursor-pointer hover:text-primary"} />
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mt-2 bg-white shadow-md rounded-lg p-2"
                aria-labelledby="hs-dropdown-slideup-animation"
              >
                {actions?.map((a: any, index) => (
                  <div
                    className={
                      "cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    }
                    key={index}
                  >
                    {a?.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="px-3">
              <Avatar img={emp?.img} status={emp?.status} />
              <p className={"font-semibold mt-2"}>{emp?.name}</p>
              <p className={"font-normal text-gray-500 mt-2"}>
                {emp?.designation}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 mt-3">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 lg:col-span-6">
                  <p className={"text-gray-500 font-semibold text-xs mb-2"}>
                    Department
                  </p>
                  <p className={"font-normal font-semibold"}>
                    {emp?.department}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col items-end">
                  <div>
                    <p className={"text-gray-500 font-semibold text-xs mb-2"}>
                      Hired Date
                    </p>
                    <p className={"font-normal font-semibold"}>
                      {emp?.hiredDate}
                    </p>
                  </div>
                </div>
              </div>
              <p className={"mt-4"}>
                <EmailOutlinedIcon className={"text-gray-500"} />
                <span className={"pl-3"}>{emp?.email}</span>
              </p>
              <p className={"mt-2"}>
                <LocalPhoneOutlinedIcon className={"text-gray-500"} />
                <span className={"pl-3"}>{emp?.phone}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
