let turn = 'x'

const ids = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9')
]

function win(winner) {
    let winnerBg = document.getElementById('winner-background');
    let winnerCont = document.getElementById('winned-container');


    winnerBg.style.display = 'initial'
    winnerCont.style.display = 'initial'

    winnerCont.innerHTML = `Congratulation Player ${winner}!!`
}

function checkBox(e) {
    if(turn === 'x') {
        let box = document.getElementById(e);
        
        turn = 'o';
        box.innerHTML = 'X'
        box.classList.add('x-class');

        document.getElementById('turn').innerHTML = 'O'
    } else {
        let box = document.getElementById(e);
        
        turn = 'x';
        box.innerHTML = 'O'
        box.classList.add('o-class');

        document.getElementById('turn').innerHTML = 'X'
    }

    /*X wins*/
    if(ids[0].innerHTML === 'X' && ids[1].innerHTML === 'X' && ids[2].innerHTML === 'X') {
        win('X');
    } else if(ids[3].innerHTML === 'X' && ids[4].innerHTML === 'X' && ids[5].innerHTML === 'X') {
        win('X');
    } else if(ids[6].innerHTML === 'X' && ids[7].innerHTML === 'X' && ids[8].innerHTML === 'X') {
        win('X');
    } else if(ids[0].innerHTML === 'X' && ids[3].innerHTML === 'X' && ids[6].innerHTML === 'X') {
        win('X');
    } else if(ids[1].innerHTML === 'X' && ids[4].innerHTML === 'X' && ids[7].innerHTML === 'X') {
        win('X');
    } else if(ids[2].innerHTML === 'X' && ids[5].innerHTML === 'X' && ids[8].innerHTML === 'X') {
        win('X');
    } else if(ids[0].innerHTML === 'X' && ids[4].innerHTML === 'X' && ids[8].innerHTML === 'X') {
        win('X');
    } else if(ids[2].innerHTML === 'X' && ids[4].innerHTML === 'X' && ids[6].innerHTML === 'X') {
        win('X');
    } else /*O wins*/ if(ids[0].innerHTML === 'O' && ids[1].innerHTML === 'O' && ids[2].innerHTML === 'O') {
        win('O');
    } else if(ids[3].innerHTML === 'O' && ids[4].innerHTML === 'O' && ids[5].innerHTML === 'O') {
        win('O');
    } else if(ids[6].innerHTML === 'O' && ids[7].innerHTML === 'O' && ids[8].innerHTML === 'O') {
        win('O');
    } else if(ids[0].innerHTML === 'O' && ids[3].innerHTML === 'O' && ids[6].innerHTML === 'O') {
        win('O');
    } else if(ids[1].innerHTML === 'O' && ids[4].innerHTML === 'O' && ids[7].innerHTML === 'O') {
        win('O');
    } else if(ids[2].innerHTML === 'O' && ids[5].innerHTML === 'O' && ids[8].innerHTML === 'O') {
        win('O');
    } else if(ids[0].innerHTML === 'O' && ids[4].innerHTML === 'O' && ids[8].innerHTML === 'O') {
        win('O');
    } else if(ids[2].innerHTML === 'O' && ids[4].innerHTML === 'O' && ids[6].innerHTML === 'O') {
        win('O');
    }
}