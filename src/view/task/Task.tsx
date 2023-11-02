import { TextField } from "../../components/inputs/texts/TextField";
import { Tooltip } from "@mui/material";
import { SearchField } from "../../components/inputs/texts/SearchField";
import { ProgressBar } from "../../components/progress/ProgressBar";
import { Switch } from "../../components/inputs/switch/Switch";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "../../components/modals/Modal";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportingEmployees } from "../employeeManagement/CreateEmployee";
import FormAutoCompleteField from "../../components/inputs/texts/FormAutocompleteField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddTimeLogForm } from "./AddTimeLogForm";

export const Task = () => {
  const navigate = useNavigate();

  const taskColHeads = ["Date", "Start Time", "End Time"];

  const taskColData = [
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
  ];

  const tasks = [
    {
      code: "TSK-1001",
      projectId: 1,
      name: "Training and Work Reviews",
      description:
        "This task involves providing training and conducting work reviews for our team members.",
      status: false,
      isOpen: false,
      startDate: "2023-10-10",
      endDate: "2023-10-31",
      workHours: "09:00",
      priority: "Medium",
      completed: 100,
      createdBy: "John Doe",
      owners: [
        {
          name: "Alice Johnson",
          img: require("../../assets/images/person4.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
      ],
      permitted: true,
      timeLogs: taskColData,
    },
    {
      code: "TSK-1002",
      projectId: 1,
      name: "Learning Advanced JavaScript",
      description:
        "This task involves deepening our understanding of advanced JavaScript concepts and best practices.",
      status: false,
      isOpen: false,
      startDate: "2023-10-15",
      endDate: "2023-11-15",
      workHours: "10:00",
      priority: "Low",
      completed: 90,
      createdBy: "David Smith",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
      ],
      permitted: true,
      timeLogs: [],
    },
    {
      code: "TSK-1003",
      projectId: 1,
      name: "Designing a New User Interface",
      description:
        "This task involves designing a fresh and intuitive user interface for our application.",
      status: false,
      isOpen: false,
      startDate: "2023-10-20",
      endDate: "2023-11-20",
      workHours: "09:30",
      priority: "Medium",
      completed: 85,
      createdBy: "Emma Johnson",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
      ],
      permitted: true,
      timeLogs: taskColData,
    },
    {
      code: "TSK-1004",
      projectId: 2,
      name: "Building a Mobile App Prototype",
      description:
        "This task involves creating a functional prototype of our mobile app for user testing.",
      status: true,
      isOpen: true,
      startDate: "2023-10-12",
      endDate: "2023-11-07",
      workHours: "08:30",
      priority: "High",
      completed: 60,
      createdBy: "Michael Brown",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
        {
          name: "Sophie Wilson",
          img: require("../../assets/images/person6.jpg"),
        },
      ],
      permitted: true,
      timeLogs: taskColData,
    },
    {
      code: "TSK-1005",
      projectId: 2,
      name: "Creating a Marketing Campaign",
      description:
        "This task involves strategizing and executing a marketing campaign to promote our new product.",
      status: true,
      isOpen: true,
      startDate: "2023-10-15",
      endDate: "2023-11-05",
      workHours: "08:00",
      priority: "Medium",
      completed: 30,
      createdBy: "Olivia Davis",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
      ],
      permitted: true,
      timeLogs: taskColData,
    },
    {
      code: "TSK-1006",
      projectId: 1,
      name: "Team Building Workshop",
      description:
        "This task involves organizing a team-building workshop to enhance collaboration and communication among team members.",
      status: true,
      isOpen: true,
      startDate: "2023-10-18",
      endDate: "2023-11-18",
      workHours: "09:00",
      priority: "Low",
      completed: 20,
      createdBy: "Sophie Wilson",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
        {
          name: "Liam Jackson",
          img: require("../../assets/images/person7.jpg"),
        },
      ],
      permitted: true,
      timeLogs: taskColData,
    },
    {
      code: "TSK-1007",
      projectId: 1,
      name: "Testing the Backend Infrastructure",
      description:
        "This task involves rigorous testing of the backend infrastructure to ensure it meets our project requirements.",
      status: true,
      isOpen: true,
      startDate: "2023-10-13",
      endDate: "2023-11-02",
      workHours: "08:00",
      priority: "High",
      completed: 55,
      createdBy: "Liam Jackson",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Ella Brown",
          img: require("../../assets/images/person5.jpg"),
        },
      ],
      permitted: true,
      timeLogs: [],
    },
  ];

  const actionButtons = [
    {
      tooltip: "Edit",
      icon: faPenToSquare,
      handleClick: () => {},
    },
  ];

  const [currentTask, setCurrentTask] = useState<any>(null);

  const handleLoadTask = (id: any) => {
    console.log(tasks?.find((task: any) => task?.code === id));
    setCurrentTask(tasks?.find((task: any) => task?.code === id));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigateCreateTask = () => {
    navigate("/control/tasks/create-task");
  };

  const commonError = "Field is required";

  const validationSchema = Yup.object().shape({
    project: Yup.number().required(commonError),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const projects = [
    { value: 1, label: "PR1001 - Project One" },
    { value: 2, label: "PR1002 - Project Two" },
    { value: 3, label: "PR1003 - Project Three" },
    { value: 4, label: "PR1004 - Project Four" },
    { value: 5, label: "PR1005 - Project Five" },
  ];

  const project = watch("project");

  const [filteredTasks, setFilteredTasks] = useState<Array<any>>([]);

  useEffect(() => {
    if (project) {
      const tsk = tasks?.filter((t: any) => t?.projectId === project);
      setFilteredTasks(tsk);
      setCurrentTask(tsk[0]);
    }
  }, [project]);

  useEffect(() => {
    setValue("project", 1);
    setFilteredTasks(tasks?.filter((task: any) => task?.projectId === 1));
    setCurrentTask(tasks[0]);
  }, []);

  const getCursor = (permitted: boolean) => {
    return permitted ? "cursor-auto" : "cursor-not-allowed";
  };

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Tasks</p>
      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-12 lg:col-span-4">
          <FormAutoCompleteField
            options={projects}
            register={register("project")}
            label={"Project"}
            error={false}
            helperText={""}
            id={"project"}
            required={true}
            control={control}
            setValue={setValue}
            watch={watch}
            placeholder={"Select a project to get tasks"}
          />
        </div>
        <div className="col-span-12 lg:col-span-8 flex justify-end">
          <div className="mt-7">
            <Button
              onClick={handleNavigateCreateTask}
              text={"+ Create Task"}
              btnClass={"primary"}
              type={"button"}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div
          className={`card rounded-2xl p-5 col-span-12 lg:col-span-4 ${
            filteredTasks?.length > 0 ? "lg:col-span-4" : "lg:col-span-12"
          }`}
        >
          {filteredTasks?.length > 0 && (
            <div className="mb-5">
              <SearchField placeholder={"Search for tasks..."} />
            </div>
          )}
          <div className="w-full flex flex-col divide-y divide-gray-200">
            {filteredTasks?.map((task: any, index) => (
              <div
                onClick={() => handleLoadTask(task.code)}
                key={index}
                className="gap-x-2 py-3 px-4 text-sm font-semibold text-gray-800 hover:bg-blue-100 cursor-default"
              >
                <p>
                  <span className={"text-primary font-bold"}>
                    {task?.code}
                    {"  "}
                  </span>
                  {task?.name}
                </p>
                <p className={"text-gray-500 font-normal my-1"}>
                  {task?.description}
                </p>
                <div className={"flex gap-2 mt-2"}>
                  {task?.owners?.map((owner: any, index2: number) => (
                    <Tooltip title={owner?.name}>
                      <img
                        key={index2}
                        className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                        src={owner?.img}
                        alt="Image Description"
                      />
                    </Tooltip>
                  ))}
                  <div className="relative inline-block">
                    <div
                      className={
                        "text-xs font-semibold h-7 w-7 rounded-full ring-2 ring-white bg-gray-400 text-center flex justify-center items-center"
                      }
                    >
                      +3
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredTasks?.length === 0 && (
              <div className={"flex flex-col justify-center items-center"}>
                <img
                  className={"h-56 w-auto"}
                  src={require("../../assets/images/empty-box.png")}
                  alt="empty-box"
                />
                <p className={"text-gray-400 font-semibold"}>
                  No Tasks Found : (
                </p>
              </div>
            )}
          </div>
        </div>
        {filteredTasks?.length > 0 && (
          <div className="card rounded-2xl p-5 col-span-12 lg:col-span-8">
            <p className={"text-lg font-bold text-primary"}>
              {currentTask?.name}
            </p>
            <div className="flex gap-3 items-center mt-5">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
                {currentTask?.isOpen ? "OPEN" : "CLOSED"}
              </span>
              <p className={"text-sm text-gray-500 font-semibold"}>
                {currentTask?.createdBy}
              </p>
            </div>
            <div className={"mt-10"}>
              <p className={"font-semibold text-sm mb-2"}>
                Completed - {currentTask?.completed}%
              </p>
              <ProgressBar
                color={"bg-blue-800"}
                completed={currentTask?.completed}
                total={100}
              />
            </div>
            <div className="grid grid-cols-12 mt-5 gap-x-5 gap-y-2">
              <div className="col-span-12">
                <TextField
                  label={"Description"}
                  type={"text"}
                  id={"description"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.description}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <TextField
                  label={"Start Date"}
                  type={"date"}
                  id={"startDate"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.startDate}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <TextField
                  label={"End Date"}
                  type={"date"}
                  id={"endDate"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.endDate}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <TextField
                  label={"Due Date"}
                  type={"date"}
                  id={"dueDate"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.endDate}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <TextField
                  label={"Work Hours"}
                  type={"time"}
                  id={"workHours"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.workHours}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <TextField
                  label={"Priority"}
                  type={"text"}
                  id={"priority"}
                  helperText={""}
                  error={false}
                  required={false}
                  register={undefined}
                  value={currentTask?.priority}
                  disabled={true}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <Switch
                  label={"Status"}
                  id={"status"}
                  checked={currentTask?.status}
                  disabled={true}
                />
              </div>
            </div>
            <hr className={"my-5"} />

            <div className={"flex justify-end mb-5"}>
              <Button
                data-hs-overlay="#task-modal"
                text={"+ Add Time Logs"}
                btnClass={"primary"}
                type={"button"}
              />
            </div>
            <NormalTable
              columnHeaders={taskColHeads}
              tableData={currentTask?.timeLogs}
              actionButtons={actionButtons}
            />
          </div>
        )}
      </div>
      <Modal
        id={"task-modal"}
        title={"Add Time Log"}
        body={<AddTimeLogForm />}
        onSaveClick={() => {}}
      />
    </div>
  );
};
