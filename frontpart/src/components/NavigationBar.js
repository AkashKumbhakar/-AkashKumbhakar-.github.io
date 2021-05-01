import React from 'react';
import { Link } from 'react-router-dom';


function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      
      <nav style={{backgroundColor: 'Gold'}}>
        
        <b><h3>
          <Link to="/adminafterlogin">Admin home </Link> |
              <Link to="/displayall">Booking Status</Link>|
              <Link to="/search">Search user </Link> |
              <Link to="/delete">Cancellation </Link>
              <div style={{backgroundColor:'white', textAlign:'right'}}><Link to="/logout"><b>LOGOUT </b></Link></div>
              </h3>
        </b>
      </nav>
      
    )

  }
  else if (authuser === 'USER') {
    return (
      <nav style={{backgroundColor: 'Gold'}}>
        
        <b><h3 style={{ color: "Red" }}>
          <Link to="/userafterlogin">USER HOME </Link> |
            
            
            <Link to="/logout">LOGOUT </Link>
            </h3>
        </b>
        
      </nav>
    )
  }
  else {
    return (
      <nav style={{backgroundColor: 'Gold' , textAlign:'right'}} >
        
        <b><h3 style={{ color: "Red" }}>
          <Link to="/">HOME </Link> |
              <Link to="/reg"> REGISTER </Link>|
            
              <Link to="/about"> ABOUT US </Link> |
              <Link to="/adminlogin"> ADMIN LOGIN </Link>
			  </h3>
        </b>
        
      </nav>
      
    )
  }
}

export default NavigationBar
