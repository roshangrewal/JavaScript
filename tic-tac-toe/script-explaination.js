/*
Tic-Tac-Toe is about Os and Xs or noughts and crosses . 
The rule of the game is very simple. On a 3x3 grid, a player has to match 3 consecutive Os or Xs horizontally/vertically/diagonally.
*/

var origBoard; //keep track of X and O. what's in each square board 
const huPlayer = 'O'; //human player 
const aiPlayer = 'X'; //ai player
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]; //array of arrays for winning combination 

const cells = document.querySelectorAll('.cell'); //select all the cell class from html
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none"; //setting display to none whenever startGame() fn will be called
    origBoard = Array.from(Array(9).keys()); //creating array from 0 to 8 using Array.from method
    // console.log(origBoard);
	for (var i = 0; i < cells.length; i++) { //iterate upto cells length
		cells[i].innerText = ''; //set to nothing
		cells[i].style.removeProperty('background-color'); //remove bgcolor to default each time when game start
		cells[i].addEventListener('click', turnClick, false); //calling turnClick fn 
	}
}

function turnClick(square) {
    // console.log(square.target.id); //by clicking in box it will return index value
    
	if (typeof origBoard[square.target.id] == 'number') { //later-gameWin: it will check that neither huPlayer or aiPlayer have played on that spot
		turn(square.target.id, huPlayer) //bcs its human player playing his/her turn
        if (!checkTie()) turn(bestSpot(), aiPlayer); //later-gameWin: if game is not tie then turn fn will be call with 1 fn as a parameter and aiPlayer
	}
}

function turn(squareId, player) { //turn fn takes 2 parameter 
	origBoard[squareId] = player; //player who takes a turn
	document.getElementById(squareId).innerText = player; //which is defined in td element id
	let gameWon = checkWin(origBoard, player) //origBoard is an array which shows o n X on the board
	if (gameWon) gameOver(gameWon) //passing gameWon variable 
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => //reduce method is going through every element of board array and do something
		(e === player) ? a.concat(i) : a, []); //a is accumlator, e is the element in board array, and i is index. 
	let gameWon = null; //gamewon is initialized null. which means nothing. blank
	for (let [index, win] of winCombos.entries()) { //it will go through each index of winCombos entries | for the first time index will be 0 of winCombos which is [0, 1, 2] are set as win 
		if (win.every(elem => plays.indexOf(elem) > -1)) { //win.every means we will go through every element in the win. has the player played in every spot that count as a win for that win-element 
			gameWon = {index: index, player: player}; //now we know at which winCombos player won at and we know which player has won
			break; //breaking the function
		}
	}
	return gameWon; //if someone will win then only it will return game won otherwise in line 53 null is already assigned to it
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) { //index of the wining combo
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "#4d4c7d" : "#eb4559"; //highlight the win combo and set bgcolor for the highlighted boxes depending upon the player who have won
	}
	for (var i = 0; i < cells.length; i++) { //for all the cell, so we cannot able to click those cell
		cells[i].removeEventListener('click', turnClick, false); //remove eventListner so that turnClick fn won't work anymore
	}
	declareWinner(gameWon.player == huPlayer ? "You Win!" : "Loser, Computer Won!"); //You win or lose will be paased to declareWinner fn as an argument to who parameter.
}

function declareWinner(who) { //who is a parameter. whenever fn will be called with arguments it will be passed as it is.
	document.querySelector(".endgame").style.display = "block"; //style was set to none but now it is going to be displayed block 
	document.querySelector(".endgame .text").innerText = who; //it will be print whatever argument has been paased to the function 
}

function emptySquares() {
	return origBoard.filter(s => typeof s == 'number'); //so we are going to filter every element of origBoard array to see if the typeof that element is number. if typeof is number then we are going to return that
}

function bestSpot() {
	return emptySquares()[0]; //fill the first element of emptySquare
}

function checkTie() {
	if (emptySquares().length == 0) { //if length is zero which means all boxes are filled up
		for (var i = 0; i < cells.length; i++) { //bcs we are going to do something in every cells in the tictactoe board
			cells[i].style.backgroundColor = "#639a67"; //set bgcolor to something
			cells[i].removeEventListener('click', turnClick, false); //loop to remove eventListner so that user cannot click on anywhere bcs game is over
		}
		declareWinner("Tie Game!") //declare tie 
		return true; //return true bcs its true that game is tie
	}
	return false; //if - if statement is false we will return false
}