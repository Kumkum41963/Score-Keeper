// Let's create some functions that will work on clicking of player 1 , 2 and reset
// NOTE : e.target helps in access the element that has been trigerred
// e here is event that is an object  
// selecting buttons
const p1Btn = document.querySelector('.btn-player1');
const resetBtn = document.querySelector('.btn-reset');
const p2Btn = document.querySelector('.btn-player2');

// selecting score displays
const p1Score = document.querySelector('.player1');
const p2Score = document.querySelector('.player2');

// selecting the win score 
const winScoreSelectBtn=document.querySelector('#win-score');

// We will make two separate counters for players because we don't want that if one finishes then the next starts from that end point , which happens if we take same variable for both
// To keep a track of score of p1 we take a changing variable [let since it will be changing frequently]
let p1ScoreCount = 0;
// To keep a track of score of p2 we take a changing variable [let since it will be changing frequently]
let p2ScoreCount = 0;

// We need to make sure that we can not change our win score in between
// To keep a track of when my game needs to stop 
// We want to be able to range btw dff. win scores
let winningScore = 5;

// updating win score and resetting too
function changeWinScore(e){
    // update the value 
    winningScore=parseInt(e.target.value);
    // then reset : start from start to avoid value range
    reset();
};

// updating players score count and color when they win or loose
function displayScoreCount(e) {
    if(p1ScoreCount === winningScore || p2ScoreCount === winningScore){
        // change color -> green -> win
        // change color -> red -> loose
        // and we do this before we exit the game
        if(p1ScoreCount>p2ScoreCount){
            p1Score.classList.add('winner');
            p2Score.classList.add('looser');
        }
        else{
            p1Score.classList.add('looser');
            p2Score.classList.add('winner');
        }
        // exit game
        return;
    }
    if (e.target === p1Btn) {
        p1ScoreCount += 1;
        p1Score.textContent = p1ScoreCount;
    }
    else if (e.target === p2Btn) {
        p2ScoreCount += 1;
        p2Score.textContent = p2ScoreCount;
    }
    // so we will keep reset out for several reasons
    // first being we need to callback in win fxn also and it is kind of independent of my displayscore so better out
};

// We will set both score count for p1 and p2 to 0 whenever we click reset btn
function reset(e){
        p1ScoreCount = 0;
        p2ScoreCount = 0;
        // .textContent adds text to inner html of this span [check score.html]
        p1Score.textContent = p1ScoreCount;
        p2Score.textContent = p2ScoreCount;
        // reset colors to original too
        p1Score.classList.remove('winner','looser');
        p2Score.classList.remove('winner','looser');
};

winScoreSelectBtn.addEventListener('change',changeWinScore)
p1Btn.addEventListener('click', displayScoreCount);
p2Btn.addEventListener('click', displayScoreCount);
resetBtn.addEventListener('click', reset);


