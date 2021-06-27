import * as React from "react";

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as?: E;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";

function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as,
  ...rest
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  return <TagName {...rest}>{children}</TagName>;
}

export default Button