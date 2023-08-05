import React, { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className,
  ...props
}: React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={`${className} custom-button-colored px-10 py-3 box-sh shadow disabled:cursor-default disabled:bg-blue-300 disabled:hover:bg-blue-300`}
    >
      {children}
    </button>
  );
}
