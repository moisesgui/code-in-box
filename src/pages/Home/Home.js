import React from "react";
import logo from '../../assets/imagens/logo01.png'
import './Home.scss';


export const Home = () => {

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue text-gray-50 shadow-xl">
        <div className="container flex flex-wrap mx-auto p-4 justify-between flex-col md:flex-row items-center">
          <a href="#"  className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
            <img src={logo} alt="code-logo" width={220} />
          </a>
          <form className="">
            <input
              className="bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 w-full md:w-auto"
              placeholder="Search"
              type="text"
            />
            <button className="inline-flex items-center text-blue font-semibold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 rounded-lg">
              Search
            </button>
          </form>
          <nav className="">
            <a href="#" className="mr-5 hover:text-white">Home</a>
            <a href="#" className="mr-5 hover:text-white">About</a>
            <a href="#" className="mr-5 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 pt-16 lg:pt-24 pb-8">
          <h2 className="text-4xl font-bold mb-8">Welcome to My Site</h2>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.

          </p>
        </div>
        <div className="container mx-auto px-4 pt-16 lg:pt-24 pb-8">
          <h2 className="text-4xl font-bold mb-8">Welcome to My Site</h2>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            
          </p>
        </div>
        <div className="container mx-auto px-4 pt-16 lg:pt-24 pb-8">
          <h2 className="text-4xl font-bold mb-8">Welcome to My Site</h2>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus eleifend nisi, vitae dictum nisi facilisis at. Donec eget
            libero leo. Donec pretium urna vel sem lobortis ullamcorper.
            
          </p>
        </div>
      </div>
    </div>
  );
}