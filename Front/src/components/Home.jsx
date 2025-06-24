// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Login.css";
import Navbar from "./Navbar"; // ✅ Aqui a navbar é usada só no Home

function Home() {
  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card text-center">
          <h2>Cadastro realizado com sucesso! 🎉</h2>
          <p className="mt-3">Seja bem-vindo ao sistema!</p>

          <Link to="/login" className="btn btn-primary mt-4 w-100">
            Ir para Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
