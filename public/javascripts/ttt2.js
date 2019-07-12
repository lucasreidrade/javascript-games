var cells = new Array(81);
var squares = new Array(9);

var computer_move;

var done = false;

function contains_any(arr, char, idxs)
{
  for (cell in idxs) {
    if(cells[cell] === char) return true;
  }
  return false;
}

function contains_all(arr, char, idxs)
{
  for (cell in idxs) {
    if(cells[cell] !== char) return false;
  }
  return true;
}

function mark_square(char,square){
  squares[square] = char;
}

function check(char){
  var idxs;
  var pass;
  for (var square = 0; square < 9; square++) {
    if(squares[square]==='x'|| squares[square]==='o') continue;
    
    idxs = [square*9+0, square*9+1, square*9+2, square*9+3, square*9+6];
    if(!contains_any(cells, char, idxs)) continue;
    
    pass = false;
      
    for (var chk = 0; chk < 3; chk++) {
      //rows
      idxs = [square*9+(chk*3)+0, square*9+(chk*3)+1, square*9+(chk*3)+2];
      pass = contains_all(cells, char, idxs);
      if(pass){
        mark_square(char,square);
        break;
      }
      //columns
      idxs = [square*9+chk+(0*3), square*9+chk+(1*3), square*9+chk+(2*3)];
      pass = contains_all(cells, char, idxs);
      if(pass){
        mark_square(char,square);
        break;
      }
    }
    
    if(pass) break;
  
    //diagonal 1
    idxs = [square*9+0, square*9+4, square*9+8];
    pass = contains_all(cells, char, idxs);
    if(pass){
      mark_square(char,square);
      break;
    }
    
    //diagonal 2
    idxs = [square*9+2, square*9+4, square*9+6];
    pass = contains_all(cells, char, idxs);
    if(pass){
      mark_square(char,square);
      break;
    }
    
    //count
    idxs = [];
    var cell;
    for (var chk = 0; chk < 9; chk++)
    {
      cell = square*9+chk;
      if(cells(cell) === char){
        idxs.push(cell);
      }
    }
    pass = idxs.length>=5;
    if(pass){
      mark_square(char,square);
      break;
    }
    
  }
  
  
  
}

function replace_cell(char,move){
  cells[move] = 'char';
  var  str = '<img alt="" src="/images/'+char+'.png" style="height: 58px; width: 58px">';
  document.getElementById("cell_"+move).innerHTML = str;
  check('char');
}
function do_click(move) {
  if(!done)
  {
    replace_cell('x',move);
    if(done){
      victory("Player");
      return;
    }
    computer_move = compute();
    replace_cell('o',computer_move);
    if(done){
      victory("Computer");
      return;
    }
  }
}
