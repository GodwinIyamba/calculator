const calculate = document.querySelector('.calc');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');
const numberBtns =  document.querySelectorAll('[data-number="number"]');
const operatorBtns = document.querySelectorAll('[data-number="operator"]');
const equals =  document.querySelector('[data-number="equals"]');

//INITIALS
let value = "";
let firstValue = 0;
let secondValue = 0;
let operator = "";

//FUNCTIONS
function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
        return a * b
}

function division(a, b) {
    return (a / b)
}

function operate(fxn, a, b) {
    if(fxn === "addition") {
       return addition(a, b);
    } else if(fxn === "subtraction") {
        return subtraction(a, b);
    } else if(fxn === "multiplication") {
       return multiplication(a, b);
    } else if(fxn === "division") {
        return division(a, b);
    }
}

function operation(val) {
    if(val ===  '+')  {
        value += "";
        operator += 'addition';
    } else if(val ===  '-')  {
        value += "";
        operator += 'subtraction';
    } else if(val ===  '/')  {
        value += "";
        operator += 'division';
    } else if(val ===  'x')  {
        value += "";
        operator += 'multiplication';
    } else {
        value += val;
    }
}

function reset() {
    calculate.textContent = "";
    result.textContent = "";
    value = "";
}

function calcClear() {
    calculate.textContent = "";
    value = "";
}

function resultClear() {
    calculate.textContent ="";
    value = "";
    operator = "";
}

function populate() {
    reset();
    
    numberBtns.forEach(btn => btn.addEventListener('click', (e) => {
            input = e.target.textContent;
            value += input;
            calculate.textContent = value;
            // firstValue = Number(secondValue);
        })) 

    operatorBtns.forEach(btn => btn.addEventListener('click', (e) => {
        input = e.target.textContent;
        operation(input)
        firstValue = Number(value);
        result.textContent = value;
        calcClear()
        s

        console.log(firstValue)
    }))

    equals.addEventListener('click', (e) => {
        secondValue = Number(value);
        result.textContent = operate(operator, firstValue, secondValue);
        resultClear();
        
        console.log(operator)
        console.log(firstValue)
        console.log(secondValue)

    })
}
    
//EVENT LISTENERS
window.addEventListener('load', populate)
resetBtn.addEventListener('click', reset)

