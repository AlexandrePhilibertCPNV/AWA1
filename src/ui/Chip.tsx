import { PropsWithChildren } from "react";

export const Chip = ({ children }: PropsWithChildren<{}>) => {
  return (
    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
      {children}
    </span>
  );
};
