import inquirer from 'inquirer';

interface Answers {
  guess: string;
}

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function UserPrompt(){
    inquirer.prompt({
        type: "input",
        name: "guess",
        message: "Guess the secret Number (1-100): ",
        validate: (input: string) => {
            const number = parseInt(input);
            if(isNaN(number) || number < 1 || number > 100){
                return "Please enter a valid number between 1 to 100.";
            }
            return true;
        }
    })
    .then((answers : Answers)=> {
        const userGuess = parseInt(answers.guess);
        attempts++ ;

        if(userGuess === secretNumber){
            console.log(`Congratulatios! You have guessed the Secret Number ${secretNumber} in ${attempts} attempts`);
        }else if(userGuess < secretNumber){
            console.log('Try a higher number.');
            UserPrompt();
        }else{
            console.log('Try a higher number.');
            UserPrompt();
        }
    })
}

console.log('Welcome to the Number Guessing Game!');
UserPrompt();
