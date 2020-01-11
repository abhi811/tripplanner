import React, { Component } from 'react';

class Signup extends Component {


    render() {
        return (
        <div className="container">
        <form method="POST" id="reg-form">
        <div className="username">
        <label for="usrname">Username</label>
        <input type="text" id="usrname" name="usrname" className="input-field" required/>
        </div>
        <div className="password">
        <label for="psw">Password</label>
        <input type="password" className="input-field" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
        </div>
        <button id="submitForm" type="submit" value="Submit" className="submit-form" >Submit</button>
        </form>
        </div>
        )
    }
}


export default Signup;