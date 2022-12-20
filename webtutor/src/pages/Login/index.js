import react from "react"

import './index.css';
import "./ComponentButton"
import Logo from "./logo.PNG";

function Login() {
  return (
    <div>
        <div class="box">
            
           
            <div class="box-form">
            <img src={Logo} class="logo"></img>
            <form >
            <input 
            type="text"
            id ="login"
            placeholder="Login">
            </input>
            <input 
            type="password"
            id ="login"
            placeholder="Password">
            </input>

            <button>Login</button>
            <button>Cadastrar-se</button>
        </form>

            </div>
        </div>
    </div>
  );
}

export { Login };
