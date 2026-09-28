import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[77.5rem] px-5 sm:px-6 lg:px-8${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
