let restart = document.querySelector('button');
let table = document.querySelectorAll('td');
let status = document.querySelector('#status');
let player = document.querySelector('#player');
let turn  = 'X';
let won = '';

restart.addEventListener("click", () => {
  table.forEach((item) => {
    item.textContent = '';
    won = '';
  });
  turn = 'X';
  status.textContent = "Playing...";
  player.textContent = "Turn: " + turn;
})

table.forEach((item) => {
  item.addEventListener("click", function(){
    if(item.textContent === '' && won === ''){
      item.textContent = turn;
      checkWinner();
    }
  })
});

status.textContent = "Playing...";
player.textContent = "Turn: " + turn;


function checkWinner(){
  if(((table[0].textContent === table[1].textContent) && (table[0].textContent === table[2].textContent)) && (table[0].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[3].textContent === table[4].textContent) && (table[3].textContent === table[5].textContent)) && (table[3].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[6].textContent === table[7].textContent) && (table[6].textContent === table[8].textContent)) && (table[8].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[0].textContent === table[3].textContent) && (table[0].textContent === table[6].textContent)) && (table[0].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[1].textContent === table[4].textContent) && (table[1].textContent === table[7].textContent)) && (table[1].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[2].textContent === table[5].textContent) && (table[2].textContent === table[8].textContent)) && (table[2].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[0].textContent === table[4].textContent) && (table[0].textContent === table[8].textContent)) && (table[0].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(((table[2].textContent === table[4].textContent) && (table[2].textContent === table[6].textContent)) && (table[2].textContent !== '')){
    won = turn;
    console.log('won ' + turn);
    status.textContent = "Won :" + won;
    player.textContent = "";
  }
  if(table[0].textContent !== '' && table[1].textContent !== '' && table[2].textContent !== '' && table[3].textContent !== '' && table[4].textContent !== '' && table[5].textContent !== '' && table[6].textContent !== '' && table[7].textContent !== '' && table[8].textContent !== ''){
    won = "Draw!!!";
    status.textContent = won;
    player.textContent = "";
  }
  if(won === ''){
    switchTurn();
  }
}

let switchTurn = () => {
  if(turn === 'X'){
    turn = 'O';
  }
  else{
    turn = 'X';
  }
  player.textContent = "Turn: " + turn;
}
