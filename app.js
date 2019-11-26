let userScore = 0;
let compScore = 0;
const userScrore_span = document.getElementById('user-score');
const compScrore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const userIcon = '👤';
const pcIcon = '🖥️';
const fireIcon = '🔥';
const poopIcon = '💩';
const loopIcon = '➰';

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function choiceToString(letter) {
  if (letter === 'r') return 'Rock'
  if (letter === 'p') return 'Paper'
  return 'Scissors'
}

function win(user, computer) {
  userScore++;
  userScrore_span.innerHTML = userScore;
  userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${fireIcon}<br>You win<br>${userIcon}${choiceToString(user)} ${pcIcon}${choiceToString(computer)}`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
  compScore++;
  compScrore_span.innerHTML= compScore;
  userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${poopIcon}<br>You Lost<br>${userIcon}${choiceToString(user)} ${pcIcon}${choiceToString(computer)}`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
  userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${loopIcon}<br>DRAW<br>${userIcon}${choiceToString(user)} ${pcIcon}${choiceToString(computer)}`;
  userChoice_div.classList.add('orange-glow');
  setTimeout(() => userChoice_div.classList.remove('orange-glow'), 300);
}

function game(userChoice) {
  let computerChoice = getCompChoice();
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
