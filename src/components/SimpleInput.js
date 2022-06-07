import { useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const onNameInputChangeHandler = () => {
    const inputRefValue = nameInputRef.current.value;
    console.log(inputRefValue);
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={onNameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
