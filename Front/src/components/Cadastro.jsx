import React, { useState } from "react";
import "../assets/styles/Login.css";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Simulação de cadastro:", form);

    navigate("/home"); // redireciona após o cadastro
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="text-center mb-4">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Nome completo</label>
            <input
              type="text"
              className="form-control"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label>Data de nascimento</label>
            <input
              type="date"
              className="form-control"
              name="dataNascimento"
              value={form.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label>CPF</label>
            <input
              type="text"
              className="form-control"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-success w-100" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
