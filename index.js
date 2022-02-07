const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'gray'

function Square(x,y,w,id) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.id = id;
  
  this.init = function() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(x,y,w,w)
  }
  this.changeState = function(state){
    switch (state) {
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
    ctx.fillStyle = 'white';
    ctx.font="48px sans-serif";
    ctx.fillText(letter, x, y+40);
  }
}

let squares = [new Square(0,0,50,1), new Square(52, 0, 50, 2), new Square(104,0,50,3), new Square(156, 0, 50, 4), new Square(208,0,50,5),new Square(0,52,50,6), new Square(52,52,50,7), new Square(104,52,50,8), new Square(156,52,50,9), new Square(208,52,50,10), new Square(0,104,50,11), new Square(52,104,50,12), new Square(104,104,50,13), new Square(156,104,50,14), new Square(208,104,50,15),
       new Square(0,156,50,16), new Square(52, 156, 50,17), new Square(104,156,50,18), new Square(156,156,50,19), new Square(208,156,50,20), new Square(0,208,50,21), new Square(52,208,50,22), new Square(104,208,50,23), new Square(156,208,50,24), new Square(208,208,50,25)
              ];

squares.map(s => s.init())

squares[5].changeState('green')
squares[5].letter('L')
