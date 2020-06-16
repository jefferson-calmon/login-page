import React from 'react';

import './style.css';

const Login = () => {
    return(
        <div id="container">
            
            <div id="box">
                <form>
                    <h2>Login</h2>
                    <div className="row">
                        <input type="text" name="" required/>
                        <label className="text">
                            Usuário
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div>

                    <div className="row">
                        <input type="password" required/>
                        <label className="text">
                            Senha
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div >

                    <input type="submit"/>
                </form>
            </div>

        </div>
    )
}

export default Login;