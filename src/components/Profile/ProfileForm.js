import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const newPassRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredNewPass = newPassRef.current.value;
    //add validation

    setIsLoading(true);
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZf9M0_LmpCrKxRxNmWbrKjJ-FCBbcRj0",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPass,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        // authCtx.login(data.idToken);
        navigate("/");
      } else {
        const errData = await res.json();
        console.log(errData);
        let errMsg = "Authentication failed";
        if (errData && errData.error && errData.error.message) {
          errMsg = errData.error.message;
        }
        throw new Error(errMsg);
      }
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPassRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        {!isLoading && <button>Change Password</button>}
        {isLoading && <p>Requesting...</p>}
      </div>
    </form>
  );
};

export default ProfileForm;
