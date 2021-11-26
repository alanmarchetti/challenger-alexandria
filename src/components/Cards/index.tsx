import { Card } from "./style";
import { ReactChildren, ReactChild } from "react";

interface ChildrenProps {
  children?: ReactChild | ReactChildren;
}

export const Cards = ({ children }: ChildrenProps) => {
  return <Card>{children}</Card>;
};
