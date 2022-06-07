import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputRef = useRef();

  const onNameInputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
    console.log(enteredInput);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredInput);

    if(enteredInput.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    const inputRefValue = nameInputRef.current.value;
    console.log(inputRefValue);
    setEnteredInput('');
  };

  const inputFormClass = enteredNameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={inputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredInput}
          onChange={onNameInputChangeHandler}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
