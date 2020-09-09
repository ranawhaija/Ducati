import React from 'react';
import './App.css';
import worldWide from './assets/images/world-wide.png';
import Slider from './components/Slider/Slider';
import motocyclesData from './data/Data';


function App() {
  return (
    <div className="app">
      <header className="app-header relative py-4 px-8 lg:py-16 lg:px-32 flex flex-row justify-between items-center">
        <div className="menu-icon-container">
          <svg className="h-10 w-10 stroke-current text-white hover:text-red-600 lg:h-12 lg:w-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="description-container flex flex-row items-center">
          <img className="w-6 h-5 mx-2" src={worldWide} />
          <div className="text text-white content-center text-xs lg:text-base">INTERNATIONAL WEBSITE<span className="mx-1 lg:mx-4">|</span>MY DUCATI </div>
        </div>

      </header>
      <main>
        <Slider slidersData={motocyclesData}></Slider>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
