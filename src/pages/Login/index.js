import React from 'react';
 
import './style.css';
import Users from "../../users";

let UsersNew = new Users()

const doLogin = () => {
    const dados = {
        user: document.querySelector('#user').value,
        password: document.querySelector('#password').value
    }
    
    const users = UsersNew.getUsers()
    for (let i = 0; i < users.length; i++){
        if (users[i].user === dados.user && users[i].password === dados.password){
            console.log('UserIsLoged')
            window.location = '/dashboard'
        }else{
            alert('Conta invalida!! Tente novamente.')
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

                <div className="register">
                    <br></br>
                    <span>ou</span>
                    <br/>
    
                    <p>Não tem uma conta? <a href="/register">Cadastra-se</a></p>
                </div>
            </div>

        </div>
    )
}

export default Login;