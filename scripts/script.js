function dropDownUeberUnsDisplay(number) {
	let content = document.getElementById("DropDownUeberUns");
	let hover = document.getElementsByClassName("hoverUnderline");

	hover[number].style.transform = "scale(1, 1)";
	content.style.height = "150px";
}

function dropDownUeberUnsNone(number) {
	let content = document.getElementById("DropDownUeberUns");
	let hover = document.getElementsByClassName("hoverUnderline");

	hover[number].style.transform = "scale(0, 1)";
	content.style.height = "0px";
}

function dropDownServiceDisplay(number) {
	let content = document.getElementById("DropDownServices");
	let hover = document.getElementsByClassName("hoverUnderline");

	hover[number].style.transform = "scale(1, 1)";
	content.style.height = "150px";
}

function dropDownServiceNone(number) {
	let content = document.getElementById("DropDownServices");
	let hover = document.getElementsByClassName("hoverUnderline");

	hover[number].style.transform = "scale(0, 1)";
	content.style.height = "0px";
}

function hoverLineOn(number) {
	let hover = document.getElementsByClassName("hoverUnderline");
	hover[number].style.transform = "scale(1, 1)";
}

function hoverLineOff(number) {
	let hover = document.getElementsByClassName("hoverUnderline");
	hover[number].style.transform = "scale(0, 1)";
}
