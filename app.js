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
		if(board[0][0] === board[0][1]) {
			if (board[0][0] === board [0][2]) {
				$("#results").html("<p>Player " + ox[currentOX-1] + " Wins!!</p>")
			}
		}
/*		else if (board[1][0] === board[1][1]) {	
			if (board[1][0] === board [1][2]) {
				$("#results").html("<p>Player " + ox[currentOX-1] + " Wins!!</p>")
			}
		}	
		else if (board[2][0] === board[2][1]) {
			if (board[2][0] === board [2][2]) {
				$("#results").html("<p>Player " + ox[currentOX-1] + " Wins!!</p>")
			}
		}
		else {
			$("#results").html("<p>Keep going!</p>")
		}*/
	}
})