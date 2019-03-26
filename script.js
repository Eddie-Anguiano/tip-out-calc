var document,
	console;

var submit = document.querySelector(".submit");

submit.addEventListener("click", function () {

	var ccTips = parseInt(document.getElementById("cc_input").value);
	var cashTips = parseInt(document.getElementById("cash_input").value);
	var sbTips = parseInt(document.getElementById("sb_input").value);
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


});
