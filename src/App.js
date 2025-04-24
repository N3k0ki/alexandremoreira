import React from "react";
import "./App.css";
import Button from "./components/button";
import doctorImage from "./assets/dr-alexandre.png"; // troque pelo nome certo
import video1 from "./assets/video1.mp4"

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <li>ESPECIALIDADES</li>
          <li>CONSULTAS</li>
          <li>CONTATO</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Dr. Alexandre</h1>
          <h2>ORTOPEDISTA ESPECIALIZADO EM COLUNA E JOELHO</h2>
          <p>
            Tratamentos ortopédicos baseados em experiência, técnica e atenção
            verdadeira ao paciente. Aqui você encontra diagnóstico preciso,
            escuta qualificada e o cuidado que seu corpo merece.
          </p>
          <Button >AGENDAR CONSULTA</Button>
          <div className="hero-image mobile">
            <img src={doctorImage} alt="Dr. Alexandre" />
          </div>
        </div>
        <div className="hero-image">
          <img src={doctorImage} alt="Dr. Alexandre" />
        </div>
      </section>

      <section className="services">
        <h3>OUR SERVICES</h3>
        <div className="service-items">
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/1150/1150380.png" alt="Icon1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/883/883407.png" alt="Icon2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/1057/1057228.png" alt="Icon3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <section className="video-section">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={video1} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        <div className="blue-overlay">
          <h1>Bem-vindo ao Projeto</h1>
          <p>Essa é uma seção com vídeo de fundo e conteúdo centralizado.</p>
        </div>

      </section>
      <section className="videoyoutube">
      <p className="video-text">
        Descubra agora: o vídeo que vai mudar sua forma de ver o mundo!
      </p>
      <div className="video-wrapper">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/Y0kZvFw2Y3k?si=zMSJcChDT_kCdCzL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <section className="azul">
      <div className="caixa-do-texto">
        <p>"Um anjo que cuida dos nossos ossos e músculos, devolvendo-nos a liberdade de movimento."</p>
      </div>
    </section>
    </div>
  );
}

export default App;
