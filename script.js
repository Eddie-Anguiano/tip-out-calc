var document,
	console;
var userInput = document.getElementsByClassName("user_input");
var ccTipsDiv = document.getElementById("cc_input");
var cashTipsDiv = document.getElementById("cash_input");
var sbTipsDiv = document.getElementById("sb_input");


for (var i = 0; i < userInput.length; i++) {
	userInput[i].value = [];
}

function removeDollarSign(stringNum) {

	var stringArray = stringNum.split("");

	stringArray.shift();
	stringArray.shift();
	return stringArray.join("");
}

function calculate() {

	var ccTips = document.getElementById("cc_input").textContent;
	var cashTips = document.getElementById("cash_input").textContent;
	var sbTips = document.getElementById("sb_input").textContent;

	if (ccTips === "$") {
		ccTips = 0;
	} else {
		ccTips = parseFloat(removeDollarSign(ccTips));
	}

	if (cashTips === "$") {
		cashTips = 0;
	} else {
		cashTips = parseFloat(removeDollarSign(cashTips));
	}

	if (sbTips === "$") {
		sbTips = 0;
	} else {
		sbTips = parseFloat(removeDollarSign(sbTips));
	}







	console.log(ccTips, cashTips, sbTips);


	var totalTips = ccTips + cashTips - sbTips;
	var tipsReceived = ccTips + cashTips;
	var busTips = Math.ceil(totalTips * .1);
	var barTips = Math.ceil(totalTips * .05) + sbTips;
	var runTips = Math.ceil(totalTips * .05);
	var totalTipOut = busTips + barTips + runTips;
	var claimed = tipsReceived - totalTipOut;


	document.querySelector(".tipOutResult").textContent = "$ " + totalTipOut;
	document.querySelector(".cashResult").textContent = "$ " + cashTips;
	document.querySelector(".claimedResult").textContent = "$ " + claimed.toFixed(2);

	document.querySelector(".busResult").textContent = "$ " + busTips;
	document.querySelector(".runResult").textContent = "$ " + runTips;
	document.querySelector(".barResult").textContent = "$ " + barTips;
}

function isActive(element) {

	for (var i = 0; i < userInput.length; i++) {
		userInput[i].activeBool = false;
	}

	for (var j = 0; j < userInput.length; j++) {
		if (element === userInput[j]) {
			userInput[j].activeBool = true;
			userInput[j].parentNode.parentNode.style.borderBottom = "1px solid #39ff14";
		}
	}

}

function dynamicInput(num) {

	for (var i = 0; i < userInput.length; i++) {
		if (userInput[i].activeBool === true) {
			unformat(userInput[i].value);
			userInput[i].value.push(num);
			formatArray(userInput[i].value);
		}
	}

	function unformat(numArray) {
		var decLocation = numArray.indexOf(".");
		if (decLocation >= 0) {
			numArray.splice(decLocation, 1);
		}
		if (numArray[0] === 0) {
			numArray.shift();
		}
	}

	function formatArray(array) {

		if (array.length === 1) {
			array.unshift(0);
			array.unshift(".");
		} else if (array.length === 2) {
			array.unshift(".");
		} else {
			array.splice(array.length - 2, 0, ".");
		}
	}

}

function buttons() {
	var numBtns = document.getElementsByClassName("num_Btn");
	var enterBtn = document.querySelector(".enter_Btn");
	var clearBtn = document.querySelector(".clear_Btn");

	for (var i = 0; i < numBtns.length; i++) {
		numBtns[i].addEventListener("click", function (ev) {
			dynamicInput(ev.target.textContent);
			for (var i = 0; i < userInput.length; i++) {
				if (userInput[i].activeBool === true) {
					var result = userInput[i].value.join("");
					userInput[i].textContent = "$ " + result;
				}
			}


		});
	}

	function enterPress() {
		enterBtn.addEventListener("click", function () {
			if (ccTipsDiv.activeBool === true) {
				isActive(cashTipsDiv);
			} else if (cashTipsDiv.activeBool === true) {
				isActive(sbTipsDiv);
			} else {
				calculate();
			}
		});


	}

	function clearPress() {
		var outVals = document.getElementsByClassName("output_val_area");

		clearBtn.addEventListener("click", function () {
			for (var i = 0; i < userInput.length; i++) {
				userInput[i].activeBool = false;
				userInput[i].value = [];
				userInput[i].textContent = "$";
				userInput[i].parentNode.parentNode.style.borderBottom = "1px solid gray";
			}
			for (var j = 0; j < outVals.length; j++) {
				outVals[j].textContent = "$";
			}

			isActive(ccTipsDiv);
		})
	}
	enterPress();
	clearPress();

}

buttons();
isActive(ccTipsDiv);
