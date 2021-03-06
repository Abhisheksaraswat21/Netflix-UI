import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'
function ProfileScreen() {

    //here we are fetting this user from redux store
    const user =  useSelector(selectUser);
    



  return (


    <div className='profileScreen'>
     <Nav />
<div className="profileScreen__body">
     
     <h1>Edit Profile</h1>
    
    <div className="profileScreen__info">
        <img src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png" alt="" />


<div className="profileScreen__details">
    
    <h2>{user.email}</h2>
<div className="profileScreen__plans">

    <h3>Plans</h3>
    
    <PlansScreen />



    
    <button onClick={()=> {auth.signOut()}} className='profileScreen__signOut'>Sign Out</button>
    </div>    
        </div>
        </div>
    



    </div>
        
        
        </div>
  )
}

export default ProfileScreen