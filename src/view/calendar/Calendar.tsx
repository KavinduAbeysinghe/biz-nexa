import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export const MyCalendar = () => {
  const myEventsList = [
    {
      title: "Event 1",
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 3),
    },
    {
      title: "Event 2",
      start: new Date(2023, 0, 7),
      end: new Date(2023, 0, 10),
    },
  ];

  return (
    <div className={"p-5"}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
