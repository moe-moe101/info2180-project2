//Project 2 fifteeen piece puzzle
//Moesha Amos
//620099794

var pieces=[];

window.onload = function(){
generatePuzzle();
}

//To each div the puzzlearea applies the puzzlepiece class and positions the divs correctly
function generatePuzzle(){
	var x = 0;
	var y = 3;
	pieces = $$('#puzzlearea div');
	
	for(var k=0; k<pieces.length; k++){
		for(var l=0; l <= y; l++){
			pieces[k].addClassName("puzzlepiece");
			pieces[k].style.top = 100*x + "px";
			pieces[k].style.left = 100 * y + "px";
			pieces[k].style.backgroundPosition = -l * 100 +"px" + x * -100 + "px";
			k++;
			
		}
		x++;
		if(x >2){
			y=2;
		}
		k--;
	}
	
}

