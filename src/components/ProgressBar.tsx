import clsx from "clsx";
import { motion } from "framer-motion";

type ProgressBarProps = {
  className?: string;
  color: "green" | "red" | "blue";
  progress: number;
};

export const ProgressBar = ({
  className,
  color,
  progress,
}: ProgressBarProps) => {
  return (
    <div className={clsx("relative w-full", className)}>
      <div
        className={clsx(
          "overflow-hidden h-2 text-xs flex rounded",
          color === "green" ? "bg-emerald-200" : "",
          color === "red" ? "bg-red-200" : "",
          color === "blue" ? "bg-blue-200" : ""
        )}
      >
        <motion.div
          animate={{ width: ["0%", `${progress * 100}%`] }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center",
            color === "green" ? "bg-emerald-500" : "",
            color === "red" ? "bg-red-500" : "",
            color === "blue" ? "bg-blue-500" : ""
          )}
        ></motion.div>
      </div>
    </div>
  );
};
