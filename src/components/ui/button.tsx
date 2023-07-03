import React from "react";

export function Button({
  children,
  ...props
}: React.PropsWithChildren<typeof HTMLAnchorElement>) {
  return (
    <a {...props} className="custom-button-colored px-10 py-3 box-sh shadow">
      {children}
    </a>
  );
}
