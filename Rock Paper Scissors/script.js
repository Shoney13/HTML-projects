const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = [];

document.querySelectorAll(".button").forEach((element) => {
	possibleChoices.push(element.innerHTML);
});

$(".button").click(function (e) {
	e.preventDefault();
	userChoice.innerHTML = e.target.parentNode.innerHTML;
	computerChoice.innerHTML = getRandomChoice();

	let computerChose = computerChoice.childNodes[1].id;
	let userChose = userChoice.childNodes[1].id;

	if (userChose == computerChose) {
		result.innerText = "Draw!";
		addDraw();
	} else {
		result.innerText = getWinner(computerChose, userChose) + " Won!";
		if (getWinner(computerChose, userChose) == "Computer")
			addWinnerLoser("#computer-container", "#user-container");
		else addWinnerLoser("#user-container", "#computer-container");
	}
});

function addWinnerLoser(winner, loser) {
	$(winner).removeClass("winner loser draw").addClass("winner");
	$(loser).removeClass("winner loser draw").addClass("loser");
}

function addDraw() {
	$("#computer-container").removeClass("winner loser").addClass("draw");
	$("#user-container").removeClass("winner loser").addClass("draw");
}

function getWinner(computerChose, userChose) {
	console.log("computerChoice", computerChose);
	console.log("userChose", userChose);
	if (
		(computerChose == "rock" && userChose == "scissors") ||
		(computerChose == "scissors" && userChose == "paper") ||
		(computerChose == "paper" && userChose == "rock")
	) {
		return "Computer";
	}
	return "You";
}

function getRandomChoice() {
	return possibleChoices[getRandomInteger(0, 3)];
}
// get a random number between 0 and 1
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
