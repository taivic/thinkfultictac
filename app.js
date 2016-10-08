$(document).ready(function() {

//When a box is clicked, an image appears	
	$('.box').click(function() {
		$(this).html("<span class='marker'>" + ox[currentOX] + "</span>");
		var col = parseInt(($(this).attr('class')).match(/[0-2]/gi)[0]);
		var row = parseInt(($(this).parent().attr('class')).match(/[0-2]/gi)[0]);
		console.log(board[row][col]);
		if (board[row][col] === undefined) {
			board[row][col] = ox[currentOX];
			console.log(board);
			nextOX();
		}
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

	var board = Array(3);
	board[0] = Array(3);
	board[1] = Array(3);
	board[2] = Array(3);


//display function displayResult()
})