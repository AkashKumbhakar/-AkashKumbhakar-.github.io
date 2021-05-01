import React from 'react'
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import himachal from './himachal.jpg';
import goa from './goa.jpg';
import kerala from './kerala.jpg';
import shimla from './shimla.jpg';
import logo from './logo.png';
function Home() {
  return (
    <div style={{backgroundColor: 'Gainsboro'}}>
      <NavigationBar />
      <br />
      <img src={logo} width="100" height="100"></img>
      <h1 style={{ color: "OrangeRed" }}><u>"Travel is the only thing you buy that makes you richer"</u></h1>
      <br></br>
      <h1 style={{ color: "red"}}>~~Availabe Tours Right Now~~</h1>
      
      <img src={himachal} width="700" height="500"></img>
      <div><h2 style={{ color: "blue" }}><Link to="/login">BOOK NOW </Link></h2></div>
      <img src={goa} width="700" height="500"></img>
      <div><h2 style={{ color: "blue" }}><Link to="/login">BOOK NOW </Link></h2></div>
      <br></br>
      <img src={kerala} width="700" height="500"></img>
      <div><h2 style={{ color: "blue" }}><Link to="/login">BOOK NOW </Link></h2></div>
      <img src={shimla} width="700" height="500"></img>
      <div><h2 style={{ color: "blue" }}><Link to="/login">BOOK NOW </Link></h2></div>
    </div>
  )
}

export default Home
