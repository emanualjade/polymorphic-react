import React, { useRef } from "react";
import "./App.css";
import { FancyButton } from "./components/PolyFour";
import PolyOne from "./components/PolyOne";
import CustomButton from "./components/PolyThree";
import { Button } from "./components/PolyTwo";

const App: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const polyTwoButtonRef = useRef<HTMLButtonElement>(null);
  const polyTwoAnchorRef = useRef<HTMLAnchorElement>(null);

  const fancyButtonRef = useRef<HTMLButtonElement>(null);
  const fancyAnchorRef = useRef<HTMLAnchorElement>(null);

  const onButtonClick = () => {
    if (!polyTwoButtonRef || !polyTwoButtonRef.current) {
      return;
    }
    console.log(polyTwoButtonRef);
  };

  const onAnchorButtonClick = () => {
    if (!polyTwoAnchorRef || !polyTwoAnchorRef.current) {
      return;
    }
    console.log(polyTwoAnchorRef);
  };

  const onFancyButtonClick = () => {
    if (!fancyButtonRef || !fancyButtonRef.current) {
      return;
    }
    console.log(fancyButtonRef);
  };

  const onFancyAnchorClick = () => {
    if (!fancyAnchorRef || !fancyAnchorRef.current) {
      return;
    }
    console.log(fancyAnchorRef);
  };

  return (
    <div className="App">
      <h1>Very Basic Poly Button - without the ref stuff</h1>
      <PolyOne as="a" href="htt://google.com">
        Button as anchor
      </PolyOne>
      <PolyOne type="submit">Button as button</PolyOne>

      <hr />

      <h1>Poly Button with Forward Ref</h1>
      <Button ref={polyTwoButtonRef} onClick={onButtonClick} type="submit">
        Poly Button with forward ref
      </Button>

      <Button
        as="a"
        href="https://google.com"
        ref={polyTwoAnchorRef}
        onClick={onAnchorButtonClick}
      >
        Poly Button as anchor with forward ref
      </Button>

      <h1>Custom Button Built from another Poly Button</h1>
      <CustomButton as="button" type="submit">
        A custom button
      </CustomButton>
      <CustomButton as="a" href="https://google.com">
        A custom button
      </CustomButton>

      <h1>Custom Button Built from another Poly Button + has forwardRef</h1>
      <FancyButton ref={fancyButtonRef} type="submit" onClick={onFancyButtonClick}>
        This is a fancy button
      </FancyButton>
      <FancyButton
        as="a"
        ref={fancyAnchorRef}
        href="https://google.com"
        onClick={onFancyAnchorClick}
      >
        This is a fancy button
      </FancyButton>
    </div>
  );
};

export default App;
