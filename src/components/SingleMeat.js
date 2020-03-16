import React from "react";
import burger from '../burger-removebg-preview_smol.png'
import mac from '../macandcheese-removebg-preview.png'
import pizza from '../pizza-removebg-fixed.png'
import breakfast from '../BreakfastSandwhich-removebg-preview.png'
import icecream from '../baconicecream-removebg-fixed.png'
import lasagna from '../meatylasagna-removebg-fixed.png'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import recipe from '../Recipe_take3.png'
import beyond from '../beyondburger.png'
import restuarant from '../restuarant.png'
import Iframe from 'react-iframe'
import Meat from './Meat'



export class SingleMeat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          allItems: false,
          selectedItem: this.props.meat,
          value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this)
      }

    handleSubmit(event) {
    this.setState({
    value: event.target.value
    })
    event.preventDefault();
    }

    handleGoBack(event){
      this.setState({
        allItems: true
      })
     event.preventDefault();
    }
    
  render() {
    let urlObj = {}
    if (this.state.selectedItem === burger){
      urlObj.make = "https://tasty.co/recipe/the-best-ever-vegan-burger"
      urlObj.buy = "https://www.theorganicgrill.com/burger-challenge"
      urlObj.grocery = "https://www.beyondmeat.com/products/the-beyond-burger/"
    }
    if (this.state.selectedItem === mac){
      urlObj.make = "https://www.ambitiouskitchen.com/easy-vegan-mac-and-cheese/"
      urlObj.buy = "https://lazygirlvegan.com/2018/02/26/vegan-nyc-where-to-find-the-best-creamiest-vegan-mac-cheese-in-new-york-city/"
      urlObj.grocery = "https://www.amys.com/our-foods/rice-mac-cheeze-gluten-free-dairy-free"
    }
    if (this.state.selectedItem === pizza){
      urlObj.make = "https://www.thecuriouschickpea.com/vegan-pepperoni-pan-pizza/"
      urlObj.buy = "https://www.doordash.com/store/screamers-pizzeria-brooklyn-55728/"
      urlObj.grocery = "https://daiyafoods.com/our-foods/gluten-free-pizza/meatless_pepperoni/"
    }
    if (this.state.selectedItem === breakfast){
      urlObj.make = "https://www.epicurious.com/recipes/food/views/the-best-vegan-tofu-breakfast-sandwich"
      urlObj.buy = "https://www.orchardgrocer.com/"
      urlObj.grocery = "https://www.amys.com/our-foods/breakfast-burrito"
    }
    if (this.state.selectedItem === icecream){
      urlObj.make = "https://tofurky.com/recipes/maple-bacon-ice-cream/"
      urlObj.buy = "https://www.livekindly.co/salt-straw-ice-cream-chain-vegan-bacon-flavored-scoop-menu/"
      urlObj.grocery = "http://www.dreamplantbased.com/product/almond-dream-toffee-almond-fudge/"
    }
    if (this.state.selectedItem === lasagna){
      urlObj.make =  "http://www.everydayveganfood.com/meaty-vegan-lasagna/"
      urlObj.buy = "https://www.tripadvisor.com/LocationPhotoDirectLink-g60763-d795039-i79466508-Blossom_Vegan_Restaurant-New_York_City_New_York.html"
      urlObj.grocery = "https://www.amys.com/our-foods/vegetable-lasagna-with-daiya-cheeze-gluten-free-dairy-free"
    }
      console.log('STATE', this.state)
  if (this.state.allItems === true){
        return (
        <div>
          <Meat />
        </div>
         )
       }
    else if (this.state.value === ''){
    return (
        <Wrapper>
           <div className="page">
           <div className="heading">
          <div>
          <button type="submit" value="goBack" onClick={this.handleGoBack}>Back</button>
          </div>
           <div className="alternaburger_logo">
              {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
          </div>
          </div>
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
         <div className="heading">
          <div>
          <button type="submit" value="goBack" onClick={this.handleGoBack}>Back</button>
          </div>
           <div className="alternaburger_logo">
              {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
          </div>
          </div>
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
                <Iframe url={urlObj.grocery}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
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
         <div className="heading">
          <div>
          <button type="submit" value="goBack" onClick={this.handleGoBack}>Back</button>
          </div>
           <div className="alternaburger_logo">
              {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
          </div>
          </div>
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
                <Iframe url={urlObj.buy}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
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
         <div className="heading">
          <div>
          <button type="submit" value="goBack" onClick={this.handleGoBack}>Back</button>
          </div>
           <div className="alternaburger_logo">
              {/* <h1>AlternaBurger</h1>
               <p>A search engine for plant based alternatives, even more delicious</p> */}
          </div>
          </div>
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
                <Iframe url={urlObj.make}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
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

.heading {
  color: white; 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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

.alternaburger_logo {
  align-self: center; 
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

export default SingleMeat
