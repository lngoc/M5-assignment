//Step 1
function collecttUserChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
      return collectUserChoice(); // Recursively call the function for a valid choice
    }
  }
//Step 2
function collectComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
// Step 3
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock") {
      return computerChoice === "scissors" ? "You win!" : "Computer wins!";
    } else if (userChoice === "paper") {
      return computerChoice === "rock" ? "You win!" : "Computer wins!";
    } else if (userChoice === "scissors") {
      return computerChoice === "paper" ? "You win!" : "Computer wins!";
    }
  }
  // Step 4

  function playGame() {
    const userChoice = collectUserChoice();
    const computerChoice = collectComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
  }

  //Step 5

  playGame();