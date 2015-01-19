var wins = 0;
var losses = 0;
var ties = 0;
var computerChoice = "";
var ucArray = [];
var ucaLength = "";

function winner(result){
		document.getElementById("winner").innerHTML = result;
};
function score(){
	var counter = wins + "/" + losses + "/" + ties;
	document.getElementById("score").innerHTML = counter;
};
function rockPaperScissors(userChoice){
	function patternRandom(){
		computerChoice = Math.random();
			if(computerChoice < 0.34){
			computerChoice = "rock";
			} 
			else if(computerChoice <= 0.67){
				computerChoice = "paper";
			}
			else{
				computerChoice = "scissors";
			};
	};
	function patternAA(){
		if(ucArray[ucaLength - 1] == "rock"){
			computerChoice = "paper";
		}
		else if(ucArray[ucaLength - 1] == "paper"){
			computerChoice = "scissors";
		}
		else if(ucArray[ucaLength - 1] == "scissors"){
			computerChoice = "rock";
		};
	}
	function patternABAB(){
		if(ucArray[ucaLength - 1] == ucArray[ucaLength - 3]){
			if(ucArray[ucaLength - 2] == ucArray[ucaLength - 4]){
				if(ucArray[ucaLength - 2] == "rock"){
					computerChoice = "paper";
				}
				else if(ucArray[ucaLength - 2] == "paper"){
					computerChoice = "scissors";
				}
				else if(ucArray[ucaLength - 2] == "scissors"){
					computerChoice = "rock";
				};
			};
		};
	};
	function patternABCABC(){
		if((ucArray[ucaLength - 1] == ucArray[ucaLength - 4]) && (ucArray[ucaLength - 2] == ucArray[ucaLength - 5]) && (	ucArray[ucaLength - 3] == ucArray[ucaLength - 6])){
			if(ucArray[ucaLength - 3] == "rock"){
				computerChoice = "paper";
			}
			else if(ucArray[ucaLength - 3] == "paper"){
				computerChoice = "scissors";
			}
			else if(ucArray[ucaLength - 3] == "scissors"){
				computerChoice = "rock";
			};
		};
	}

	const tieMessage = "It's a tie...";
	const winMessage = "You win! :D";
	const loseMessage = "Computer wins. D:";

	var ucaLength = ucArray.length;

	if(ucArray.length == 0){
		patternRandom();
	}
	else if(userChoice == ucArray[ucaLength - 1]){
		patternAA();
	}
	else if(userChoice == ucArray[ucaLength - 2]){
		patternABAB();
	}
	else if(userChoice == ucArray[ucaLength - 3]){
		patternABCABC();
	}
	else{
		patternRandom();
	};

	ucArray.push(userChoice);
	ucaLength = ucArray.length;

	if(userChoice == computerChoice){
		winner(tieMessage);
		++ties;
    score();
  }
  else if(userChoice == "rock"){
    if(computerChoice == "scissors"){
      winner(winMessage);
      ++wins;
      score();
    }
    else{
    	winner(loseMessage);
    	++losses;
    	score();
    };
  }
  else if(userChoice == "paper"){
    if(computerChoice == "rock"){
      winner(winMessage);
      ++wins;
      score();
    }
    else{
      winner(loseMessage);
      ++losses;
      score();
    };
  }
  else{
    if (computerChoice == "rock"){
      winner(loseMessage);
      ++losses;
      score();
    }
    else{
      winner(winMessage);
      ++wins;
      score();
    };
  };
};