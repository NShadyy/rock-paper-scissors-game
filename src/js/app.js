import '../styles.css';
import { userScore_span, computerScore_span, result_p, rock_div, paper_div, scissors_div } from './dom-loader';

let userScore = 0;
let computerScore = 0;

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
