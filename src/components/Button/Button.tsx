import React from "react";
import { cn } from "@bem-react/classname";

import "./Button.scss";

export interface IButtonProps {
  className?: string;
  disabled: boolean;
}

export const Button: React.FC<IButtonProps> = ({ className, disabled }) => {
  const cnButton = cn("Button");

  return (
    <button className={cnButton({ disabled }, [className])} disabled={disabled}>
      Поиск
    </button>
  );
};
