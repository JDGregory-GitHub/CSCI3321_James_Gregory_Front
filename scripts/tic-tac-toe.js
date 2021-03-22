//Global Variables
var gameOver = false;
var spots = 0;
var currentPlayer= 'X';

function placeMarker(spotId){
    //Check if the game is NOT over
    if(!gameOver()){
        //Get spot by spotId

        //Check if the spot is empty
            //If empty place marker by changing innerHTML of spot
            //Else depending on current player place X/O
        
            //Check if the current player has won the game
            //If yes, display message, gameOver = true
            //If tie, display message, gameOver = true & spots=9
            //If no, switch player, spots++

        //Else do nothing
    }
    else
        break;
    //Else do nothing
}

function currentPlayerWon(){
    //Get each spot using getElementById()
    //ex: s1 = document.getElementById('1');
    //s2, s3, s4, s5, s6, s7, s8, s9
    
    //Its true when new game starts so fix it
        //(s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTMl)
        // || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTMl)
        // || (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTMl)
    //Check 1st colum
        //s1, s4, s7
    //Check 2nd colum
        //s2, s5, s8
    //Check 3rd colum
    //Check 1st diagonal
    //Check 2nd diagonal

    //if(!gameOver)
        //if(spots == 9)
            //gameOver = true; 

    //retunr gameOver;
}