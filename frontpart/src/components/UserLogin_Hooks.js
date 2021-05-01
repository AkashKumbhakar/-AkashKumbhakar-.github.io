import React, { useState } from 'react'
import login from './Login.png';
import axios from 'axios';
import NavigationBar from './NavigationBar';

function UserLogin(props) {
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('http://localhost:4500/emp/logincheck', emplogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].empemail)
        sessionStorage.setItem("username", res.data[0].empname)
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
  }

  
  return (
       
			<div style={{backgroundColor: 'SkyBlue'}}>
			<NavigationBar />
        <div className="container" style={{backgroundColor: 'Beige'}}>
            <br />
            <img src={login} width="300" height="150"></img>
            <br />
            <div className="row">
            <div className="col-md-6 col-sm-8 mx-auto">
                <div className="card">
                <div className="card-body">
                    
     
	
		<br />
            
            <br /><br />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control"
                    value={eemail}
                    onChange={onChangeEmpEmail}
                    placeholder="ENTER USER ID" required />
                <br /><br />
                <input type="password"
                    className="form-control"
                    value={epass}
                    onChange={onChangeEmpPass}
                    placeholder="ENTER PASSWORD" required />
                <br /><br /> <br></br><br></br>
                <input type="submit" value="LOG IN" className="btn btn-primary" />
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
)
}

export default UserLogin
