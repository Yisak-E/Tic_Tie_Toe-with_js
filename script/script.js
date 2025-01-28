const btn01 = document.getElementById('btn01');
const btn02 = document.getElementById('btn02');
const btn03 = document.getElementById('btn03');
const btn04 = document.getElementById('btn04');
const btn05 = document.getElementById('btn05');
const btn06 = document.getElementById('btn06');
const btn07 = document.getElementById('btn07');
const btn08 = document.getElementById('btn08');
const btn09 = document.getElementById('btn09');


let turn = 0;
const playerO = document.getElementById('player_1');
const playerX = document.getElementById('player_2');



let num_game_allowed = 10;
let filling_counter = 0;

let num_playO_win = Number(localStorage.getItem('num_playO_win')) || 0;
let num_playX_win = Number(localStorage.getItem('num_playX_win')) || 0;


playerO.value = num_playO_win;
playerX.value = num_playX_win;

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
               
                btn_clicked.innerHTML = `<img class="circle_image" src="https://th.bing.com/th/id/R.1f0ad2f4b9e4a9273f9b3524e694ff1b?rik=c4vMvNT6tYL7yA&pid=ImgRaw&r=0" alt="O">`;
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
                
            
                btn_clicked.innerHTML = `<img class="circle_image" src="https://cdn2.iconfinder.com/data/icons/interface-part-2/32/ex-512.png" alt='X'>`;
                btn_clicked.setAttribute('disabled', true);
                turn_notify.textContent = "player O's turn";
            }
            else {
                turn++;
            }
        }
         let who_win = winner();
   
    if (who_win === 1) {
        num_playO_win++;
        playerO.value = num_playO_win;
        turn_notify.textContent = 'Player O wins';
        
        gameOver = true;
        orginalContent();
        
    }
    else if (who_win === 2) {
        num_playX_win++;
        playerX.value = num_playX_win;

        turn_notify.textContent = 'Player X wins';
        gameOver = true;
    
        orginalContent();  

    }   
    }
   
}
function winner() {

    filling_counter++;
        if (filling_counter === 9) {
            turn_notify.textContent = "ALL FILLED!! ";
            filling_counter = 0;
             orginalContent();
            
    }
    
    if (list_btns[0] === list_btns[1] && list_btns[1] === list_btns[2] && list_btns[1] !== 0) {
        btn01.style.backgroundColor = (list_btns[1] ===2)? 'red': 'blue';
        btn02.style.backgroundColor = (list_btns[1] ===2)? 'red': 'blue';;
        btn03.style.backgroundColor = (list_btns[1] ===2)? 'red': 'blue';
        
        return list_btns[1];
    }
    if (list_btns[3] === list_btns[4] && list_btns[4] === list_btns[5] && list_btns[4] !== 0) {
        btn04.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn05.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn06.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
    
        return list_btns[4];
    }
    if (list_btns[6] === list_btns[7] && list_btns[7] === list_btns[8]&& list_btns[7] !== 0) {
        btn07.style.backgroundColor = (list_btns[7] ===2)? 'red': 'blue';
        btn08.style.backgroundColor = (list_btns[7] ===2)? 'red': 'blue';
        btn09.style.backgroundColor = (list_btns[7] ===2)? 'red': 'blue';
        return list_btns[7];
    }
    if (list_btns[0] === list_btns[3] && list_btns[3] === list_btns[6] && list_btns[3] !== 0) {
        btn01.style.backgroundColor = (list_btns[3] ===2)? 'red': 'blue';
        btn03.style.backgroundColor = (list_btns[3] ===2)? 'red': 'blue';;
        btn06.style.backgroundColor = (list_btns[3] ===2)? 'red': 'blue';
        
        return list_btns[3];
     }
     if (list_btns[1] === list_btns[4] && list_btns[4] === list_btns[7] && list_btns[4] !== 0) {
        btn02.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn05.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn08.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
         
         return list_btns[4];
     }
     if (list_btns[2] === list_btns[5] && list_btns[5] === list_btns[8] && list_btns[5] !== 0) {
        btn03.style.backgroundColor = (list_btns[5] ===2)? 'red': 'blue';
        btn06.style.backgroundColor = (list_btns[5] ===2)? 'red': 'blue';
        btn09.style.backgroundColor = (list_btns[5] ===2)? 'red': 'blue';
         
         return list_btns[5];
     }
     if (list_btns[0] === list_btns[4] && list_btns[4] === list_btns[8] && list_btns[4] !== 0) {
        btn01.style.backgroundColor =(list_btns[4] ===2)? 'red': 'blue';
        btn05.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn09.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
         
        return list_btns[4];
    }
    if (list_btns[2] === list_btns[4] && list_btns[4] === list_btns[6] && list_btns[4] !== 0) {
        btn03.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn05.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        btn07.style.backgroundColor = (list_btns[4] ===2)? 'red': 'blue';
        
        return list_btns[4];
    }
  
        
      
}
function orginalContent() {
    //num_playO_win = 0
    //num_playX_win = 0

      localStorage.setItem('num_playO_win', num_playO_win);
      localStorage.setItem('num_playX_win', num_playX_win);
       setTimeout(function() {
                location.reload();
            }, 1000);
}
        

