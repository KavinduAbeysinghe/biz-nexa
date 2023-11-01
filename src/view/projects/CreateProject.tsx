import { TextField } from "../../components/inputs/TextField";
import { Button } from "../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const guests = [
  {
    guestId: 1,
    img: require("../../assets/images/person1.jpg"),
  },
  {
    guestId: 2,
    img: require("../../assets/images/person2.jpg"),
  },
  {
    guestId: 3,
    img: require("../../assets/images/person3.jpg"),
  },
  {
    guestId: 4,
    img: require("../../assets/images/person4.jpg"),
  },
];

export const CreateProject = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const [title, setTitle] = useState<string>("");

  const [id, setId] = useState<any>("");

  useEffect(() => {
    const obj = searchParams.get("project");
    if (obj) {
      const proj = JSON.parse(obj);
      if (proj?.page === "view") {
        setId(proj?.id);
        setTitle("View Project");
      }
    } else {
      setTitle("Create Project");
    }
  }, [location]);

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>{title}</p>
      <div className={"card p-3 rounded-2xl"}>
        <div className={"grid grid-cols-12 gap-5"}>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Project Code"}
              type={"text"}
              id={"projectCode"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Enter project code"}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Project Name"}
              type={"text"}
              id={"projectName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Enter project name"}
            />
          </div>
          <div className={"col-span-12 lg:col-span-6"}>
            <TextField
              label={"Project Description"}
              type={"text"}
              id={"projectName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
              placeholder={"Enter project description"}
            />
          </div>
          <div className={"col-span-12 md:col-span-6 lg:col-span-3"}>
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
          <div className={"col-span-12 md:col-span-6 lg:col-span-3"}>
            <TextField
              label={"End Date"}
              type={"date"}
              id={"startDate"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 md:col-span-6 lg:col-span-3"}>
            <TextField
              label={"Time"}
              type={"time"}
              id={"time"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 md:col-span-6 lg:col-span-3"}>
            <TextField
              label={"Duration"}
              type={"time"}
              id={"duration"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
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
          <div className={"col-span-12 flex gap-2 flex-wrap"}>
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
            <div className="relative inline-block">
              <div
                className={
                  "font-semibold h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white bg-gray-400 text-center flex justify-center items-center"
                }
              >
                +3
              </div>
            </div>
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
