import React, { useState } from "react";
import "./SignUpScreen.css";
import { useRef } from "react";
import { auth } from "../firebase";
import NewAccountScreen from "./NewAccountScreen";

function SignUpScreen() {
  // useState renders on each change, useRef is silent (doesn't re-render)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [signinAlert, setSigninAlert] = useState(true); 

 

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        //it is saying that we are pointing the emailref current value which is inside
        //input field
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);

        if(signinAlert)
        {
          alert("Signed in Successfully")

        }

        setTimeout(() => {
          setSigninAlert(false);
        }, 3000);

        
    
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form action="">
        <h1>SignIn</h1>

        <input ref={emailRef} type="email" placeholder="Email" />

        <input ref={passwordRef} type="password" placeholder="Password" />

        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick= {register} >
            {" "}
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
