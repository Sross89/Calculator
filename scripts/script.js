let firstNumber;
let secondNumber
let operator;
let mainString = "";

function populateTextBox(){
    document.getElementById("textbox").value = mainString;
}

function add (num1, num2){
    var result = num1+num2;
    mainString = result;
}
function subtract (num1, num2){
    return num1-num2;
}
function multiply (num1, num2){
    return num1*num2;
}
function divide (num1, num2){
    return num1/num2;
}

document.getElementById("0").addEventListener("click", numBtnFunction0);
document.getElementById("1").addEventListener("click", numBtnFunction1);
document.getElementById("2").addEventListener("click", numBtnFunction2);
document.getElementById("3").addEventListener("click", numBtnFunction3);
document.getElementById("4").addEventListener("click", numBtnFunction4);
document.getElementById("5").addEventListener("click", numBtnFunction5);
document.getElementById("6").addEventListener("click", numBtnFunction6);
document.getElementById("7").addEventListener("click", numBtnFunction7);
document.getElementById("8").addEventListener("click", numBtnFunction8);
document.getElementById("9").addEventListener("click", numBtnFunction9);
document.getElementById("add").addEventListener("click", numBtnFunctionAdd);
document.getElementById("minus").addEventListener("click", numBtnFunctionMinus);
document.getElementById("multiply").addEventListener("click", numBtnFunctionMulitply);
document.getElementById("divide").addEventListener("click", numBtnFunctionDivide);
//document.getElementById("AC").addEventListener("click", numBtnFunctionAC);
//document.getElementById("negative").addEventListener("click", numBtnFunctionNegative);
document.getElementById("enter").addEventListener("click", operate);
//document.getElementById("backspace").addEventListener("click", numBtnFunctionBack);
document.getElementById("clear").addEventListener("click", clear);

function numBtnFunction0(){
    mainString += "0";
    populateTextBox();
}
function numBtnFunction1(){
    mainString += "1";
    populateTextBox();
}
function numBtnFunction2(){
    mainString += "2";
    populateTextBox();
}
function numBtnFunction3(){
    mainString += "3";
    populateTextBox();
}
function numBtnFunction4(){
    mainString += "4";
    populateTextBox();
}
function numBtnFunction5(){
    mainString += "5";
    populateTextBox();
}
function numBtnFunction6(){
    mainString += "6";
    populateTextBox();
}
function numBtnFunction7(){
    mainString += "7";
    populateTextBox();
}
function numBtnFunction8(){
    mainString += "8";
    populateTextBox();
}
function numBtnFunction9(){
    mainString += "9";
    populateTextBox();
}
function numBtnFunctionAdd(){
    operator = '+';
    firstNumber = mainString;
    mainString += '+';
}
function numBtnFunctionMinus(){
    operator = '-';
    var text = document.getElementById("textbox").value;
    firstNumber = text.substring(0, text.indexOf('-')-1);
}
function numBtnFunctionMulitply(){
    operator = '*';
    var text = document.getElementById("textbox").value;
    firstNumber = text.substring(0, text.indexOf('*')-1);
}
function numBtnFunctionDivide(){
    operator = '/';
    var text = document.getElementById("textbox").value;
    firstNumber = text.substring(0, text.indexOf('/')-1);
}
function clear(){
    mainString = "";
    populateTextBox();
}

function operate(){
    var text = document.getElementById("textbox").value;
    
    if(text == ""){
        alert("Enter a number please");
    }
    else{
        switch(operator){
            case '+':
                secondNumber = text.substring(indexOf('+') + 1, text.length);
                add(parseFloat(firstNumber), parseFloat(secondNumber));
                break;
            case '-':
                break;
            case '*':
                break;
            case '/':
                break;
        }
    }
}