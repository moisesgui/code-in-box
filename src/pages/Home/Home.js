import React from "react";

import { Slider } from "../../shared/components/slider/Slider";
import logoCode from '../../assets/imagens/logo01.png';
import burgerMenu from '../../assets/imagens/burger-menu.png';
import bannerImg from '../../assets/imagens/banner-desktop.png';
import './Home.scss';


export const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="header__content">
          <div className="header__logo-container">
            <button href="#" className="md:hidden js-burgerMenu">
              <img src={burgerMenu} className="logo-burger" alt="code-logo" width={40} />
            </button>
            <a href="#" className="header_content--logo">
              <img src={logoCode} alt="code-logo" width={200} />
            </a>
          </div>
          <form>
            <input
              placeholder="Buscar..."
              type="text"
            />
            <button className="search-button">
              Buscar
            </button>
          </form>

          <nav className="hidden md:flex">
            <a href="#" className="mr-5 hover:text-yellow-500">Home</a>
            <a href="#" className="mr-5 hover:text-yellow-500">Sobre</a>
            <a href="#" className="mr-5 hover:text-yellow-500">Contato</a>
          </nav>
        </div>
      </header>

      <section className="banner">
        <div className="banner--mini">
          <p>Os melhores cursos de desenvolvimento, você só encontrar aqui!</p>
        </div>
        <div className="banner--desktop">
          <img src={bannerImg} alt="banner-topo" />
        </div>
      </section>

      <section className="container mx-auto">
        <div className="hero">
          <h1>Aprenda a ser um programador mais do que completo</h1>
          <p>Aprenda de forma prática com mentores experts do mercado a desenhar e produzir softwares do início ao fim, com conhecimentos de Front-End e Back-End.</p>
          <a href="#">
            Saber mais
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </section>

      <section className="carousel-slick">
        <div>
          <Slider />
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__container--content">
            <h2>Inscreva-se em nossa newsletter</h2>
            <p>Receba notificações das melhores ofertas da nossa plataforma e fique por dentro dos assuntos, cursos e todas as novidades.</p>
            <form action="#">
              <div className="form__content">
                <div className="relative w-full">
                  <div className="form__content--svg_container">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <input placeholder="Digite seu email" type="email" id="email" required></input>
                </div>
                <div>
                  <button type="submit">Inscreva-se</button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-50 newsletter-form-footer dark:text-gray-300">Preocupamo-nos com a proteção dos seus dados. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Leia nossa política de privacidade</a>.</div>
            </form>
          </div>
        </div>
      </section>

      <section className="carousel-slick">
        <div className="py-10">
          <Slider />
        </div>
      </section>
    </div>
  );
}