import React from "react";
import burger from '../burger-removebg-preview_smol.png'
import mac from '../macandcheese-removebg-preview.png'
import pizza from '../pizza-removebg-preview.png'
import breakfast from '../BreakfastSandwhich-removebg-preview.png'
import icecream from '../baconicecream-removebg-preview.png'
import lasagna from '../meatylasagna-removebg-preview_crop.png'
import styled from "styled-components";
import SingleMeat from './SingleMeat'
import alternalogo from '../Alterna_Logo_New.jpeg'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Popup from './Popup'; 

export class Meat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allItems: true,
      selectedItem: [],
      showPopup: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.togglePopup = this.togglePopup.bind(this)
  }

  handleSelect(item) {
    this.setState({
      allItems: false, 
      selectedItem: item
    });
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
   }  

  render() {
  if (this.state.allItems){
      return (
      <Wrapper>
      <div className="page">
    <div className="everything">
    <div className="popblock">
      <button className="about" onClick={this.togglePopup.bind(this)}> About</button>  
      <div>  
                {this.state.showPopup ?  
                  <Popup  
                  text="Inspired by studies that show that eating fewer animal products per week can dramatically 
                  reduce our carbon footprint, AlternaBurger is an interactive plant-based resource built to serve you satisfying meals and instant gratification. Click 
                  the food you want to get started!"
                  closePopup={this.togglePopup.bind(this)}  />  : null  }  
        </div> 
    </div>
   <div className="main-content">
      <div className="heading">
        <div className="company">
            <h1>AlternaBurger</h1><p>Plant-based alternatives, even more delicious</p>
        </div>
            <h1 className="question">What are you in the mood for today?</h1>
        </div>
       <div className="meatParent">
                <div onClick={() => this.handleSelect(burger)}><img src={burger} alt="cheeseburger"/></div>
                <div onClick={() => this.handleSelect(mac)}><img src={mac} alt="mac" /></div>
                <div onClick={() => this.handleSelect(pizza)}><img src={pizza} alt="pizza" /></div>
                <div onClick={() => this.handleSelect(breakfast)}><img src={breakfast} alt="breakfast" /></div>
                <div onClick={() => this.handleSelect(icecream)}><img src={icecream} alt="breakfast" /></div>
                <div onClick={() => this.handleSelect(lasagna)}><img src={lasagna} alt="breakfast" /></div> 
      </div>
      </div>
      </div>
      </div>
      </Wrapper>
          )
      }
    else {
      return (
        <div key="selectedItem">
        <SingleMeat meat={this.state.selectedItem}/>
        </div>
        )
       }
      } 
    }

    
const Wrapper = styled.div`

.page {
  background-color: #282c34;
}

.company {
  // border: 1px solid blue;
  // text-align: left;
  // color: #FAFAD2;
  // color: black;
  // background-color: white;
  // font-family: 'Helvetica Neue';
  // font-size: 16px;
  margin: auto;
  width: 100%;
  top: 0%
  padding: 10px 10px 10px 10px;
  border-radius: 5%;
  // position: absolute; 
  
}

.everything {
  display: flex; 
  flex-direction: column;
}

.popblock {
  display: flex; 
}

.main-content {
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
}

.heading {
  color: white;
  // display: flex; 
  // flex-direction: column;
}


.alltogether {
  // display: flex; 
  // flex-direction: column;
}

.title {
  // display: flex; 
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;

}


img:hover {
  animation-name: pulse;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

// img:hover {
//   animation-duration: 20s;
//   animation-name: bounceIn;
// }

// .burger {
//   animation-duration: 20s;
//   animation-name: bounceIn;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .burger {
//     animation: App-logo-spin infinite 20s linear; 
//   }
// }


button {
  font-family: 'Helvetica Neue';
  font-weight: 200;
  font-size: 25px;
  background-color: rgba(42, 187, 155, 1);
  color: black;
  margin: 0px 10px 0px 10px;
  width: 100px;
  border-radius: 10%;
}

.about {
  font-family: 'Helvetica Neue';
  font-weight: 200;
  font-size: 25px;
  background-color: rgba(42, 187, 155, 1);
  color: black;
  margin: 0px 10px 0px 10px;
  width: 75px;
  border-radius: 10%;
}

.meatParent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 150px 150px 150px;
} 

.meatParent div{
  width: 250px; 
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meatParent div img{
  width: 100%; 
  height: auto;
}

.question {
  font-family: 'Helvetica Neue';
  font-weight: 400;
  font-size: 50px;
  color: white;
  // position: absolute;
  // self-align: center;
  // text-align: center;
  // background-color: 
  // background: rgba(255,165,0,0.75);
  // width: 75%;
  // top: 30%;
  // transform:translateY(-50%);
  margin: 0;



  // background-color: #EEEEEE;
  // position: absolute;
  // align-self: center;
  // z-index:100;
}
}
`;   

export default Meat
