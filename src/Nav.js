import React, { useEffect } from "react";
import "./Nav.css";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {

  const [show, handleShow] = useState(false);


const history = useHistory();


  const transitionNavBar = () => {
    if(window.scrollY > 100)
    {
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(()=> {
  window.addEventListener("scroll", transitionNavBar);

  return ()=>  window.removeEventListener("scroll", transitionNavBar)
  },[])
  return (

    <div className={`nav ${show && "nav__black"}`}>
        
      <div className="nav_content">
        <img
        onClick={()=> {
          history.push("/")
        }}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          // src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

 {/* this is done with the help of routers */}

        <img onClick={()=> history.push("./profile")}
          className="nav__avatar"
          src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
          alt=""
        />

      </div>
    </div>
  );
}

export default Nav;
