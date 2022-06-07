import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredNameTouched, setEnteredNametouched] = useState(false);

  const enteredNameIsValid = enteredInput.trim() !== "";
  const enteredNameIsInvalid = enteredNameTouched && !enteredNameIsValid;

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const onNameInputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const onBlurHandler = (event) => {
    setEnteredNametouched(true);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNametouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredInput("");
    setEnteredNametouched(false);
  };

  const inputFormClass = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={inputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredInput}
          onBlur={onBlurHandler}
          onChange={onNameInputChangeHandler}
        />
        {enteredNameIsInvalid && (
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
