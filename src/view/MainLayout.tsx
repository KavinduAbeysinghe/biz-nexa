import { Route, Routes } from "react-router-dom";
import { Login } from "./login/Login";
import { Dashboard } from "./dashboard/Dashboard";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Appbar } from "../components/appbar/Appbar";
import { MyProfile } from "./profile/MyProfile";
import { Projects } from "./projects/Projects";
import { CreateProject } from "./projects/CreateProject";
import { Attendance } from "./attendance/Attendance";
import { EmployeeManagement } from "./employeeManagement/EmployeeManagement";
import { CreateEmployee } from "./employeeManagement/CreateEmployee";
import { Task } from "./task/Task";

export const MainLayout = () => {
  return (
    <Routes>
      <Route element={<Login />} path={"/"} />
      <Route element={<Layout />} path="/control/*" />
    </Routes>
  );
};

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Appbar />
      <div className="ml-3 md:ml-[17.5rem] mt-20 mr-3 overflow-auto grow pb-10">
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<MyProfile />} path="/profile" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<CreateProject />} path="/projects/create-project" />
          <Route element={<CreateProject />} path="/projects/view-project/*" />
          <Route element={<Attendance />} path="/attendance" />
          <Route element={<EmployeeManagement />} path="/employee-management" />
          <Route
            element={<CreateEmployee />}
            path="/employee-management/create-employee"
          />
          <Route element={<Task />} path="/tasks" />
        </Routes>
      </div>
    </div>
  );
};
