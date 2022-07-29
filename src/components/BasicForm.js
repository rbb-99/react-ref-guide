import useInput from "../hooks/use-Input";
import validator from "validator";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && validator.isEmail(value));

  let formIsValid = false;
  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredFName, enteredLName, enteredEmail);
    resetFName();
    resetLName();
    resetEmail();
  };

  const fNameClasses = !fNameHasError ? "form-control" : "form-control invalid";
  const lNameClasses = !lNameHasError ? "form-control" : "form-control invalid";
  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
        </div>
        {fNameHasError && <p className="error-text">Please enter a first name.</p>}

        <div className={lNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
        </div>
        {lNameHasError && <p className="error-text">Please enter a last name.</p>}
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailHasError && <p className="error-text">Please enter a valid email.</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
