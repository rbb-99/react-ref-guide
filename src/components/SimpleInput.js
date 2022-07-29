// to fetch an input value, 2 ways:
// 1. listen on every keystroke and store the value in some state variable
// 2. use a ref to fetch the input once the user is done typing in a value
// in reality we use one, but here try both

//start with ref
import { useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //although this is not preferred in react as we're directly manipulating DOM wwhich should be left to react
    nameInputRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
