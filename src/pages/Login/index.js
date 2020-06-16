import React from 'react';

import './style.css';
import Users from "../../users";

const doLogin = () => {
    const dados = {
        user: document.querySelector('#user').value,
        password: document.querySelector('#password').value
    }

    const users = Users()
    for (let i = 0; i < users.length; i++){
        if (users[i].user === dados.user && users[i].password === dados.password){
            console.log('UserIsLoged')
        }
    }
    
}

const Login = () => {
    return(
        <div id="container">
            
            <div id="box">
                <form action="#">
                    <h2>Login</h2>
                    <div className="row">
                        <input type="text" name="" id="user" required/>
                        <label className="text">
                            Usuário
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div>

                    <div className="row">
                        <input type="password" id="password" required/>
                        <label className="text">
                            Senha
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div >

                    <input type="submit" value="Fazer login" onClick={doLogin}/>
                </form>
            </div>

        </div>
    )
}

export default Login;