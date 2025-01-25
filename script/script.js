let turn = 0;
let num_win_player_1 = 0;
let num_win_player_2 = 0;
let winning_color;
const playerA = 'assets/circle.png';
const playerB = 'assets/x.png';

const is_winning_move = function (player) {
    if (player == 1) {
        winning_color = rgb(0, 0, 255);
    }
    else {
        winning_color = rgb(255, 0, 0);
    }
    
}

