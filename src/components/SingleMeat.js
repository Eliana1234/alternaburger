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
import recipe from '../Recipe_take3.png'
import beyond from '../beyondburger.png'
import restuarant from '../restuarant.png'


export class Meat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          allItems: false,
          selectedItem: this.props.meat,
          value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
    this.setState({
    value: event.target.value
    })
    event.preventDefault();
    }
    
  render() {
      console.log('STATE', this.state)
    if (this.state.value === ''){
    return (
        <Wrapper>
           <div className="page">
            <div className="meatParent">
                <div className="thisPageImage">
                    <img src={this.state.selectedItem} alt="selectedItem"/>
                  </div>
            <div className="center-text">
                  <div className="button-group">
                    <button type="submit" value="Grocery it" onClick={this.handleSubmit}>Buy it</button>
                    <button type="submit" value="Make it" onClick={this.handleSubmit}>Make it</button>
                    <button type="submit" value="Buy it" onClick={this.handleSubmit}>Eat it now</button>
                  </div>
                  <div className="vegan">
                </div>
           </div>
            </div>
          </div>
      </Wrapper>
     )
    }
   else if (this.state.value === "Grocery it"){
    return (
      <Wrapper>
         <div className="page">
          <div className="meatParent">
              <div className="thisPageImage">
                  <img src={this.state.selectedItem} alt="selectedItem"/>
                </div>
          <div className="center-text">
                <div className="button-group">
                  <button type="submit" value="Grocery it" onClick={this.handleSubmit}>Buy it</button>
                  <button type="submit" value="Make it" onClick={this.handleSubmit}>Make it</button>
                  <button type="submit" value="Buy it" onClick={this.handleSubmit}>Eat it now</button>
                </div>
                <div className="vegan">
                <img src={beyond} alt="recipe"/>
              </div>
         </div>
          </div>
        </div>
    </Wrapper>
   )
   }
   else if (this.state.value === "Buy it"){
    return (
      <Wrapper>
         <div className="page">
          <div className="meatParent">
              <div className="thisPageImage">
                  <img src={this.state.selectedItem} alt="selectedItem"/>
                </div>
          <div className="center-text">
                <div className="button-group">
                  <button type="submit" value="Grocery it" onClick={this.handleSubmit}>Buy it</button>
                  <button type="submit" value="Make it" onClick={this.handleSubmit}>Make it</button>
                  <button type="submit" value="Buy it" onClick={this.handleSubmit}>Eat it now</button>
                </div>
                <div className="vegan">
                <img src={restuarant} alt="recipe"/>
              </div>
         </div>
          </div>
        </div>
    </Wrapper>
   )
   }
   else if (this.state.value === "Make it"){
    return (
      <Wrapper>
         <div className="page">
          <div className="meatParent">
              <div className="thisPageImage">
                  <img src={this.state.selectedItem} alt="selectedItem"/>
                </div>
          <div className="center-text">
                <div className="button-group">
                  <button type="submit" value="Grocery it" onClick={this.handleSubmit}>Buy it</button>
                  <button type="submit" value="Make it" onClick={this.handleSubmit}>Make it</button>
                  <button type="submit" value="Buy it" onClick={this.handleSubmit}>Eat it now</button>
                </div>
                <div className="vegan">
                <img src={recipe} alt="recipe"/>
              </div>
         </div>
          </div>
        </div>
    </Wrapper>
   )
   }
  }
}

    
const Wrapper = styled.div`

.page {
  background-color: #282c34;
}

.center-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 10px 900px 10px;
}

.meatParent .thisPageImage img:hover {
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

.button-group {
    display: flex;
    justify-content: space-between;
  }

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

  .vegan {
    font-family: 'Helvetica Neue';
    font-weight: 200;
    font-size: 25px;
    color: white;
    border-radius: 10%;
    height: 25px;
    width: 25px;
}


button:hover {
    background-color: #006400
}


.meatParent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 20px 20px 20px;
}

.meatParent .thisPageImage{
    width: 250px; 
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .meatParent .thisPageImage img{
    width: 100%; 
    height: auto;
  }

// .meatParent div{
//   width: 250px; 
//   height: 250px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }



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
  top:25%;
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
