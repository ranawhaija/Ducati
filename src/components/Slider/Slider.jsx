import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';
import ducatiLogo from '../../assets/images/ducati-logo.png';
import monester from '../../assets/images/Monster.png';
const pageIndicators = []; 
let selectedItem = 0;

export default class Slider extends Component {
  static propTypes = {
    slidersData: PropTypes.object.isRequired
  }

  static defaultProps = {
    slidersData: [],
  }
  constructor(props) {
    super(props);

this.state = {
  selectedItem: 0,
      // length: landingData.length
    };
    
  }
   onIndicatorClick =(index) => {
    console.log('here');
    selectedItem = index;
  
   }
   renderPageIndicator = (slidersData , oo)=> {
    let arr = [];
    slidersData.forEach((data,i) => {
      return (
        arr.push(<span key={`ind${i}`} style={{backgroundColor: data.color}} 
         onClick={()=>{ this.setState({selectedItem: i})}}
        className= {`indicator  shadow-md ${this.state.selectedItem === i ? 'selected' : ''}`}></span>)
      );
    });
    return arr;
  }
  
   renderSpecs = (specs) => {
    let arr = [];
    Object.keys(specs).forEach(key => {
      return (
        arr.push(
          <div key={key} className="info mb-2 flex flex-col">
            <label className="capitalize">{key}</label>
            <span>{specs[key]}</span>
          </div>)
      );
    })
    return arr;
  }
  renderSliders = (slidersData) => {
    let arr = [];
    slidersData.forEach((data, i) => {
      return (
        arr.push(<div  key={i}
         className={`slider-data absolute flex flex-col items-center ${this.state.selectedItem === i ? 'selected' : ''}`}>
           {/* opacity: this.state.selectedItem === i ? 1 : 0, */}
          <span className="moto-id text-white">{data.id}</span>
          <img  className="absolute" src={data.image} />
          <div className="data-box bg-white rounded flex flex-col">
            {this.renderSpecs(data.specs)}
          </div>
          
        </div>)
      );
    });
    return arr;
  }
  render() {
    const { data } = this.props;
    return (
      <div className="slider-component-container absolute top-0 flex flex-col justify-center">
        <div className="fixed-part flex flex-col items-center">
          <img   className="ducati-logo mx-1 my-4  lg:mx-2 lg:my-0 lg:w-25" src={ducatiLogo} />
          <img width="322" className="ducati-family mx-1 my-6 lg:mx-2 lg:mt-12" src={monester} />
        </div>
        <div className="slider-data-container relative">
          {this.renderSliders(this.props.slidersData)}
        </div>
        <div  className="indicators-container absolute flex justify-center items-center">
          {this.renderPageIndicator(this.props.slidersData)}
          </div>
        <div className="arrows absolute flex justify-between">
          <span onClick={()=>{ this.state.selectedItem === 0? this.setState({selectedItem: this.props.slidersData.length-1}):this.setState({selectedItem: this.state.selectedItem-1}) }}  className="prev"></span>
          <span onClick={()=>{ this.state.selectedItem === this.props.slidersData.length-1? this.setState({selectedItem: 0}):this.setState({selectedItem: this.state.selectedItem+1}) }} className="next"></span>

        </div>
      </div>
  
    );
  }
}




// const Slider = ({
//   slidersData, selectedI
// }) => {
//   return (
//     <div className="slider-component-container absolute top-0 flex flex-col justify-center">
//       <div className="fixed-part flex flex-col items-center">
//         <img width="110" className="ducati-logo mx-2" src={ducatiLogo} />
//         <img width="322" className="ducati-logo mx-2 mt-12" src={monester} />
//       </div>
//       <div className="slider-data-container relative">
//         {renderSliders(slidersData)}
//         <div  className="indicators-container absolute flex justify-center items-center">
//         {renderPageIndicator(slidersData, selectedI)}
//         </div>
//       </div>
//     </div>

//   );
// }
// Slider.propTypes = {
//   slidersData: PropTypes.array.isRequired,
//   selectedI: PropTypes.bool
// };

// Slider.defaultProps = {
//   slidersData: {},
//   selectedI: 0
  
// };

// export default Slider;
