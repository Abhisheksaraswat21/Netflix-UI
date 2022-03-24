import React from "react";
import "./LoginScreen.css";
import { useState } from "react";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {


    const [signIn, setSignIn] = useState(false);



  return (


    <div className="loginScreen">

      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
 {/* this button sets signin variable as true */}
        <button onClick={()=> setSignIn(true)} className="loginScreen__button">Sign In</button>

{/* //gradient is a kind of a fade in type ka...is case me hum poori background image ke upar dikhayenge */}
        <div className="loginScreen__gradient" />
</div>


    <div className="loginScreen__body">
{signIn ? 

(<SignUpScreen />)

:

(
    <>
    <h1>Unilimited films, TV programmes and more.</h1>

    <h2>Watch anywhere. Cancel at any time.</h2>

    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
    
    
    <div className="loginScreen__input">
        <form action="">

            <input type="email" placeholder="Email Address"/>

             {/* this button sets signin variable as true */}

            <button onClick={()=> setSignIn(true)} className="loginScreen__getStarted"> Get Started</button>
            
            
            </form>
        </div>
    
    
    </>


)




}


        </div>


      </div>
   
  );
}

export default LoginScreen;