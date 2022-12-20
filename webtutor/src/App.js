import { Fragment } from "react";

import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";

import { NavBar } from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // Todas as páginas devem estar aqui dentro para validar a navegação
    <BrowserRouter>
      <Fragment>
        <NavBar />
      </Fragment>
      <Routes>
        {/* Rota para Home page */}
        <Route path="/" element={<Home />} />
        {/* Rota para tela de Quiz (teste) */}
        <Route path="/quiz" element={<Quiz />} />
        {/* Rota para tela de Login (teste) */}
        <Route path="/login" element={<Login />} />
        {/* Rota para tela de Cadastro (teste) */}
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
