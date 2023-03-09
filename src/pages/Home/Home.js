import React from "react";


import logoCode from '../../assets/imagens/logo01.png';
import burgerMenu from '../../assets/imagens/burger-menu.png';
import { ProductCard } from "../../shared/components/productCard/ProductCard";
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="header__content">
          <div class="header__logo-container">
          <button href="#"  className="md:hidden js-burgerMenu">
            <img src={burgerMenu} alt="code-logo" width={36} />
          </button>
          <a href="#"  className="header_content--logo">
            <img src={logoCode} alt="code-logo" width={220} />
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
            <a href="#" className="mr-5 hover:text-white">Home</a>
            <a href="#" className="mr-5 hover:text-white">Sobre</a>
            <a href="#" className="mr-5 hover:text-white">Contato</a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto">
          <div className="hero">
              <h1>Aprenda a ser um programador mais do que completo</h1>
              <p>Aprenda de forma prática com mentores experts do mercado a desenhar e produzir softwares do início ao fim, com conhecimentos de Front-End e Back-End.</p>
              <a href="#">
                  Learn more
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </section>

      <section className="container mx-auto">
        <div className="product-card-container">
          <ProductCard />
        </div>
      </section>
    </div>
  );
}