import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    hasError: nameInputHasError,
    enteredInput: enteredName,
    enteredInputlIsValid: enteredNameIsValid,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: emailInputHasError,
    enteredInput: enteredEmail,
    enteredInputlIsValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const inputNameFormClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailFormClass = emailInputHasError
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
      <div className={inputEmailFormClass}>
        <label htmlFor="email"> Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && (
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
