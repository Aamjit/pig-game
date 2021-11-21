'use strict';
//      selecting elements
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

//      setting value of element

const score = [ 0, 0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

//      implementing new button

let currentScore = 0;
let currentPlayer = 0;

btnRoll.addEventListener('click', function(){
    //1. generate random number
    const diceValue = Math.trunc(Math.random()*6+1);
    //2. display dice
    dice.classList.remove('hidden');
    dice.src = `./assets/dice-${diceValue}.png`;
    //3. check if 1, then player1 else continue
    if( diceValue !== 1){
        //  add score to score of the player
        currentScore += diceValue;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        
    }else{
        //  switch to player1
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        currentScore = 0;
        currentPlayer = currentPlayer === 0? 1 : 0;
        player0el.classList.toggle('.player--active');
        player1el.classList.toggle('.player--active');
    }

})