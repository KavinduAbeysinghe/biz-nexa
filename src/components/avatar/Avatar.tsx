interface AvatarProps {
  img: any;
  status: "active" | "away" | "offline" | "busy";
}

export const Avatar = ({ img, status }: AvatarProps) => {
  return (
    <div className="relative inline-block">
      <img
        className="inline-block h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white object-cover"
        src={img}
        alt="Image Description"
      />
      <span
        className={`absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white ${
          status === "active"
            ? "bg-green-700"
            : status === "away"
            ? "bg-orange-400"
            : status === "busy"
            ? "bg-red-800"
            : "bg-gray-500"
        }`}
      ></span>
    </div>
  );
};
