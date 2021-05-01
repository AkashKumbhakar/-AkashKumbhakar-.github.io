import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
import logo from './logo.png';
import adminpage from './adminpage.png';

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div style={{backgroundColor: 'Gainsboro'}}>
        <NavigationBar />
        <img src={logo} width="100" height="100"></img>
        <br /><br></br><br></br>
        <h1 style={{ color: 'red' }}>WELCOME ADMIN</h1>
        <br></br><br></br>
        <img src={adminpage} width="500" height="300"></img>
        <br></br><br></br><br></br>
      </div>
    )
  }
}

export default AdminAfterLogin
