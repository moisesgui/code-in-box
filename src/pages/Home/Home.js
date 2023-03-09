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

      <section>
          <div className="hero">
              <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
              <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-yellow-500 bg-blue rounded-lg hover:bg-yellow-600">
                  Learn more
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </section>

      <section>
        <div className="product-card-container">
          <ProductCard />
        </div>
      </section>
    </div>
  );
}