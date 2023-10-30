import { NormalTable } from "../../components/tables/NormalTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "../../components/progress/ProgressBar";

export const Projects = () => {
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

  const projectTableData = [
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"progressBlue"} completed={5} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"progressBlue"} completed={5} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"progressBlue"} completed={5} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"progressBlue"} completed={5} total={5} />,
    },
    {
      projectCode: "P1001",
      projectName: "Research and Development 2023",
      completed: "67.5%",
      owner: "Jane Watson",
      status: Badge("Active"),
      tasks: <ProgressBar color={"progressBlue"} completed={5} total={5} />,
    },
  ];

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Projects</p>
      <div className={"grid grid-cols-12 gap-5"}>
        <div className={"card col-span-4 rounded p-3"}></div>
        <div className={"card col-span-4 rounded p-3"}></div>
        <div className={"card col-span-4 rounded p-3"}></div>
      </div>
      <div className={"card rounded-lg mt-5"}>
        <div className={"bg-white grid grid-cols-12 p-3 gap-5 rounded-lg"}>
          <div className={"col-span-3 border-r-[1px]"}></div>
          <div className={"col-span-9"}>
            <input
              placeholder={"Search here..."}
              className={"text-sm focus:outline-0"}
            />
          </div>
        </div>
        <div>
          <NormalTable
            columnHeaders={projectColumnHeaders}
            tableData={projectTableData}
          />
        </div>
      </div>
    </div>
  );
};
