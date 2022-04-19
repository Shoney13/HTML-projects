const tableElement = document.querySelector("table");
let currRow = 1;
function getInterest(balance) {
	if (balance >= 200000) return 10;
	if (balance >= 100000) return 5;
	return 3;
}
function addToTable() {
	const name = document.getElementById("fullName").value;
	const balance = Number(document.getElementById("bankBalance").value);
	if (!name) {
		alert("Please enter a valid name");
		return;
	}
	if (balance < 0 || !balance) {
		alert("Please enter a valid balance");
		return;
	}
	let interest = getInterest(balance);
	let updatedBalance = balance + (balance * interest) / 100;
	tableElement.innerHTML += `
    <tr id='b${currRow}'><td>${name}</td><td>${balance}</td><td>${interest}%</td><td>${updatedBalance}</td><td><div class="btn-del" onclick="deleteRow(this)">Remove</div></td></tr>
    `;
	currRow++;
}

function deleteRow(elem) {
	document.getElementById(elem.parentNode.parentNode.id).remove();
}
