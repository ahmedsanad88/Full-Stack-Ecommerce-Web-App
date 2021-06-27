import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //  using firebase for login
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();
        
        //  using firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // when it's successfully done (created)
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
               <img
                    className="login__logo"
                    src="./images/logo.png" alt="Amazon" 
                /> 
            </Link>

            <div className="login__container">
                <h1>Sign-in / Sign-up</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                   By continuing, you agree to terms and Conditions of Use and Privacy Notice. 
                </p>

                <button onClick={register} className="login__registerButton">Create your New account</button>
            </div>
            {/* <img
                className="access__logo"
                src="../images/access.svg" alt="Amazon" 
            />  */}
           
        </div>
    )
}

export default Login;
