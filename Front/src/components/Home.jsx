import React from "react";
import "../assets/styles/Login.css"; // usar mesmo estilo ou outro se quiser
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="login-wrapper">
      <div className="login-card text-center">
        <h2>Cadastro realizado com sucesso! 🎉</h2>
        <p className="mt-3">Seja bem-vindo ao sistema!</p>

        <Link to="/" className="btn btn-primary mt-4 w-100">
          Ir para Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
