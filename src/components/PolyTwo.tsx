import React from "react";

// See
// https://gist.github.com/kripod/4434e7cecfdecee160026aee49ea6ee8

type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface ButtonOwnProps<E extends React.ElementType = React.ElementType> {
  myProp?: string
  as?: E;
}

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<PropsOf<E>, keyof ButtonOwnProps>;

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  ButtonProps<E>;

const defaultElement = "button";

export const Button = React.forwardRef(
  ({ as, ...restProps }: ButtonOwnProps, ref: React.Ref<Element>) => {
    const Element = as || defaultElement;
    return <Element ref={ref} {...restProps} />;
  }
) as <E extends React.ElementType = typeof defaultElement>(
  props: ButtonProps<E>
) => JSX.Element;

/* Usage example: */

// interface CustomComponentOwnProps {
//   customProp?: number;
//   onClick: boolean;
// }

// type CustomComponentProps<E extends React.ElementType> =
//   PolymorphicComponentProps<E, CustomComponentOwnProps>;

// function CustomComponent<E extends React.ElementType>(
//   props: CustomComponentProps<E>
// ): JSX.Element {
//   return <Button {...props} />;
// }
