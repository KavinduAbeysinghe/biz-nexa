import { TextField } from "../../components/inputs/TextField";
import { Switch } from "../../components/inputs/switch/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/buttons/Button";
import { guests } from "../projects/CreateProject";

export const CreateTask = () => {
  return (
    <div className="p-5">
      <p className={"font-bold text-2xl my-5"}>Create Task</p>
      <div className={"card p-3 rounded-2xl"}>
        <div className="grid grid-cols-12 gap-x-5 gap-y-2">
          <div className="col-span-4">
            <TextField
              label={"Task Name"}
              type={"text"}
              id={"taskName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Enter task name"}
            />
          </div>
          <div className="col-span-8">
            <TextField
              label={"Task Description"}
              type={"text"}
              id={"taskDescription"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Enter task description"}
            />
          </div>
          <div className="col-span-2">
            <TextField
              label={"Start Date"}
              type={"date"}
              id={"startDate"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className="col-span-2">
            <TextField
              label={"End Date"}
              type={"date"}
              id={"endDate"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className="col-span-2">
            <TextField
              label={"Due Date"}
              type={"date"}
              id={"dueDate"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className="col-span-2">
            <TextField
              label={"Work Hours"}
              type={"time"}
              id={"dueDate"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className="col-span-2">
            <TextField
              label={"Priority"}
              type={"text"}
              id={"priority"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className="col-span-2">
            <Switch label={"Status"} id={"status"} disabled={false} />
          </div>
          <div className={"col-span-12"}>
            <TextField
              label={"Add Guests"}
              type={"text"}
              id={"guests"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Start typing to see guests"}
            />
          </div>
          <div className={"col-span-12 flex gap-2"}>
            {guests?.map((guest: any, index) => (
              <div className="relative inline-block" key={guest?.guestId}>
                <img
                  className="object-cover inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white"
                  src={guest?.img}
                  alt="Image Description"
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={
                    "cursor-pointer text-sm absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-white"
                  }
                />
              </div>
            ))}
          </div>
          <div className={"col-span-12 flex justify-end gap-5"}>
            <Button text={"Clear"} btnClass={"secondary"} type={"button"} />
            <Button text={"Save"} btnClass={"primary"} type={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};
