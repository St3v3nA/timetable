function doMath() {
    var numOne = document.getElementById('num1').value;
    var numTwo = document.getElementById('num2').value;
    var numThree = document.getElementById('num3').value;
    var numFour = document.getElementById('num4').value;
    var numFive = document.getElementById('num5').value;
    var theProduct = 24 - parseInt(numOne) - parseInt(numTwo) - parseInt(numThree) - parseInt(numFour) - parseInt(numFive);
    if (theProduct < 0) {
    document.write("<p style='font-size: 70px; color: #191919;'>U done messed up!</p>");
}   else {
    document.write("<p style='font-size: 70px;'>Time left: " + theProduct + "</p>");
}
}