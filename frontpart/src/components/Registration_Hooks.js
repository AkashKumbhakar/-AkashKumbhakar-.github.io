import React, { useState } from 'react'
import reg from './reg.png';
import axios from 'axios';
import NavigationBar from './NavigationBar';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpGender = (e) => setEmpGender(e.target.value);
    const onChangeEmpCountry = (e) => setEmpCountry(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        }

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpCountry('')
        setEmpAddress('')

    }

    return (
        <div style={{backgroundColor: 'SkyBlue'}}>
              <NavigationBar />
        <div className="container" style={{backgroundColor: 'Beige'}}>
          
            <br />
			<div className="row">
            <div className="col-md-6 col-sm-8 mx-auto">
                <div className="card">
                <div className="card-body">
			<div>
            <img src={reg} width="350" height="150"></img>
            <h4 style={{ color: "blue" }}> {msg}</h4>
			<br /><br />
            <form onSubmit={handleSubmit}>
                <input type="text" value={ename}
				className="form-control"
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={eemail}
				className="form-control"
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={emobile}
				className="form-control"
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input type="date" value={edob}
				className="form-control"
                    onChange={onChangeEmpDOB} />
                <br /><br />

                <input type="password" value={epass}
				className="form-control"
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />

                Gender <input type="radio" name="gender" value="MALE"
					
				 checked={egender === 'MALE'}
                    onChange={onChangeEmpGender} />
                <label>Male</label>

                <input type="radio"
				
				name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender} />
                <label>Female</label>
                <br /><br />

                <select value={ecountry} 
				className="form-control"
				onChange={onChangeEmpCountry}>
                    
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
				className="form-control"
                    onChange={onChangeEmpAddress} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="REGISTER" className="btn btn-primary"/>

            </form>
        </div>
		</div>
		</div>
		</div>
		</div>
        </div>
		</div>
    )
}


export default Registration
