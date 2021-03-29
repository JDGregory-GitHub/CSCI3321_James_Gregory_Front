//Global Variables
var gameOver = false;
var spots = 0;
var currentPlayer= 'X';

function placeMarker(spotId){
    //If the game is NOT over
    if(!gameOver){
        //Get spot by Id
        var spot = document.getElementById(spotId);

        //If empty place marker
        if(spot.innerHTML == ""){
            spot.innerHTML = currentPlayer;
            spots++;
            //If player won 
            if(currentPlayerWon()){
                updateGameStatus();
            }
            else{
                if(currentPlayer == 'X')
                    currentPlayer = 'O';
                else
                    currentPlayer = 'X';
                    updateGameStatus();
            }
        }
    }
}//end placeMarker   

function currentPlayerWon(){
    //Get each spot using getElementById()
    s1 = document.getElementById('s1');
    s2 = document.getElementById('s2');
    s3 = document.getElementById('s3');
    s4 = document.getElementById('s4'); 
    s5 = document.getElementById('s5');
    s6 = document.getElementById('s6');
    s7 = document.getElementById('s7');
    s8 = document.getElementById('s8');
    s9 = document.getElementById('s9');
    
    //If the player won 
    if (   
        (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML && s2.innerHTML != "") 
        || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML && s5.innerHTML != "")
        || (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML && s8.innerHTML != "") //checks 3rd row
        || (s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML && s4.innerHTML != "") //checks 1st column
        || (s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML && s5.innerHTML != "") //checks 2nd column
        || (s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML && s6.innerHTML != "") //checks 3rd column
        || (s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML && s5.innerHTML != "") //checks one diagonal
        || (s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML && s5.innerHTML != "")//checks other diagonal
        )
            
        gameOver = true; 


    if(!gameOver && spots == 9)
        gameOver = true; 

    return gameOver;
}//end currentPlayerWon

function updateGameStatus(){
    var statusBoard = document.getElementById('status');
    if (gameOver){
        //if it's not a tie, display winner
        if(spots != 9)
            statusBoard.innerHTML = "Winner is " + currentPlayer + "!";
        //else display tie 
        else
            statusBoard.innerHTML = "It is a tie.";

    }
    else{
        //prompt user to make move
        statusBoard.innerHTML = "Make a move Player " + currentPlayer;
    }
}//end updateGameStatus