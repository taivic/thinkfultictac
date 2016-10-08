$(document).ready(function() {

//When a box is clicked, an image appears	
	$('.box').click(function() {
		$(this).html("<span class='marker'>" + ox[currentOX] + "</span>");
		var col = ($(this).attr('class')).match(/[0-2]/gi);
		var row = ($(this).parent().attr('class')).match(/[0-2]/gi);
		board[row][col] = "X";
		console.log(board);
		nextOX();
	})
	
	var nextOX = function(currentOX) {
		if (currentOX < ox.length) {
			currentOX++;
		}
	}
//the image that will appear loops through the ox array
	var currentOX = 0;
	var ox = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];

	/*for (var i = 0; i < ox.length; i++){
		currentOX = i;
		console.log(ox[currentOX]);
	}*/
	
//nextOX appears everytime a box is clicked	
	

	var display = nextOX(currentOX);

	var board = Array(3);
	board[0] = Array(3);
	board[1] = Array(3);
	board[2] = Array(3);


//display function displayResult()
})