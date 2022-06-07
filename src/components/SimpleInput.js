import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState('');
  const nameInputRef = useRef();

  const onNameInputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
    console.log(enteredInput);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredInput);
    const inputRefValue = nameInputRef.current.value;
    console.log(inputRefValue);
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredInput}
          onChange={onNameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
