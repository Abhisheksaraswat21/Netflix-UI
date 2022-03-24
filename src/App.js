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
  
  const unsubscribe =   auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        //logged in
        console.log(userAuth);

        dispatch(login({
         

          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }

      else
      {
        //logged out
       
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
