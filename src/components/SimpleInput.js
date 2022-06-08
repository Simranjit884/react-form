import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const {
    hasError: nameInputHasError,
    enteredInput: enteredName,
    enteredInputlIsValid: enteredNameIsValid,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredEmailIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetName();
  };

  const inputNameFormClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailFormClass = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={inputNameFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
