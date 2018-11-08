//Project 2 fifteeen piece puzzle
//Moesha Amos
//620099794

var pieces=[];
var emptyX=300;
var emptyY=300;

window.onload = function(){
generatePuzzle();
$$("shufflebutton").observe("click",shuffleBoard);
}

//To each div the puzzlearea applies the puzzlepiece class and positions the divs
function generatePuzzle(){
	var j = 0;
	var m = 3;
	pieces = $$('#puzzlearea div');
	
	for(var k=0; k < pieces.length; k++){
		for(var y=0; y <= m; y++){
			pieces[k].classList.add("puzzlepiece");
			pieces[k].style.top = 100* j + "px";
			pieces[k].style.left = 100 * y + "px";
			pieces[k].style.backgroundPosition = -y * 100 + "px" + j * -100 + "px";
			pieces[k].addEventListener("click",movePiece);
			pieces[k].addEventListener("mouseover",hover);
			k++;
			
		}
		j++;
		if(j >2){
			m=2;
		}
		k--;
	}
	
}

function movePiece(event){
	moveHelp(this);
}

//applies the css class moveablepiece to the mouse hovers over a piece where any of it's neighbours is a blank square
function hover(event){
	if(isNbourEmpty(this.style.left,this.style.top)){
		this.classList.add("movablepiece");
	}else if(this.hasClassName("movablepiece")){
		this.classList.remove("movablepiece")
	}
}
//moves the selected tile into the blank squares position
function moveHelp(piece){
	if(isNbourEmpty(piece.style.left,piece.style.top)){
		var xtemp = piece.style.left;
		var ytemp = piece.style.top;
		piece.style.left = emptyX + "px";
		piece.style.top = emptyY + "px";
		emptyY = parseInt(ytemp);
		emptyX = parseInt(xtemp);
	}
} 

//checks whether any neighbouring square of the selected tile is empty
function isNbourEmpty(x,y){
	if(Math.abs(emptyX - parseInt(x)) == 100){
		if(Math.abs(emptyY - parseInt(y)) == 0){
			return true;
		}
	}else if(Math.abs(emptyY - parseInt(y)) == 100){
		if(Math.abs(emptyX - parseInt(x)) == 0){
			return true;
		}
	}
	return false;
}

//shuffles the puzzles using 100 random moves
function shuffleBoard(){
	var tmp = [];
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < pieces.length; j++) {
      if (isNbourEmpty(pieces[j].style.left, pieces[j].style.top)) {
        tmp.push(pieces[j]);
      }
    }
    moveHelp(tmp[Math.floor(Math.random() * tmp.length)]);
    tmp = [];
  }
}
