$(document).ready(function() {

//When a box is clicked, an image appears	
	$('.box').click(function() {
		var col = parseInt(($(this).attr('class')).match(/[0-2]/gi)[0]);
		var row = parseInt(($(this).parent().attr('class')).match(/[0-2]/gi)[0]);
		if (board[row][col] == undefined) {
			$(this).html("<span class='marker'>" + ox[currentOX] + "</span>");
			board[row][col] = ox[currentOX];
			console.log(board[row][col]);
			console.log(board)
			nextOX();
		}
		result();
	})
	
	
	var nextOX = function() {
		if (currentOX == 0) {
			currentOX = 1;
		}
		else {
			currentOX = 0;
		}
	}
//the image that will appear loops through the ox array
	var currentOX = 0;
	var ox = ["X", "O"];

//each Array is a row with 3 arrays(columns)
	var board = Array(3);
	board[0] = Array(3);
	board[1] = Array(3);
	board[2] = Array(3);



//results of the game
//if the value of board
	var result = function() {
		//top row
		if(board[0][0] === board[0][1]) {
			if (board[0][0] === board [0][2]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//middle row
		else if (board[1][1] === board[0][1]) {
			if (board[1][1] === board [2][1]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//bottom row		
		else if (board[2][0] === board[2][1]) {
			if (board[2][0] === board [2][2]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//left column
		else if (board[0][0] === board[1][0]) {	
			if (board[0][0] === board [2][0]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//middle column
		else if (board[0][1] === board[1][1]) {
			if (board[0][1] === board [2][1]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//right column
		else if (board[0][2] === board[1][2]) {
			if (board[0][2] === board [2][2]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//left to right diagonal
		else if (board[0][0] === board[1][1]) {	
			if (board[0][0] === board [2][2]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		//right to left diagonal
		else if (board[1][1] === board[0][2]) {
			if (board[1][1] === board [2][0]) {
				$("#results").html("<p>Player " + ox[currentOX] + " Wins!!</p>")
			}
		}
		else {
			$("#results").html("<p>It's a tie</p>")
		}
	}
})