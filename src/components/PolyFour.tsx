import React from "react";
import { Button, ButtonOwnProps } from "./PolyTwo";

type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

type FancyButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  myProp?: string
} & ButtonOwnProps<E>

export type FancyButtonProps<E extends React.ElementType> = FancyButtonOwnProps<E> &
  Omit<PropsOf<E>, keyof FancyButtonOwnProps>;

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  FancyButtonProps<E>;

const defaultElement = "button";

export const FancyButton = React.forwardRef(
  ({ as, ...restProps }: FancyButtonOwnProps, ref: React.Ref<Element>) => {
    const element = as || defaultElement;
    return <Button as={element} ref={ref} {...restProps} />;
  }
) as <E extends React.ElementType = typeof defaultElement>(
  props: FancyButtonProps<E>
) => JSX.Element;
