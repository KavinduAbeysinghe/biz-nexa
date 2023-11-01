import { TextField } from "../../components/inputs/TextField";
import { Tooltip } from "@mui/material";
import { SearchField } from "../../components/inputs/texts/SearchField";
import { ProgressBar } from "../../components/progress/ProgressBar";
import { Switch } from "../../components/inputs/switch/Switch";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "../../components/modals/Modal";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Task = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: true,
      isOpen: true,
      startDate: "2023-10-10",
      endDate: "2023-11-11",
      workHours: "08:00",
      priority: "High",
      completed: 66,
      createdBy: "Jane Warren",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person2.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person3.jpg"),
        },
      ],
    },
    {
      code: "TSK-1002",
      name: "Learning Next JS",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: true,
      isOpen: true,
      startDate: "2023-10-10",
      endDate: "2023-11-11",
      workHours: "08:00",
      priority: "High",
      completed: 66,
      createdBy: "Jane Warren",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person2.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person3.jpg"),
        },
      ],
    },
    {
      code: "TSK-1003",
      name: "Preparing a Document for Figma",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: true,
      isOpen: true,
      startDate: "2023-10-10",
      endDate: "2023-11-11",
      workHours: "08:00",
      priority: "High",
      completed: 66,
      createdBy: "Jane Warren",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person2.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person3.jpg"),
        },
      ],
    },
    {
      code: "TSK-1004",
      name: "Developing a Complete Fullstack Application",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: true,
      isOpen: true,
      startDate: "2023-10-10",
      endDate: "2023-11-11",
      workHours: "08:00",
      priority: "High",
      completed: 66,
      createdBy: "Jane Warren",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person2.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person3.jpg"),
        },
      ],
    },
    {
      code: "TSK-1005",
      name: "Making a Figma for Banking App",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: true,
      isOpen: true,
      startDate: "2023-10-10",
      endDate: "2023-11-11",
      workHours: "08:00",
      priority: "High",
      completed: 66,
      createdBy: "Jane Warren",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person1.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person2.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person3.jpg"),
        },
      ],
    },
  ];

  const taskColHeads = ["Date", "Start Time", "End Time"];

  const taskColData = [
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
    { date: "11 Nov 2023", startTime: "8.30 AM", endTime: "5.30 PM" },
  ];

  const actionButtons = [
    {
      tooltip: "Edit",
      icon: faPenToSquare,
      handleClick: () => {},
    },
  ];

  const ModalBody = () => {
    return (
      <div className="grid grid-cols-12 gap-x-5 gap-y-2">
        <div className="col-span-4">
          <TextField
            label={"Date"}
            type={"date"}
            id={"date"}
            helperText={""}
            error={false}
            required={false}
            register={undefined}
          />
        </div>
        <div className="col-span-4">
          <TextField
            label={"Start Time"}
            type={"time"}
            id={"startTime"}
            helperText={""}
            error={false}
            required={false}
            register={undefined}
          />
        </div>
        <div className="col-span-4">
          <TextField
            label={"End Time"}
            type={"time"}
            id={"endTime"}
            helperText={""}
            error={false}
            required={false}
            register={undefined}
          />
        </div>
      </div>
    );
  };

  const [currentTask, setCurrentTask] = useState<any>(null);

  const handleLoadTask = (id: any) => {
    setCurrentTask(tasks?.find((task: any) => task?.code === id));
    scrollToTop();
  };

  useLayoutEffect(() => {
    setCurrentTask(tasks[0]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigateCreateTask = () => {
    navigate("/control/tasks/create-task");
  };

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Tasks</p>
      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-12 lg:col-span-4">
          <TextField
            label={"Project"}
            type={"text"}
            id={"project"}
            helperText={""}
            error={false}
            required={false}
            register={undefined}
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
        <div className="card rounded-2xl p-5 col-span-12 lg:col-span-4">
          <div className="mb-5">
            <SearchField placeholder={"Search for tasks..."} />
          </div>
          <div className="w-full flex flex-col divide-y divide-gray-200">
            {tasks?.map((task: any, index) => (
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
          </div>
        </div>
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
                defaultValue={currentTask?.description}
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
                defaultValue={currentTask?.startDate}
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
                defaultValue={currentTask?.endDate}
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
                defaultValue={currentTask?.endDate}
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
                defaultValue={currentTask?.workHours}
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
                defaultValue={currentTask?.priority}
                disabled={true}
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <Switch
                label={"Status"}
                id={"status"}
                defaultChecked={currentTask?.status}
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
            tableData={taskColData}
            actionButtons={actionButtons}
          />
        </div>
      </div>
      <Modal
        id={"task-modal"}
        title={"Add Time Log"}
        body={<ModalBody />}
        onSaveClick={() => {}}
      />
    </div>
  );
};
