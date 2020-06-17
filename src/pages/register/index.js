import React from 'react';

import './style.css'
import Users from '../../users';

const users = new Users()

const Register = () => {
    return(

        <div id="container">
            <div id="box">
                <div className="form">
                    <h2>Registrar-se</h2>

                    <div className="row">
                        <input type="text" id="name" required/>
                        <label>
                            Nome
                        </label>
                        
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div >
                    <div className="row">
                        <input type="text" id="user" required/>
                        <label>
                            Usuario
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div >
                    <div className="row">
                        <input type="password" id="password" required/>
                        <label>
                            Senha
                        </label>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div >

                    <input type="submit" value="Registrar-se" onClick={registerUser}></input>
                </div>
            </div>
        </div>



    )
}


const registerUser = () => {
    const data = {
        user: document.getElementById('user'),
        password: document.getElementById('password')
    }
    alert('dfbb')
    users.appendUser(data)

}


export default Register;