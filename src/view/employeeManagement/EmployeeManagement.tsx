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
      img: "https://i.pravatar.cc/300",
      designation: "UI/UX Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "janewarren@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Mary Johnson",
      img: "https://i.pravatar.cc/300",
      designation: "Frontend Engineer",
      department: "Dev",
      hiredDate: "2/3/17",
      email: "maryjohnson@hotmail.com",
      phone: "(299) 345 1019",
      status: "active",
    },
    {
      name: "Emily Brown",
      img: "https://i.pravatar.cc/300",
      designation: "Backend Engineer",
      department: "Dev",
      hiredDate: "2/5/18",
      email: "emilybrown@hotmail.com",
      phone: "(299) 555 1019",
      status: "away",
    },
    {
      name: "Thomas Jones",
      img: "https://i.pravatar.cc/300",
      designation: "Graphic Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "thomasjones@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Ethan Anderson",
      img: "https://i.pravatar.cc/300",
      designation: "Software Engineer",
      department: "Dev",
      hiredDate: "7/7/20",
      email: "ethananderson@hotmail.com",
      phone: "(299) 555 1019",
      status: "offline",
    },
    {
      name: "Sophia Wilson",
      img: "https://i.pravatar.cc/300",
      designation: "Software Engineer",
      department: "Dev",
      hiredDate: "7/7/20",
      email: "sophiawilson@hotmail.com",
      phone: "(299) 555 1019",
      status: "offline",
    },
    {
      name: "Daniel Smith",
      img: "https://i.pravatar.cc/300",
      designation: "UI/UX Designer",
      department: "Design",
      hiredDate: "7/7/20",
      email: "danielsmith@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Michael Miller",
      img: "https://i.pravatar.cc/300",
      designation: "Frontend Engineer",
      department: "R&D",
      hiredDate: "7/7/20",
      email: "michaelmiller@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Olivia Brown",
      img: "https://i.pravatar.cc/300",
      designation: "Project Manager",
      department: "Business",
      hiredDate: "7/7/20",
      email: "oliviabrown@hotmail.com",
      phone: "(299) 555 1019",
      status: "active",
    },
    {
      name: "Robert Davis",
      img: "https://i.pravatar.cc/300",
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
            <MoreHorizIcon
              className={"float-right top-0 cursor-pointer hover:text-primary"}
            />
            <div className="px-3">
              <Avatar img={emp?.img} status={emp?.status} />
              <p className={"font-semibold mt-2"}>{emp?.name}</p>
              <p className={"font-normal text-gray-500 mt-2"}>
                {emp?.designation}r
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
