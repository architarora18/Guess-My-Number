'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score= 10;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

   
    // when there is no guess
    if(!guess){
        document.querySelector('.message').textContent='🤬 no number!!';
    }
    // when the guess is correct
    else if(guess=== secretNumber){
        document.querySelector('.message').textContent='🎉😉Correct Number!!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // when the guess is too high
    else if(guess> secretNumber){
        if(score>1){
        document.querySelector('.message').textContent='👆Too high!!';
        // document.querySelector('body').style.backgroundColor='#919c35';
        score--;
        document.querySelector('.score').textContent= score;
        } else{
        document.querySelector('.message').textContent='😂You loose the game!!';
        document.querySelector('.score').textContent= 0;

        document.querySelector('body').style.backgroundColor='#e8171e';
        }
    }
    // when the guess is too low
    else if(guess< secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='👇Too low!!';
            // document.querySelector('body').style.backgroundColor='#168794';
            score--;
            document.querySelector('.score').textContent= score;
            } else{
            document.querySelector('.message').textContent='😂You loose the game!!';
            document.querySelector('.score').textContent= 0;

            document.querySelector('body').style.backgroundColor='#e8171e';
            }
    }
});

    // to start the game again
    document.querySelector('.again').addEventListener('click',function(){    
    secretNumber = Math.trunc(Math.random()*20)+1;
    score= 10;
    document.querySelector('.message').textContent='Start guessing Again...😍';
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor='#117a8c';
    // document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    });