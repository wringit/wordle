const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'gray'


let words = "beers, booze, drink, wines, drunk, hooch, anjou, brown, wisky, cider, white, cream, creme, cacao, sweet, sleep, cuvee, cynar, dirty, grape, taste, hatch, flips, toddy, julep, lager, liter, loire, pinot, proof, punch, crawl, vodka, sling, smash, split, stout, syrah, tears, tonic, twist, xeres, yeast".split(", ");
let word = words[Math.floor(Math.random()*words.length)];

let row = 0;
function Square(x,y,w,id) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.id = id;
  this.csate = "black"
  this.ctext = null;
  this.init = function() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(x,y,w,w);
  }
  this.changeState = function(state){
    this.cstate = state;
    switch (state) {
      case 'gray':
	ctx.fillStyle = "gray";
	break;
      case 'green':
        ctx.fillStyle  = 'green';
        break;
      case 'black':
        ctx.fillStyle = 'black';
        break;
      case 'yellow':
        ctx.fillStyle = 'yellow';
        break;
    }
    ctx.fillRect(x,y,w,w)
  }
  this.letter = function(letter) {
    if (letter === null) {
	return;
    }
    this.ctext = letter;
    ctx.fillStyle = 'white';
    ctx.font="48px sans-serif";
    ctx.fillText(letter, x, y+40);
  }
}





let squares = [new Square(0,0,50,1), new Square(52, 0, 50, 2), new Square(104,0,50,3), new Square(156, 0, 50, 4), new Square(208,0,50,5),new Square(0,52,50,6), new Square(52,52,50,7), new Square(104,52,50,8), new Square(156,52,50,9), new Square(208,52,50,10), new Square(0,104,50,11), new Square(52,104,50,12), new Square(104,104,50,13), new Square(156,104,50,14), new Square(208,104,50,15),
       new Square(0,156,50,16), new Square(52, 156, 50,17), new Square(104,156,50,18), new Square(156,156,50,19), new Square(208,156,50,20), new Square(0,208,50,21), new Square(52,208,50,22), new Square(104,208,50,23), new Square(156,208,50,24), new Square(208,208,50,25)
              ];

squares.map(s => s.init())

let i=0;
//setInterval(function(){
//squares.map(s=> {
//s.changeState(s.cstate);
//s.letter(s.ctext)
//})
//}, 1000);

let buttons = document.getElementsByClassName("letter");

for (let i=0;i<buttons.length;i++) {
	buttons[i].onclick = function () {
		guessText(buttons[i].value);
	}
}


let guess = [];
function guessText(lt) {
let rowArray = squares.slice((row+1)*5-5,(row+1)*5);
if (lt.length > 1) {
if (guess.length > 0) {
	guess.pop();
	rowArray[guess.length].changeState("gray");
}
return;
}
if (guess.length < 5) {
	rowArray[guess.length].letter(lt);
	guess.push(lt);
}
}

document.addEventListener('keypress', function(e){

console.log(e.keyCode);
if (e.keyCode === 8) {
	guessText("sfd");
}
e.preventDefault();
if (e.keyCode >= 97 && e.keyCode <= 122) {
	console.log("letter");
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	guessText(alphabet[e.keyCode-97]);
	return;
}
if (e.keyCode === 13 && guess.length===5) {
	let rowArray = squares.slice((row+1)*5-5,(row+1)*5);
	let wordArray = word.split("");
	for (let i=0; i<guess.length;i++) {
		console.log("hell")
		if (wordArray[i] === guess[i]){
			console.log("o");
			rowArray[i].changeState("green");
			rowArray[i].letter(rowArray[i].ctext);
                
		} else if (wordArray.includes(guess[i])) {
			rowArray[i].changeState("yellow");
			rowArray[i].letter(rowArray[i].ctext);
		} else {
			rowArray[i].changeState("black");
			rowArray[i].letter(rowArray[i].ctext);
		}
	}
	guess = [];
	if (row === 4){ 
		alert("TRhe word was" + word);
	return;
	}
	row++;
}

});
