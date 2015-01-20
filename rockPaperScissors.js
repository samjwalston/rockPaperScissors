var wins = 0;
var winStreak = 0;
var losses = 0;
var ties = 0;
var computerChoice = "";
var ucArray = [];
var ucaLength = "";
var names = {
	rNames:  ["Robert", "Richard", "Raymond", "Randy", "Roger", "Ronald", "Russel", "Reese", "Ralph", "Romeo"],
	nNames: ["Noel", "Noah", "Nathan", "Nicholas", "Neil", "Nelson", "Nico", "Nigel", "Norton", "Norman"],
	gNames: ["Gaeth", "Garrett", "Goldburg", "Gundry", "Gates", "Gotham", "Grace", "Getty", "Glidden", "Ghent"], 
};

function total(){
	var totalGames = "Total Games: " + (wins + losses + ties);
	document.getElementById("total").innerHTML = totalGames;
};
function won(){
	var sum = (wins + losses + ties);
	var wonGames = "Wins: " + wins + " (" + ((wins / sum) * 100).toFixed(2) + "%)";
	document.getElementById("won").innerHTML = wonGames;
};
function lost(){
	var sum = (wins + losses + ties);
	var lostGames = "Losses: " + losses + " (" + ((losses / sum) * 100).toFixed(2) + "%)";
	document.getElementById("lost").innerHTML = lostGames;
};
function tied(){
	var sum = (wins + losses + ties);
	var tiedGames = "Ties: " + ties + " (" + ((ties / sum) * 100).toFixed(2) + "%)";
	document.getElementById("tied").innerHTML = tiedGames;
};
function winner(result){
	document.getElementById("winner").innerHTML = result;
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
	};
	function patternAACAA(){
		if(ucArray[ucaLength - 1] == "rock"){
			computerChoice = "rock";
		}
		else if(ucArray[ucaLength - 1] == "paper"){
			computerChoice = "paper";
		}
		else if(ucArray[ucaLength - 1] == "scissors"){
			computerChoice = "scissors";
		};
	};
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
		if((ucArray[ucaLength - 1] == ucArray[ucaLength - 4]) && (ucArray[ucaLength - 2] == ucArray[ucaLength - 5]) && (ucArray[ucaLength - 3] == ucArray[ucaLength - 6])){
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
	const loseMessage = names.rNames[Math.floor(Math.random() * 9)] + " " + names.nNames[Math.floor(Math.random() * 9)] + " " + names.gNames[Math.floor(Math.random() * 9)]
 + " wins. D:";
 	const greatMessage = "Damn son! You're on fire!";
 	const tantrumMessage = "Fuck this game!";

	var ucaLength = ucArray.length;

	if(ucArray.length == 0){
		patternRandom();
	}
	else if(ucArray[ucaLength - 1] == ucArray[ucaLength - 2]){
		if(ucaLength > 4 && (ucArray[ucaLength - 4] == ucArray[ucaLength - 5]) && (ucArray[ucaLength - 1] !== ucArray[ucaLength - 3])){
			patternAACAA();
		}
		else{
			patternAA();
		};
	}
	else if(ucArray[ucaLength - 1] == ucArray[ucaLength - 3]){
		patternABAB();
	}
	else if(ucArray[ucaLength - 1] == ucArray[ucaLength - 4]){
		patternABCABC();
	}
	else{
		patternRandom();
	};

	if(userChoice == computerChoice){
		++ties;
		winStreak = 0;
		total();
    won();
    lost();
    tied();
    winner(tieMessage);
  }
  else if(userChoice == "rock"){
    if(computerChoice == "scissors"){
      ++wins;
      ++winStreak;
      total();
      won();
    	lost();
    	tied();
      winner(winMessage);
    }
    else{
    	++losses;
    	winStreak = 0;
    	total();
    	won();
    	lost();
    	tied();
    	winner(loseMessage);
    };
  }
  else if(userChoice == "paper"){
    if(computerChoice == "rock"){
      ++wins;
      ++winStreak;
      total();
      won();
    	lost();
    	tied();
      winner(winMessage);
    }
    else{
      ++losses;
      winStreak = 0;
      total();
      won();
    	lost();
    	tied();
      winner(loseMessage);
    };
  }
  else{
    if (computerChoice == "rock"){
      ++losses;
      winStreak = 0;
      total();
      won();
    	lost();
   		tied();
      winner(loseMessage);
    }
    else{
      ++wins;
      ++winStreak;
      total();
      won();
    	lost();
    	tied();
      winner(winMessage);
    };
  };

  ucArray.push(userChoice);
	ucaLength = ucArray.length;
	if(ucaLength > 10){
		ucArray.shift();
	};
	if(winStreak >= 10){
		winner(tantrumMessage);
		throw new Error();
	}
	else if(winStreak >= 5){
		winner(greatMessage);
	};
};