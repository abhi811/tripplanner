import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { withRouter } from "react-router";

import Signup from './Signup';
import App from './App';

class Login extends Component {

    constructor(props) {
        super(props);
        this.doCheck = this.doCheck.bind(this);
        this.ajax = this.ajax.bind(this);
    }

    ajax(url, method, data) {
        return new Promise(function(resolve, reject) {
          var request = new XMLHttpRequest();
          request.open(method, url, true);
          request.responseType = 'text';
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                resolve(request.responseText);
              } else {
                reject(Error(request.statusText));
              }
            }
          };
          request.onerror = function() {
            reject(Error("Network Error"));
          };
          request.send(data);
          
        });
      }

    doCheck() {
        let username = document.getElementById("usrname");
        let password = document.getElementById("psw");
        let data = {
            'username' : username.value,
            'password' : password.value
        }

        this.ajax('http://localhost:4000/finduser', 'POST', JSON.stringify(data)).then((result) => {
        var res = JSON.parse(result);
        console.log(res);
        if(res.status) {
            //alert("You are present");
            this.props.history.replace("/dashboard");  
        }
        else {
            alert("You ain't present");
        }

        })
        .catch(function(e) {
            console.log(e);
        alert("You ain't present");
        console.log("You ain't present");
        });
    }


    render() {
        return (
            <div className="container">
               <form id="reg-form">
                    <div className="username">
                        <label for="usrname">Username</label>
                        <input type="text" id="usrname" name="usrname" className="input-field"></input>
                    </div>
                    <div className="password">
                        <label for="psw">Password</label>
                        <input type="password" className="input-field" id="psw" name="psw" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                    </div>
                    <button onClick={(e) => {e.preventDefault(); this.doCheck()}} id="LoginSubmit" type="submit" value="Submit" className="submit-form" >Login</button>
                    <Router>
                        <Link to="home/signup">
                            <button id="Signup-submit" type="submit" value="Submit" className="submit-form" >Signup</button>
                        </Link>
                        <Switch>
                            <Route path="home/signup">
                                <Signup />
                            </Route>
                        </Switch>
                    </Router>
               </form>
            </div>

        )
    }
}


export default withRouter(Login);