import React from "react";

export interface lalaProps {
  children?: React.ReactNode;
  className?: string;
}

export const lala: React.FC<lalaProps> = ({ children, className }) => {
  return <div className={className}>lala Component {children}</div>;
};
