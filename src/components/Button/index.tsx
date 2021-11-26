import { ReactChildren, ReactChild } from "react";

interface ChildrenProps {
  children?: ReactChild | ReactChildren;
}

export const Button = ({ children }: ChildrenProps) => {
  return <button>{children}</button>;
};
