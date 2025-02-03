import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = {
    "♥" : "red" ,
    "♣": "black" ,
    "♠":"black",
    "♦":"red",
  }
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  function random(x){
    return Math.floor(Math.random() * x)
  }
  function getValue(){
    return random(values.length)
  }
  function getCard(){

    let cardValue = getValue();
    let clubKeys = Object.keys(suits);
    let index = random(clubKeys.length);
    let suit = clubKeys[index];
    let color = suits[suit];

    let cardItem = document.getElementById("item");
    let clubLeft = document.getElementById("club-l");
    let clubRight = document.getElementById("club-r");

    cardItem.textContent = values[cardValue]
    clubLeft.textContent = suit
    clubRight.textContent = suit
   
    if (color === "red" ){
      cardItem.style.color = "red"
      clubLeft.style.color = "red"
      clubRight.style.color = "red"
    }
    else{
      cardItem.style.color = "black"
      clubLeft.style.color = "black"
      clubRight.style.color = "black"
    }
  }
  getCard();
};
