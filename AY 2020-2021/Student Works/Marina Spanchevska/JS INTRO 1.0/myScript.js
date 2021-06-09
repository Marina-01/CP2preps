function myFunction() {
	document.getElementById("head").innerHTML="Hello JS";
	document.getElementById("image").src="minnion.png";
	document.getElementById("head").style.color="orange";
	// document.getElementById("image").style.display="none";
}
function disPlay_Output() {
	// document.getElementById("output").innerHTML="Hello There"; // adds html output
	document.write("Hello There"); //adds output plus this erases all other html output
	window.alert("Hello There");
}