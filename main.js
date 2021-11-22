const calculationScreen = document.querySelector('.calculation');
const resultScreen = document.querySelector('.result');
const numberBtn = document.querySelectorAll('[data-number="number"]');
const operatorBtn = document.querySelectorAll('[data-operator="operator"]');
const pointBtn = document.querySelector('.point');
const equalBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');

let firstValue = '';
let secondValue = '';
let operator = "";
let pointBoolean = false;

function add(a, b)  {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b)  {
    return a / b
}
function addPoint() {
    let string = calculationScreen.textContent.includes('.');
    if(string === false) {
        pointBoolean = true
        calculationScreen.textContent += ".";
    } else{
        pointBoolean = false;
        return
    }
}

function operate(operator, a, b) {
    if(operator === '+') {
        return add(a, b)
    } else if(operator === '-') {
        return subtract(a, b)
    } else if(operator === 'x') {
        return multiply(a, b)
    } else if(operator === '/') {
        if(b === 0) return 'Oops!' 
        return divide(a, b)
    }
}

function showNumber(btn) {
    
}

function round(number) {
    if(typeof number === 'string') return number
    return Math.round(number * 1000) / 1000;
}

function backspace() {
    let string = calculationScreen.textContent.slice(0, -1)
    calculationScreen.textContent = string;
}

function clear() {
    firstValue = "";
    secondValue = "";
    operator = "";
    calculationScreen.textContent = "";
    resultScreen.textContent = "";
}

pointBtn.addEventListener('click', addPoint)
deleteBtn.addEventListener('click', backspace)
clearBtn.addEventListener('click', clear);


numberBtn.forEach(btn => btn.addEventListener('click', () => { 
calculationScreen.textContent += btn.textContent;
}))

operatorBtn.forEach(btn  => btn.addEventListener('click', () => {
    if(firstValue === "" && secondValue === "") {
        firstValue = Number(calculationScreen.textContent);
        calculationScreen.textContent = "";
        resultScreen.textContent = round(firstValue);
        operator = btn.textContent;
    } 
    else if(!(firstValue === "") && (secondValue === "")) {
        if(operator === "") {
            operator = btn.textContent;
        }
        console.log(operator)
        secondValue =   Number(calculationScreen.textContent);
        resultScreen.textContent = round(operate(operator, firstValue, secondValue));
        firstValue = round(operate(operator, firstValue, secondValue));
        operator = btn.textContent;
        secondValue = "";
        calculationScreen.textContent = "";
    } 
}))

equalBtn.addEventListener('click', () => {
    if(firstValue === "" && secondValue === "") return
    secondValue =   Number(calculationScreen.textContent);
    resultScreen.textContent = round(operate(operator, firstValue, secondValue));
    firstValue = round(operate(operator, firstValue, secondValue));
    operator = "";
    secondValue = "";
    calculationScreen.textContent = "";
})