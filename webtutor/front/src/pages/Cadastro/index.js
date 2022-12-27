import react from "react"
import Logo from "./logo.PNG";
import './index.css';

function Cadastro() {
  return (
    <div>
      <div class="box">
        <div class="box-form">
        
        <form action="">
        <h2>Cadastro de Usúario</h2>
        <input type="text" id="nome" placeholder="Nome"></input>
        <input  type="text" id="email" placeholder="E-mail"></input>
        <input  type="password" id="senha" placeholder="Senha"></input>
        <input type="text" id="wpp" placeholder="Whatsapp"></input>
        <input  type="text" id="formacao" placeholder="Formação"></input>
        <h5>Voce e?</h5>
        <input type="radio" id="aluno" name="Aluno" value="Aluno" />
        <label for="aluno">Aluno</label>
        <input type="radio" id="Professor" name="Professor" value="Professor" />
        <label for="professor">Professor</label><br></br>
        <button type="submit" >Registrar-se</button><br></br>
        </form>

        </div>
      </div>
    </div>
  );
}

export { Cadastro };