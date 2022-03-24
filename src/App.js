import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen"
import {
  Switch,
  Route, 
  Link
} from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {

//this helps to fetch user from redux store 
//this gives the user back
  const user = useSelector(selectUser);

const dispatch = useDispatch();

  useEffect(()=> {
    //it is a  listener to change in state of authentication
    //basically jab user refersh krega tb ye logout ni krega usko...
    //it will store user in local memory 
    //this takes up a memory ...if component is unmount we dont want to duplicate
    //a listener...we detach old and attach a new one
  const unsubscribe =   auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        //logged in
        console.log(userAuth);

        dispatch(login({
          //this is all payload we want ti set user to payload
          //we are passing these things as payload
          //ab userauth me bhaut kuch hai pr hume bs uid aur email pass krna hai to
          //wo keys bnaake paas krdi humne

          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }

      else
      {
        //logged out
        //logout is resetting user back to null
        //we defined logout in userSlice
        dispatch(logout());
      }

    });
      //this is a clean up funciton
    return unsubscribe;
      
  }, [dispatch])



  return (
    <div className="app">


    <Router>
   
  {
  !user ? (
    <LoginScreen />
  ) 
  :
  (
    <Switch>
        
       
        <Route exact path="/">
        <HomeScreen />
        </Route>
        <Route path="/profile">
          <ProfileScreen />
        
        </Route>
      </Switch>
    


  )}  
       
      
    </Router>
  


    </div>
  );
}

export default App;
