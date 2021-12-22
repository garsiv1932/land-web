import React, { useState } from "react";
import "./Login.css";
import {withRouter} from "react-router-dom";
import {useUser} from "../../hooks/useUser";
import validations from '../../services/validationService'


function Login({history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");
        
    const {user, login, logout } = useUser()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    async function handleLogin(event){
        event.preventDefault();
        
        if(!validations.email(email).error){
            debugger
            try {
                const resp = await login({email, password})
                if(resp !== undefined || resp !== null){
                    // setEmail('');
                    // setPassword('');
                    console.log(user)
                    history.push("/Dashboard");    
                }else{
                    setErrorMessage("Credenciales Invalidas");
                    setTimeout(()=>{
                        setErrorMessage('')
                    },5000);
                }
            }catch(e){
                setErrorMessage("Problema Inesperado");
                setTimeout(()=>{
                    setErrorMessage('')
                },5000);
            }
        }
    }
    
    return (
        <div id="login" className="container">
            <div className="row-fluid">
                <div className="span12">
                    <div className="login well well-small">
                        <div className="center">
                            <img src="https://static1.abc.es/media/cultura/2020/09/17/banksy-kfrF--620x349@abc.jpg" alt="logo" id="bansky" />
                        </div>
                        <form onSubmit={handleLogin} className="login-form mt-3" id="UserLoginForm" method="post"
                              accept-charset="utf-8">
                            <div className="form-group">
                                <span className="add-on"></span>
                                <input onChange={ e=> setEmail(e.target.value)} value={email}  required="required" placeholder="Username"
                                       maxLength="255" type="text" id="UserUsername" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <span className="add-on"></span>
                                <input onChange={ e => setPassword(e.target.value)} value={password} placeholder="Password"
                                       type="password" id="UserPassword" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-dark btn-large btn-block" type="submit" value="Sign in"/>
                            </div>
                            <div className="mt-4 alert-danger">
                                {errorMessage}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);