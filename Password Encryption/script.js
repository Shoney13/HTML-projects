const lookup = {
	A: "N",
	B: "O",
	C: "P",
	D: "Q",
	E: "R",
	F: "S",
	G: "T",
	H: "U",
	I: "V",
	J: "W",
	K: "X",
	L: "Y",
	M: "Z",
	N: "A",
	O: "B",
	P: "C",
	Q: "D",
	R: "E",
	S: "F",
	T: "G",
	U: "H",
	V: "I",
	W: "J",
	X: "K",
	Y: "L",
	Z: "M",
	a: "n",
	b: "o",
	c: "p",
	d: "q",
	e: "r",
	f: "s",
	g: "t",
	h: "u",
	i: "v",
	j: "w",
	k: "x",
	l: "y",
	m: "z",
	n: "a",
	o: "b",
	p: "c",
	q: "d",
	r: "e",
	s: "f",
	t: "g",
	u: "h",
	v: "i",
	w: "j",
	x: "k",
	y: "l",
	z: "m",
	0: "5",
	1: "6",
	2: "7",
	3: "8",
	4: "9",
	5: "0",
	6: "1",
	7: "2",
	8: "3",
	9: "4",
	"!": "#",
	$: "%",
	"&": "+",
	"-": "@",
	_: "~",
	"#": "!",
	"%": "$",
	"+": "&",
	"@": "-",
	"~": "_",
};
let currPassword = "";
const submitButton = document.querySelectorAll(".submit-button");

submitButton.forEach((button) => {
	button.addEventListener("click", (e) => {
		// Password from input
		let passwordInput = e.target.parentNode.children[1].value;
		// Current id
		let currId = e.target.id;
		if (currId == "registrationPasswordSubmit") {
			// If length of registration password is less than 8
			if (passwordInput.length < 8) {
				document.getElementsByClassName("valid-registration")[0].style.display =
					"none";
				document.getElementsByClassName("invalid-registration")[0].style.display =
					"block";
				return;
			}
			// if registration password is valid
			document.getElementsByClassName("valid-registration")[0].style.display =
				"block";
			document.getElementsByClassName("invalid-registration")[0].style.display =
				"none";
			currPassword = encodePassword(passwordInput);
		} else if (currId == "loginPasswordSubmit") {
			// if login password is valid
			if (validatePassword(passwordInput) && passwordInput.length >= 8) {
				document.getElementsByClassName("valid-login")[0].style.display = "block";
				document.getElementsByClassName("invalid-login")[0].style.display = "none";
				return;
			}
			// if login password invalid
			document.getElementsByClassName("valid-login")[0].style.display = "none";
			document.getElementsByClassName("invalid-login")[0].style.display = "block";
		}
	});
});

function encodePassword(password) {
	// string to array of characters
	// map array to ROT13 using Lookup object
	// array to string
	return password
		.split("")
		.map((letter) => lookup[letter])
		.join("");
}

function validatePassword(password) {
	return currPassword == encodePassword(password);
}
