document.addEventListener('DOMContentLoaded', () => {
    let userScore = 0;
    let compScore = 0;

    const userScoreEl = document.getElementById('user-score');
    const compScoreEl = document.getElementById('comp-score');
    const msgEl = document.getElementById('msg');
    const choices = document.querySelectorAll('.choice');

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    };

    const getResult = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'draw';
        }
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'win';
        }
        return 'lose';
    };

    const updateScore = (result) => {
        if (result === 'win') {
            userScore++;
            userScoreEl.textContent = userScore;
            msgEl.textContent = 'You win!';
        } else if (result === 'lose') {
            compScore++;
            compScoreEl.textContent = compScore;
            msgEl.textContent = 'You lose!';
        } else {
            msgEl.textContent = 'It\'s a draw!';
        }
    };

    const playGame = (userChoice) => {
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        updateScore(result);
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            playGame(choice.id);
        });
    });
});
