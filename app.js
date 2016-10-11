$(document).ready(function() {

//When a box is clicked, an image appears	
	$('.box').click(function() {
		var col = parseInt(($(this).attr('class')).match(/[0-2]/gi)[0]);
		var row = parseInt(($(this).parent().attr('class')).match(/[0-2]/gi)[0]);
		if (board[row][col] == undefined) {
			$(this).html("<span class='marker'>" + ox[currentOX] + "</span>");
			board[row][col] = ox[currentOX];
			console.log(board[row][col]);
			console.log(board);
			count++;
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
	var count = 0;

//results of the game
//if the value of board
	var result = function() {
		//top row
		if (board[0][0] === board[0][1]) {
			if (board[0][0] === board[0][2]) {
				if (board[0][0] !== undefined) {
					$("#results").html("<p>Player " + board[0][0] + " Wins on Row 0!!</p>");
				}
			}
		}
		//middle row
		else if (board[1][0] === board[1][1]) {
			if (board[1][0] === board[1][2]) {
				if (board[1][0] !== undefined) {
					$("#results").html("<p>Player " + board[1][0] + " Wins on Row 1!!</p>");
				}			
			}
		}
		//bottom row		
		if (board[2][0] === board[2][1]) {
			if (board[2][0] === board[2][2]) {
				if (board[2][0] !== undefined) {
					$("#results").html("<p>Player " + board[2][0] + " Wins on Row 2!!</p>");
				}			
			}
		}

		//left column
		if (board[0][0] === board[1][0]) {	
			if (board[0][0] === board[2][0]) {
				if (board[0][0] !== undefined) {
					$("#results").html("<p>Player " + board[0][0] + " Wins on Column 0!!</p>");
				}			
			}
		}
		//middle column
		if (board[0][1] === board[1][1]) {
			if (board[0][1] === board[2][1]) {
				if (board[0][1] !== undefined) {
					$("#results").html("<p>Player " + board[0][1] + " Wins on Column 1!!</p>");
				}			
			}
		}
		//right column
		if (board[0][2] === board[1][2]) {
			if (board[0][2] === board[2][2]) {
				if (board[0][2] !== undefined) {
					$("#results").html("<p>Player " + board[0][2] + " Wins on Column 2!!</p>");
				}			
			}
		}
		//left to right diagonal
		if (board[0][0] === board[1][1]) {	
			if (board[0][0] === board[2][2]) {
				if (board[0][0] !== undefined) {
					$("#results").html("<p>Player " + board[0][0] + " Wins on Right Diagonal!!</p>");
				}			
			}
		}
		//right to left diagonal
		if (board[0][2] === board[1][1]) {
			if (board[0][2] === board[2][0]) {
				if (board[0][2] !== undefined) {
					$("#results").html("<p>Player " + board[0][2] + " Wins on Left Diagonal!!</p>");
				}			
			}
		}
		if (count === 9) {
			$("#results").html("<p>It's a tie</p>")
		}
	}
})