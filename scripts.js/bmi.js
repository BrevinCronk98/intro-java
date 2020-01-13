var bmi = function(number1, number2){
    return number1/Math.sqrt(number2);
};

var number1= parseInt(prompt("enter your weight in kilograms"));
var number2=parseFloat(prompt("enter your height in meters"));
var result = bmi(number1,number2);
alert(result);

var temp = function(number1){
    return (number1-32)*.5555;
};
    var number1 = parseInt(prompt("enter degrees in fahrenheit"));
    var result1 = temp(number1);
    alert(result1);
