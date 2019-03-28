var document,
	console;



function calculate() {

	var ccTips = parseFloat(document.getElementById("cc_input").textContent);
	var cashTips = parseFloat(document.getElementById("cash_input").textContent);
	var sbTips = parseFloat(document.getElementById("sb_input").textContent);

	var totalTips = ccTips + cashTips;
	var busTips = Math.ceil(totalTips * .1);
	var barTips = Math.ceil(totalTips * .05);
	var runTips = Math.ceil(totalTips * .05);
	var totalTipOut = busTips + barTips + runTips;
	var claimed = totalTips - totalTipOut;

	document.querySelector(".tipOutResult").textContent = `$ ${totalTipOut}`;
	document.querySelector(".cashResult").textContent = `$ ${cashTips}`;
	document.querySelector(".claimedResult").textContent = `$ ${claimed}`;

	document.querySelector(".busResult").textContent = `$ ${busTips}`;
	document.querySelector(".runResult").textContent = `$ ${runTips}`;
	document.querySelector(".barResult").textContent = `$ ${barTips}`;

	console.log(busTips, barTips, runTips, totalTipOut);
}

function isActive(element) {
	var userInput = document.getElementsByClassName("user_input");

	for (var i = 0; i < userInput.length; i++) {
		userInput[i].activeBool = false;
	}

	for (var i = 0; i < userInput.length; i++) {
		if (element === userInput[i]) {
			userInput[i].activeBool = true;
			userInput[i].parentNode.parentNode.style.borderBottom = "1px solid #39ff14";
		}
	}
}
