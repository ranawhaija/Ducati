import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';
import ducatiLogo from '../../assets/images/ducati-logo.png';
import monester from '../../assets/images/Monster.png';

const renderSpecs = (specs) => {
  let arr = [];
  console.log(Object.keys(specs).length);
  Object.keys(specs).forEach(key => {
    console.log();
    return (
      arr.push(
        <div key={key} className="info my-3 flex flex-col">
          <label className="capitalize">{key}</label>
          <span>{specs[key]}</span>
        </div>)
    );
  })
  return arr;
}



const renderSliders = (slidersData) => {
  let arr = [];
  slidersData.forEach((data, i) => {
    return (
      arr.push(<div key={i} className="slider-data absolute flex flex-col items-center">
        <span className="moto-id text-white">{data.id}</span>
        <img className="absolute" src={data.image} />
        <div className="data-box mt-80 bg-white rounded flex flex-col">
          {renderSpecs(data.specs)}
          {console.log(data.specs)}
        </div>
      </div>)
    );
  });
  return arr;
}


const Slider = ({
  slidersData,
}) => {
  return (
    <div className="slider-component-container absolute top-0 flex flex-col justify-center">
      <div className="fixed-part flex flex-col items-center">
        <img width="110" className="ducati-logo mx-2" src={ducatiLogo} />
        <img width="322" className="ducati-logo mx-2 mt-12" src={monester} />
      </div>
      <div className="slider-data-container relative">
        {renderSliders(slidersData)}
      </div>
    </div>

  );
}
Slider.propTypes = {
  slidersData: PropTypes.array.isRequired
};

Slider.defaultProps = {
  slidersData: {}
};

export default Slider;
