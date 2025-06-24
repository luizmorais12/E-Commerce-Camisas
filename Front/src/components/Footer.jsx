import React from "react";
import "../assets/styles/Footer.css"; // ajuste o caminho se necessário
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTEÚDO */}
        <div className="footer-col">
          <h4>CONTEÚDO</h4>
          <ul>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Minha Conta</a></li>
            <li><a href="#">Termos LGPD</a></li>
          </ul>
        </div>

        {/* CATEGORIAS */}
        <div className="footer-col">
          <h4>CATEGORIAS</h4>
          <ul>
            <li><a href="#">Roupas</a></li>
            <li><a href="#">Calçados</a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Esporte</a></li>
            <li><a href="#">Kits ESZE</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Promoção</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        {/* PAGAMENTO */}
        <div className="footer-col payments">
          <h4>PAGUE COM</h4>
          <img src="/assets/imgs/cartoes.png" alt="Formas de pagamento" />
        </div>

        {/* SELOS */}
        <div className="footer-col selos">
          <h4>SELOS</h4>
          <img src="/assets/imgs/selo-seguro.png" alt="Selo de segurança" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
