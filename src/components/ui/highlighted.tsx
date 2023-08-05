import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const Highlighted: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <span
      className={`${className} text-customPrimary drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-800`}
    >
      {children}
    </span>
  );
};
