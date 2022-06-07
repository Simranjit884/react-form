import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNametouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredNameIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredEmailIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onNameInputBlurHandler = (event) => {
    setEnteredNametouched(true);
  };

  const onEmailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const onEmailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNametouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNametouched(false);
  };

  const inputFormClass =
    enteredNameIsInvalid && enteredEmailIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={inputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={onNameInputBlurHandler}
          onChange={onNameInputChangeHandler}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={inputFormClass}>
        <label htmlFor="email"> Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onBlur={onEmailInputBlurHandler}
          onChange={onEmailInputChangeHandler}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
