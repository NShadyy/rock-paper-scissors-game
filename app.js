let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function convertToWord(letter) {
    if (letter === 'r') {
        return 'Rock';
    } else if (letter === 'p') {
        return 'Paper';
    }
    return 'Scissor';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    result_p.innerText = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 200);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerText = computerScore;
    result_p.innerText = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lost!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 200);
}

function draw(userChoice, computerChoice) {
    result_p.innerText = `It's a draw!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 200);
}

function getComputerChoice() {
    const choices = [
        'r',
        'p',
        's'
    ];
    return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();
