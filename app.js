function doMath() {
    var numOne = document.getElementById('num1').value;
    var numTwo = document.getElementById('num2').value;
    var numThree = document.getElementById('num3').value;
    var numFour = document.getElementById('num4').value;
    var numFive = document.getElementById('num5').value;
	let timeLeft = 24 - parseInt(numOne) - parseInt(numTwo) - parseInt(numThree) - parseInt(numFour) - parseInt(numFive);
	document.getElementById("timeLeft").value = timeLeft + " hours";
}
var xValues = ["Sleep", "School", "Chores", "Training", "Gaming"];
var yValues = ['num1', 'num2', 'num3', 'num4', 'num5'];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
