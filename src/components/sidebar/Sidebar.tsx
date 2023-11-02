import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TaskIcon from "@mui/icons-material/Task";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";

export const Sidebar = () => {
  const sideBarItems: any[] = [
    {
      name: "Dashboard",
      icon: <DashboardIcon fontSize="small" />,
      path: "/control/dashboard",
    },
    {
      name: "Attendance",
      icon: <CoPresentIcon fontSize="small" />,
      path: "/control/attendance",
    },
    {
      name: "Employees",
      icon: <BadgeIcon fontSize="small" />,
      path: "/control/employee-management",
    },
    {
      name: "Projects",
      icon: <FolderCopyIcon fontSize="small" />,
      path: "/control/projects",
    },
    {
      name: "Tasks",
      icon: <TaskIcon fontSize="small" />,
      path: "/control/tasks",
    },
    {
      name: "Calendar",
      icon: <CalendarMonthIcon fontSize="small" />,
      path: "/control/calendar",
    },
    {
      name: "Profile",
      icon: <AccountCircleIcon fontSize="small" />,
      path: "/control/profile",
    },
  ];

  const recentProjects: any[] = [
    {
      name: "Rencent Project One",
      path: "",
    },
    {
      name: "Rencent Project Two",
      path: "",
    },
    {
      name: "Rencent Project Three",
      path: "",
    },
  ];

  return (
    <div
      id="docs-sidebar"
      className="m-3 rounded-xl hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-blue-950 pt-4 pb-10 overflow-y-auto scrollbar-y md:block md:translate-x-0 md:right-auto md:bottom-0"
    >
      <div className="px-6 text-center">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="javascript:;"
          aria-label="Brand"
        >
          Biz Nexa
        </a>
        <hr className="mt-4 h-[1px] border-0 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      <nav
        className="hs-accordion-group py-6 pl-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <p className="text-xs mb-3 text-white">Main</p>
        <ul className="space-y-1.5">
          {sideBarItems?.map((item: any, index) => (
            <li key={index}>
              <NavLink
                to={item?.path}
                className={({ isActive }) =>
                  isActive
                    ? "transition-all duration-300 ease-in-out flex items-center gap-x-3 py-2 px-2.5 text-sm text-slate-700 rounded-s-xl dark:text-slate-400 bg-body"
                    : "transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-white/[.05] dark:hover:text-slate-300 flex items-center gap-x-3 py-2 px-2.5 text-sm text-slate-700 rounded-s-xl dark:text-slate-400"
                }
              >
                {item?.icon}
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*<p className="text-xs my-3 text-white">Recent Projects</p>*/}
        {/*<ul className="space-y-1.5">*/}
        {/*  {recentProjects?.map((item: any, index) => (*/}
        {/*    <li*/}
        {/*      key={index}*/}
        {/*      className="list-disc list-inside text-gray-900 dark:text-gray-200"*/}
        {/*    >*/}
        {/*      <a*/}
        {/*        className="text-sm text-slate-400 dark:hover:text-slate-300"*/}
        {/*        href="#"*/}
        {/*      >*/}
        {/*        {item?.name}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </nav>
    </div>
  );
};
