import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import admin from './admin.png';

function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "admin") && (adminpassword === "admin")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/adminafterlogin')

    }
    else
      setMessage('INVALID UID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

  }

  return (
    <div style={{backgroundColor: 'Beige'}}>

      <NavigationBar />
      <br />
      <img src={admin} width="100" height="100"></img>
      <br />
      <h3>ADMIN LOGIN</h3><br></br>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="text" value={adminuserid}
          onChange={onChangeAdminUserId} placeholder="ADMIN USER ID"
          required />
        <br />
        <br />
        <input type="password" value={adminpassword}
          onChange={(e) => setAdminPassword(e.target.value)} placeholder="ADMIN PASSWORD"
          required />
        <br />
        <br />
        <input type="submit" value="ADMIN LOGIN" className="btn btn-danger" />
      </form>
    </div>

  );
}
export default AdminLoginHooks