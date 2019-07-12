var cells = new Array(9);

var computer_move;

var done = false;
var draw = false;
const win_condition = [[0, 1, 2],//row1
                       [3, 4, 5],//row2
                       [6, 7, 8],//row3
                       [0, 3, 6],//column1
                       [1, 4, 7],//column2
                       [2, 5, 8],//column3
                       [0, 4, 8],//diagonal1
                       [2, 4, 6]]//diagonal2
const priority = [4,0,1,8,7,2,5,6,3];
function contains_any(arr, char, idxs)
{
  for (var idx of idxs) {
    if(arr[idx] === char) return true;
  }
  return false;
}

function contains_all(arr, char, idxs)
{
  for (var idx of idxs) {
    if(arr[idx] !== char) return false;
  }
  return true;
}


function mark_square(char,square){
  squares[square] = char;
}

function check(char){
  var pass;
      
    for (var idxs of win_condition) {
      pass = contains_all(cells, char, idxs);
      if(pass){
        done = true;
        return idxs;
      }
      
    }
    
    //count
    var cnt = 0;
    for (var cell = 0; cell < 9; cell++)
    {
      if(cells[cell] === 'x' || cells[cell] === 'o'){
        cnt++;
      }
    }
    pass = cnt>=9;
    if(pass){
        done = true;
        draw = true;
        return;
    }
}

function replace_cell(char,cell){
  cells[cell] = char;
  var  str = '<img alt="" src="/images/'+char+'.png" style="height: 58px; width: 58px">';
  document.getElementById("cell_"+cell).innerHTML = str;
  return check(char);
}

function fill(){
  for (var cell = 0; cell < 9; cell++)
  {
    if(cells[cell] !== 'x' && cells[cell] !== 'o') replace_cell('b',cell);
  }
  
}
function win(line){
  fill();
  document.getElementById("message").innerHTML = "Player Wins";
}

function loose(line){
  fill();
  document.getElementById("message").innerHTML = "Computer Wins";
}

function tie(){
  fill();
  document.getElementById("message").innerHTML = "Nobody Wins";
}

function compute(){
  var cntx, cnto, id_val;
  for (var idxs of win_condition) {
    cntx = 0;
    cnto = 0;
    for (var idx of idxs) {
      if(cells[idx] === 'x') cntx++;
      if(cells[idx] === 'o') cnto++;
      if(cells[idx] === undefined) id_val = idx;
    }
    if(cntx + cnto == 3) continue;
    if(cntx == 2) return id_val;//block
    if(cnto == 2) return id_val;//win
  }

  for (var id_val of priority) {
      if(cells[id_val] === undefined) 
        return id_val;//strategize
  }
}
function do_click(move) {
  var res;
  if(!done)
  {
    res = replace_cell('x',move);
    if(done && !draw){
      win(res);
      return;
    }
  if(draw) tie();
    computer_move = compute();
    res = replace_cell('o',computer_move);
    if(done && !draw){
      loose(res);
      return;
    }
  }
}
