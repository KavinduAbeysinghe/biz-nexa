import { useEffect, useState } from "react";

export const DigitalClock = () => {
  const [date, setDate] = useState<any>(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(new Date());
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [1000]);

  const formatAndGetDate = (date: Date) => {
    const dat = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${dat} ${months[month - 1]} ${year}`;
  };

  const formatAndGetTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={"flex gap-3 text-sm font-semibold text-gray-600 flex-wrap"}>
      <p>{formatAndGetDate(date)}</p>
      <p className={"w-16"}>{formatAndGetTime(date)}</p>
    </div>
  );
};
