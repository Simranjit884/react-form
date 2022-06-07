import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNametouched] = useState(false);
  const nameInputRef = useRef();

  const onNameInputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
    if (enteredInput.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  const onBlurHandler = (event) => {
    setEnteredNametouched(true);
    if (enteredInput.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNametouched(true);

    if (enteredInput.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    const inputRefValue = nameInputRef.current.value;
    console.log(inputRefValue);
    setEnteredInput("");
  };

  const enteredNameIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const inputFormClass = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={inputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
