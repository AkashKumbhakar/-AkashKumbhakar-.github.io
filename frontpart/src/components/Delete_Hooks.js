import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function Delete() {
  const [eemail, setEmpEmail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios.delete('http://localhost:4500/emp/remove/' + eemail)
      .then(res => {
        console.log(res.data)
        setMessage('CANCELLATION SUCCESSFULLY !! ')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID ')
      })

    setEmpEmail('')
  }

  return (
    <div style={{backgroundColor: 'Gainsboro'}}>
      <NavigationBar />
      <br />
      <h3 >ENTER EMAIL ID FOR BOOKING CANCELLATION</h3><br></br>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required />
        <br />
        <br />
        <input type="submit" value="CANCEL ORDER" className="btn btn-danger" /><br></br><br></br>
      </form>
    </div>
  )
}


export default Delete
