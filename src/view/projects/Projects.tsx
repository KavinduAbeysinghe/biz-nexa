import { NormalTable } from "../../components/tables/NormalTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "../../components/progress/ProgressBar";
import { useLocation, useNavigate } from "react-router-dom";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../../components/buttons/Button";

export const Projects = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const Badge = (status: string) => {
    return (
      <span className="my-3 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
        {status}
      </span>
    );
  };

  const ColumnHeader = (title: string, icon: any) => {
    return (
      <div className={"flex justify-between gap-2 items-center"}>
        <p>{title}</p>
        <FontAwesomeIcon
          icon={icon}
          className={"cursor-pointer hover:text-blue-700"}
        />
      </div>
    );
  };

  const projectColumnHeaders = [
    "Project Code",
    "Project Name",
    ColumnHeader("Completed", faSort),
    "Owner",
    ColumnHeader("Status", faSort),
    ColumnHeader("Tasks", faSort),
  ];

  const projectData = [
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      startDate: "",
      status: true,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: true,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: true,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: true,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: true,
    },
  ];

  const projectTableData = [
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"bg-progressBlue"} completed={3} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"bg-progressBlue"} completed={2} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"bg-progressBlue"} completed={1} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"bg-progressBlue"} completed={5} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"bg-progressBlue"} completed={2} total={5} />,
    },
  ];

  const handleCreateProject = () =>
    navigate("/control/projects/create-project");

  const handleViewProject = (id: any) => {
    const obj = { page: "view", id: id };
    searchParams.set("project", JSON.stringify(obj));
    navigate(`/control/projects/view-project?${searchParams}`);
  };

  const actionButtons = [
    {
      tooltip: "View",
      icon: faEye,
      handleClick: handleViewProject,
    },
  ];

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Projects</p>
      <div className={"flex justify-end items-center"}>
        <Button
          text={"+ Create Project"}
          btnClass={"primary"}
          type={"button"}
          onClick={handleCreateProject}
        />
      </div>
      <div className={"grid grid-cols-12 gap-5 mt-5"}>
        <div
          className={
            "card col-span-6 md:col-span-6 lg:col-span-3 rounded-2xl p-3"
          }
        >
          <p className={"font-bold text-lg text-gray-600"}>Total</p>
          <p className={"font-extrabold text-5xl text-primary text-center"}>
            14
          </p>
        </div>
        <div
          className={
            "card col-span-6 md:col-span-6 lg:col-span-3 rounded-2xl p-3"
          }
        >
          <p className={"font-bold text-lg text-gray-600"}>Completed</p>
          <p className={"font-extrabold text-5xl text-primary text-center"}>
            5
          </p>
        </div>
        <div
          className={
            "card col-span-6 md:col-span-6 lg:col-span-3 rounded-2xl p-3"
          }
        >
          <p className={"font-bold text-lg text-gray-600"}>Active</p>
          <p className={"font-extrabold text-5xl text-primary text-center"}>
            7
          </p>
        </div>
        <div
          className={
            "card col-span-6 md:col-span-6 lg:col-span-3 rounded-2xl p-3"
          }
        >
          <p className={"font-bold text-lg text-gray-600"}>Inactive</p>
          <p className={"font-extrabold text-5xl text-primary text-center"}>
            2
          </p>
        </div>
      </div>
      <div className={"card rounded-lg mt-5 overflow-hidden"}>
        <div className={"flex bg-white text-sm"}>
          <select className="py-2 px-3 pr-9 focus:outline-0 text-sm border-r-[1px]">
            <option selected>All Projects</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="text"
            className={"grow focus:outline-0 px-5"}
            placeholder={"Search here..."}
          />
          <button
            className={
              "p-3 bg-blue-500 text-white hover:bg-blue-600 transition-all"
            }
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <NormalTable
          columnHeaders={projectColumnHeaders}
          tableData={projectTableData}
          actionButtons={actionButtons}
          id={"projectCode"}
        />
      </div>
    </div>
  );
};
