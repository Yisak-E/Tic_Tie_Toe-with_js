

let turn = 0;
const playerO = document.getElementById('player_1');
const playerX = document.getElementById('player_2');
let num_game_allowed = 10;
let filling_counter = 0;

let num_playO_win = Number(playerO.value); 
let num_playX_win = Number(playerX.value); 

let winning_color;

let gameOver = false;

const back = document.querySelector('button');
const btns = document.getElementsByClassName('btn');
const turn_notify = document.getElementById('now_turn_is');

let bt1 = bt2 = bt3 = bt4 = bt5 = bt6 = bt7 = bt8 = bt9 = 0;

let list_btns = [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9];


while(num_game_allowed-- > 0) {
    function marker(identity) {
        const btn_clicked = document.getElementById(identity);
        let btn_clicked_id = Number(identity.at(-1)) - 1;
        turn++;
        if (turn % 2 == 1) {
            if (list_btns[btn_clicked_id] == 0) {
                list_btns[btn_clicked_id] = 1;
               
                btn_clicked.innerHTML = `<img src="../assets/circle.png">`;
                btn_clicked.setAttribute('disabled', true);
                turn_notify.textContent = "player X's turn";

            }
            else {
                turn++;
            }
        }
        else {
            if (list_btns[btn_clicked_id] == 0) {
                list_btns[btn_clicked_id] = 2;
                
            
                btn_clicked.innerHTML = `<img src="../assets/x.png">`;
                btn_clicked.setAttribute('disabled', true);
                turn_notify.textContent = "player O's turn";
            }
            else {
                turn++;
            }
        }
         let who_win = winner();
    console.log(who_win)
    if (who_win === 1) {
        num_playO_win++;
        playerO.value = num_playO_win;
        orginalContent();
        
    }
    else if (who_win === 2) {
        num_playX_win++;
        playerX.value = num_playX_win;
        orginalContent();

      

    }
      
    }
   
}
function winner() {
    if (list_btns[0] === list_btns[1] && list_btns[1] === list_btns[2]) {
        return list_btns[1];
    }
    if (list_btns[3] === list_btns[4] && list_btns[4] === list_btns[5]) {
        return list_btns[4];
    }
    if (list_btns[6] === list_btns[7] && list_btns[7] === list_btns[8]) {
        return list_btns[7];
    }
    if (list_btns[0] === list_btns[3] && list_btns[3] === list_btns[6]) {
        return list_btns[3];
     }
     if (list_btns[1] === list_btns[4] && list_btns[4] === list_btns[7]) {
        return list_btns[4];
     }
     if (list_btns[2] === list_btns[5] && list_btns[5] === list_btns[8]) {
        return list_btns[5];
     }
     if (list_btns[0] === list_btns[4] && list_btns[4] === list_btns[8]) {
        return list_btns[4];
    }
    if (list_btns[2] === list_btns[4] && list_btns[4] === list_btns[6]) {
        return list_btns[4];
    }
    for (let i = 0; i < list_btns.length; i++){
        if (list_btns[i] !== 0) {
            filling_counter++;
            if (filling_counter === 9) {
                turn_notify.textContent = "ALL FILLED!! ";
            }
        }

       
       
    }
}
  function orginalContent() {
            for (let i = 0; i < list_btns.length; i++) { 
                list_btns[i] = 0;
            }
      
        }
