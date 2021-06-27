import * as React from "react";
import { Button, PolymorphicComponentProps } from "./PolyTwo";

interface CustomButtonOwnProps {
  customProp?: number;
}

type CustomButtonProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  CustomButtonOwnProps
>;

function CustomButton<E extends React.ElementType>(props: CustomButtonProps<E>): JSX.Element {
  console.log(props.customProp);
  return <Button {...props} />;
}

export default CustomButton