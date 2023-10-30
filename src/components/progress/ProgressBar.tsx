interface ProgressBarProps {
  color: string;
  completed: number;
  total: number;
}

export const ProgressBar = ({ color, completed, total }: ProgressBarProps) => {
  return (
    <div
      className={`flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden`}
    >
      <div
        className={`flex flex-col justify-center overflow-hidden ${color}`}
        role="progressbar"
        style={{ width: `${(completed / total) * 100}%` }}
        aria-valuenow={(completed / total) * 100}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};
