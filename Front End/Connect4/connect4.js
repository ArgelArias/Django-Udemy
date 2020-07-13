const player1 = prompt("Hi Player One, please enter your name:");
const player2 = prompt("Hi Player Two, please enter your name:");

let p1score = 0;
let p2score = 0;

let player = player1;
let turn = "red";
let status = "Playing";
const gray = 'rgb(128, 128, 128)';

$('#player1').text(`${player1} : ${p1score}`);
$('#player2').text(`${player2} : ${p2score}`);
$('#status').text(`${status}...`);
$('#player').text(`Turn: ${player}`);
$('#turn').css('background-color', turn);

$('#rematch').click(function(){
  $.each($('button'), function(index){
    $('button').eq(index).css('background-color', gray);
  })
  turn = "red";
  status = "Playing";
  player = player1;
  $('#turn').show();
  $('#turn').css('background-color', turn);
  $('#status').text(`${status}...`);
  $('#player').text(`Turn: ${player}`);
});

$('#restart').click(function(){
  location.reload(true);
});

$('button').on('click', function(){
  if(status === "Playing"){
    let x = $(this).closest('td').index();
    let y = checkBottom(x);
    if(y >= 0){
      changeColor(x,y,turn);
      if(checkWin()){
        status = "Finished";
        if(player === player1){
          p1score += 1;
          $('#player1').text(`${player1} : ${p1score}`);
        }
        if(player === player2){
          p2score += 1;
          $('#player2').text(`${player2} : ${p2score}`);
        }
        $('#status').text(`${status}!`);
        $('#player').text(`Won: ${player}`);
      }
      else if(checkDraw()){
        status = "Draw";
        $('#status').text(`${status}!`);
        $('#player').text("");
        $('#turn').hide();
      }
      else{
        changeTurn();
      }
    }
  }
});

function checkBottom(x){
  for(let i = 5; i >= 0; i--){
    if(checkColor(x,i) === gray){
      return i;
    }
  }
}

function checkColor(x,y){
  return $('tr').eq(y).find('td').eq(x).find('button').css('background-color');
}

function changeColor(x,bottom,turn){
  $('tr').eq(bottom).find('td').eq(x).find('button').css('background-color', turn);
}

function checkWin(){
  for(let y = 5; y >= 0; y--){
    for(let x = 0; x < 8; x++){
      //Horizontal check
      if(colorMatchCheck(checkColor(x,y),checkColor(x+1,y),checkColor(x+2,y),checkColor(x+3,y))){
        return true;
      }
      //Vertical check
      else if(colorMatchCheck(checkColor(x,y),checkColor(x,y+1),checkColor(x,y+2),checkColor(x,y+3))){
        return true;
      }
      //Transversal to the right
      else if(colorMatchCheck(checkColor(x,y),checkColor(x+1,y+1),checkColor(x+2,y+2),checkColor(x+3,y+3))){
        return true;
      }
      //Transversal to the left
      else if(colorMatchCheck(checkColor(x,y),checkColor(x-1,y+1),checkColor(x-2,y+2),checkColor(x-3,y+3))){
        return true;
      }
    }
  }
  return false;
}

function checkDraw(){
  return (checkColor(0,0) !== gray && checkColor(1,0) !== gray && checkColor(2,0) !== gray && checkColor(3,0) !== gray && checkColor(4,0) !== gray  && checkColor(5,0) !== gray && checkColor(6,0) !== gray);
}

function colorMatchCheck(color1,color2,color3,color4){
  return (color1 === color2 && color1 === color3 && color1 === color4 && color1 !== gray && color1 !== undefined)
}

function changeTurn(){
  if(turn === "red"){
    turn = "blue";
    player = player2;
  }
  else{
    turn = "red";
    player = player1;
  }
  $('#turn').css('background-color', turn);
  $('#player').text(`Turn: ${player}`);
}
