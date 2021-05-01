import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
import journey from './journey.png';
import logo from './logo.png';

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/login" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div style={{backgroundColor: 'Beige'}}>
        <NavigationBar />
        <br />
        <img src={logo} width="100" height="100"></img>
        <h3>WELCOME {name}</h3><br></br><br></br>
        <h3 style={{ color: 'red' }}>CONGRATULATIONS!! YOUR REQUEST HAS BEEN TAKEN</h3><br></br>
        <h3 style={{ color: 'ForestGreen' }}>You will receive an email from us shortly for further deatils</h3><br></br>
        <h1 style={{ color: 'red' }}>Enjoy the journey!</h1><br></br><br></br>
        <img src={journey} width="700" height="500"></img>
    
      </div>
    )
  }
}

export default UserAfterLogin
