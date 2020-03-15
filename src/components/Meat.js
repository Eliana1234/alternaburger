import React from "react";
import burger from '../burger-removebg-preview_smol.png'
import mac from '../macandcheese-removebg-preview.png'
import pizza from '../pizza-removebg-preview.png'
import breakfast from '../BreakfastSandwhich-removebg-preview.png'
import icecream from '../baconicecream-removebg-preview.png'
import lasagna from '../meatylasagna-removebg-preview_crop.png'
import styled from "styled-components";
import SingleMeat from './SingleMeat'
import { TransitionGroup, CSSTransition } from "react-transition-group";

export class Meat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allItems: true,
      selectedItem: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {
    this.setState({
      allItems: false, 
      selectedItem: item
    });
  }

  render() {
  if (this.state.allItems){
      return (
      <Wrapper>
      <div className="page">
      <div className="heading">
        <h1>AlternaBurger</h1>
        <p>A search engine for plant based alternatives, even more delicious</p>
      </div>
            <div className="meatParent">
            <h1 className="question">What are you in the mood for today?</h1>
                <div className="burger" onClick={() => this.handleSelect(burger)}><img src={burger} alt="cheeseburger"/>
                </div>
                <div onClick={() => this.handleSelect(mac)}><img src={mac} alt="mac" /></div>
                <div onClick={() => this.handleSelect(pizza)}><img src={pizza} alt="pizza" /></div>
                <div onClick={() => this.handleSelect(breakfast)}><img src={breakfast} alt="breakfast" /></div>
                <div onClick={() => this.handleSelect(icecream)}><img src={icecream} alt="breakfast" /></div>
                <div onClick={() => this.handleSelect(lasagna)}><img src={lasagna} alt="breakfast" /></div> 
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

.heading {
  color: white;
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


.meatParent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 150px;
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
  position: absolute;
  self-align: center;
  text-align: center;
  // background-color: 
  // background: rgba(255,165,0,0.75);
  width: 75%;
  top: 30%;
  transform:translateY(-50%);
  margin: 0;



  // background-color: #EEEEEE;
  // position: absolute;
  // align-self: center;
  // z-index:100;
}
}
`;   

export default Meat
