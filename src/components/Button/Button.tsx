import React from "react";
import { cn } from "@bem-react/classname";

import "./Button.scss";

export interface ButtonInterface {
  disabled: boolean;
  className?: string;
}

export const Button = ({ className, disabled }: ButtonInterface) => {
  const cnButton = cn("Button");
  console.log(className);

  return (
    <button className={cnButton({ disabled }, [className])} disabled={disabled}>
      Поиск
    </button>
  );
};
