import { TextField } from "../../components/inputs/TextField";
import { Tooltip } from "@mui/material";
import { SearchField } from "../../components/inputs/texts/SearchField";
import { ProgressBar } from "../../components/progress/ProgressBar";
import { Switch } from "../../components/inputs/switch/Switch";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "../../components/modals/Modal";

export const Task = () => {
  const tasks = [
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
      ],
    },
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
      ],
    },
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
      ],
    },
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
      ],
    },
    {
      code: "TSK-1001",
      name: "Training and Work Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      owners: [
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
        },
        {
          name: "Steven Smith",
          img: require("../../assets/images/person.jpg"),
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

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Tasks</p>
      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-4">
          <TextField
            label={"Project"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={false}
            register={undefined}
            placeholder={"Select a project to get tasks"}
          />
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
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card rounded-2xl p-5 col-span-12 lg:col-span-8">
          <p className={"text-lg font-bold text-primary"}>
            Training and Work Reviews
          </p>
          <div className="flex gap-3 items-center mt-5">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
              OPEN
            </span>
            <p className={"text-sm text-gray-500 font-semibold"}>
              By Jane Warren
            </p>
          </div>
          <div className={"mt-10"}>
            <p className={"font-semibold text-sm mb-2"}>Completed - 66%</p>
            <ProgressBar color={"bg-blue-800"} completed={66} total={100} />
          </div>
          <div className="grid grid-cols-12 mt-5 gap-x-5 gap-y-2">
            <div className="col-span-12">
              <TextField
                label={"Description"}
                type={"text"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <TextField
                label={"Start Date"}
                type={"date"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <TextField
                label={"End Date"}
                type={"date"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <TextField
                label={"Due Date"}
                type={"date"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <TextField
                label={"Work Hours"}
                type={"time"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <TextField
                label={"Priority"}
                type={"text"}
                id={"gender"}
                helperText={""}
                error={false}
                required={false}
                register={undefined}
              />
            </div>
            <div className="col-span-4">
              <Switch
                label={"Status"}
                id={"status"}
                defaultChecked={true}
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
