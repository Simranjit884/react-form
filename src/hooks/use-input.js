import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputlIsValid = validateValue(enteredInput);
  const hasError = enteredInputTouched && !enteredInputlIsValid;

  const valueChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredInputTouched(true);
  };

  const reset = () => {
      setEnteredInput("");
      setEnteredInputTouched(false);
  }

  return {
    hasError,
    enteredInput,
    enteredInputlIsValid,
    inputBlurHandler,
    valueChangeHandler,
    reset
  };
};

export default useInput;
