'use strict';

const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1')
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0')
const current1el = document.getElementById('current--1')

const diceel = document.querySelector('.dice')
const btnnew = document.querySelector('.btn--new')
const btnroll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')


score0el.textContent = 0;
score1el.textContent = 0;
diceel.classList.add('hidden')

const score = [0,0];
let currscore = 0;
let activeplayer = 0;
let playing = true;

const switchplayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currscore=0;
    activeplayer = activeplayer === 0 ? 1 : 0;

    player0el.classList.toggle('player--active')
    player1el.classList.toggle('player--active')
}

btnroll.addEventListener('click',function(){
    if(playing){

    

    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    if(dice != 1){
        currscore += dice;
        document.getElementById(`current--${activeplayer}`).textContent=currscore;
    }else{
       switchplayer();

    }
}
})

btnhold.addEventListener('click',function(){
    if(playing){

    

    score[activeplayer] +=currscore;
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];

    if(score[activeplayer]>=100){
        playing=false;
        diceel.classList.add('hidden');

        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');

    }else{

    switchplayer();
      
    }
}
})
btnnew.addEventListener('click',function(){
    score0el.textContent=0;
    score1el.textContent=0;
    current0el.textContent=0;
    current1el.textContent=0;

    player0el.classList.remove('player--winner')
    player1el.classList.remove('player--winner')

    player0el.classList.add('player--active')
    player1el.classList.remove('player--active')
    diceel.classList.add('hidden')

})
