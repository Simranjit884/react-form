import { useState } from "react";

const useInput = (isValid) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputtouched] = useState(false);

  const enteredNameIsInvalid = enteredInputTouched && !isValid;

  const onNameInputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const onNameInputBlurHandler = (event) => {
    setEnteredInputtouched(true);
  };

  return {
    hasError: enteredNameIsInvalid,
    enteredInput,
    onNameInputBlurHandler,
    onNameInputChangeHandler,
  };
};

export default useInput;
