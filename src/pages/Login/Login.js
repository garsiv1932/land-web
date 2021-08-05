import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {withRouter} from "react-router-dom";

function Login({history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div id="login" className="container">
            <div className="row-fluid">
                <div className="span12">
                    <div className="login well well-small">
                        <div className="center">
                            <img src="https://static1.abc.es/media/cultura/2020/09/17/banksy-kfrF--620x349@abc.jpg" alt="logo" id="bansky" />
                        </div>
                        <form action="/users/login" className="login-form" id="UserLoginForm" method="post"
                              accept-charset="utf-8">
                            <div className="form-group">
                                <span className="add-on"></span>
                                <input name="data[User][username]" required="required" placeholder="Username"
                                       maxLength="255" type="text" id="UserUsername" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <span className="add-on"></span>
                                <input name="data[User][password]" required="required" placeholder="Password"
                                       type="password" id="UserPassword" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-dark btn-large btn-block" type="submit" value="Sign in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);