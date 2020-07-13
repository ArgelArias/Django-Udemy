let table = document.querySelectorAll('td');
let status = "Playing";
let turn  = 'X';

$('#restart').click(function(){
  $.each($('td'), function(index){
    $('td').eq(index).text("");
  });
  status = "Playing";
  turn = "X";
  $('#status').text(`${status}...`);
  $('#player').text(`Turn: ${turn}`);
});

$('td').on('click', function(){
  if(status === "Playing" && $(this).text() === ""){
    $(this).text(turn);
    if(checkWin()){
      status = "Won";
      $('#status').text(`${status}! ${turn}`);
      $('#player').text("");
    }
    else if(checkDraw()){
      status = "Draw";
      $('#status').text(`${status}!!!`);
      $('#player').text("");
    }
    else{
      switchTurn();
    }
  }
});

$('#status').text(`${status}...`);
$('#player').text(`Turn: ${turn}`);

function checkMatchRow(one,two,three){
  return (one === two && one === three && one !== "" && one !== undefined);
}

function checkMark(x,y){
  return $('tr').eq(y).find('td').eq(x).text();
}

function checkWin(){
  for(let count = 0; count < 3; count++){
    //Check horizontal
    if(checkMatchRow(checkMark(0,count),checkMark(1,count),checkMark(2,count))){
      return true;
    }
    //Check vertical
    else if(checkMatchRow(checkMark(count,0),checkMark(count,1),checkMark(count,2))){
      return true;
    }
  }
  //Check transversal
  if(checkMatchRow(checkMark(0,0),checkMark(1,1),checkMark(2,2))){
    return true;
  }
  else if(checkMatchRow(checkMark(2,0),checkMark(1,1),checkMark(0,2))){
    return true;
  }
  else{
    return false;
  }
}

function checkDraw(){
  let emptyFlag = true;
  $.each($('td'), function(index){
    if($('td').eq(index).text() === ""){
      emptyFlag = false;
    }
  });
  return emptyFlag;
}


function switchTurn(){
  if(turn === 'X'){
    turn = 'O';
  }
  else{
    turn = 'X';
  }
  $('#player').text(`Turn: ${turn}`);
}
