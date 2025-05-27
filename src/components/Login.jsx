import React, { useState } from "react";
import "../assets/styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, senha });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="text-center">Bem-vindo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
        <p className="text-center mt-3">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
