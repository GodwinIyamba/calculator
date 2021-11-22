const calculationScreen = document.querySelector('.calculation');
const resultScreen = document.querySelector('.calculation');
const numberBtn = document.querySelectorAll('[data-number="number"]');
const operatorBtn = document.querySelectorAll('[data-operator="operator"]');
const pointBtn = document.querySelector('.point');
const equalBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');

let firstValue = "";
let secondValue = "";
let operator = "";

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

function operate(operator, a, b) {
    if(operator === 'add') {
        return add(a, b)
    } else if(operator === 'subtract') {
        return subtract(a, b)
    } else if(operator === 'multiply') {
        return multiply(a, b)
    } else if(operator === 'divide') {
        return divide(a, b)
    }
}