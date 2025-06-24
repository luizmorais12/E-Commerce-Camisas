import React from "react";
import "../assets/styles/Lancamentos.css";
import Footer from "./Footer"; // importação do rodapé

const Home = () => {
  const renderCard = (produto, index) => (
    <div className="card-produto" key={index}>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p className="preco">{produto.preco}</p>
      {produto.parcela && (
        <p className="parcelas">
          até <span>{produto.parcela}</span> sem juros
        </p>
      )}
      {produto.pix && (
        <p className="pix">
          ou <span>{produto.pix}</span> via Pix
        </p>
      )}
      <button>COMPRAR</button>
    </div>
  );

  return (
    <>
      <div className="page-container">
        {/* LANÇAMENTOS */}
        <section className="secao-produtos">
          <h2>LANÇAMENTOS</h2>
          <div className="cards-container">
            {[
              {
                nome: "CAMISETA OVERSIZED PRETA",
                preco: "R$ 69,99",
                parcela: "2x de R$ 34,99",
                pix: "R$ 66,49",
                imagem: "/assets/imgs/oversized.jpg",
              },
              {
                nome: "CAMISETA ADV CINZA ESTAMPA AMARELA",
                preco: "R$ 39,99",
                pix: "R$ 37,99",
                imagem: "/assets/imgs/adv-cinza.jpg",
              },
              {
                nome: "BERMUDA CARGO COM ELÁSTICO PRETA",
                preco: "R$ 79,99",
                parcela: "2x de R$ 39,99",
                pix: "R$ 75,99",
                imagem: "/assets/imgs/bermuda-cargo.jpg",
              },
              {
                nome: "CAMISETA FALADOR PASSA MAL PRETA",
                preco: "A PARTIR DE R$ 39,99",
                pix: "R$ 37,99",
                imagem: "/assets/imgs/falador.jpg",
              },
            ].map(renderCard)}
          </div>
        </section>

        {/* MAIS VENDIDOS */}
        <section className="secao-produtos">
          <h2>MAIS VENDIDOS</h2>
          <div className="cards-container">
            {[
              {
                nome: "CAMISA DE BOTÃO WORKSHIRT PRETA",
                preco: "R$ 99,99",
                parcela: "2x de R$ 49,99",
                pix: "R$ 94,99",
                imagem: "/assets/imgs/workshirt.jpg",
              },
              {
                nome: "MEIA ESZE PRETA ET",
                preco: "R$ 19,99",
                pix: "R$ 18,99",
                imagem: "/assets/imgs/meia-et.jpg",
              },
              {
                nome: "BERMUDA ELASTICO PRETA ZIPER NO BOLSO",
                preco: "R$ 59,99",
                pix: "R$ 56,99",
                imagem: "/assets/imgs/bermuda-ziper.jpg",
              },
              {
                nome: "CALÇA SHINO DE SARJA PRETA",
                preco: "R$ 129,99",
                parcela: "2x de R$ 64,99",
                pix: "R$ 123,49",
                imagem: "/assets/imgs/shino.jpg",
              },
            ].map(renderCard)}
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="secao-produtos">
          <h2>DESTAQUES</h2>
          <div className="cards-container">
            {[
              {
                nome: "CALÇA JOGGER PRETA TACTEL",
                preco: "R$ 99,99",
                parcela: "2x de R$ 49,99",
                pix: "R$ 94,99",
                imagem: "/assets/imgs/jogger-tactel.jpg",
              },
              {
                nome: "ROLAMENTOS SUPERCHARGER",
                preco: "R$ 9,99",
                imagem: "/assets/imgs/rolamento-supercharger.jpg",
              },
              {
                nome: "JOGO DE ROLAMENTOS ESZE",
                preco: "R$ 9,99",
                imagem: "/assets/imgs/rolamento-esze.jpg",
              },
              {
                nome: "CAMISA MANGA LONGA ESZE HEAVY DUTY SARJA PRETA",
                preco: "R$ 139,99",
                parcela: "2x de R$ 69,99",
                pix: "R$ 132,99",
                imagem: "/assets/imgs/heavy-duty.jpg",
              },
            ].map(renderCard)}
          </div>
        </section>

        {/* BERMUDAS */}
        <section className="secao-produtos">
          <h2>BERMUDAS</h2>
          <div className="cards-container">
            {[
              {
                nome: "BERMUDA ESPORTE COR CINZA GRAFFITE",
                preco: "R$ 79,99",
                parcela: "2x de R$ 39,99",
                pix: "R$ 75,99",
                imagem: "/assets/imgs/bermuda-cinza.jpg",
              },
              {
                nome: "BERMUDA ELASTICO PRETA ZIPER NO BOLSO",
                preco: "R$ 59,99",
                pix: "R$ 56,99",
                imagem: "/assets/imgs/bermuda-ziper.jpg",
              },
              {
                nome: "BERMUDA ESZE CARGO PRETA",
                preco: "R$ 89,99",
                parcela: "2x de R$ 44,99",
                pix: "R$ 85,99",
                imagem: "/assets/imgs/bermuda-cargo-esze.jpg",
              },
              {
                nome: "KIT 2 BERMUDAS E 1 REGATA",
                preco: "R$ 109,99",
                pix: "R$ 104,49",
                imagem: "/assets/imgs/kit-bermuda-regata.jpg",
              },
            ].map(renderCard)}
          </div>
        </section>
      </div>

      {/* ✅ RODAPÉ FORA DO CONTAINER, OCUPA 100% DA TELA */}
      <Footer />
    </>
  );
};

export default Home;
