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
let interimValue = 0;
let oldOperator = "";
let newOperator = "";

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
        return 'addition';
    } else if(val ===  '-')  {
        value += "";
        return 'subtraction';
    } else if(val ===  '/')  {
        value += "";
        return 'division';
    } else if(val ===  'x')  {
        value += "";
        return 'multiplication';
    } 
}

function equality(fxn, a, b) {
    b = Number(value);
    return operate(fxn, a, b)
}

function updateDisplay(e) {
    input = e.target.textContent;
    value += input;
    calculate.textContent = value;
}

function reset() {
    calculate.textContent = "";
    result.textContent = "";
    value = "";
    firstValue = 0;
    secondValue = 0;
    interimValue = 0;
    oldOperator = "";
}

function calcClear() {
    calculate.textContent = "";
    value = "";
}

function resultClear() {
    calculate.textContent = "";
    value = "";
    oldOperator = "";
}


numberBtns.forEach(btn => btn.addEventListener('click', (e) => {
        updateDisplay(e);
})) 

operatorBtns.forEach(btn => btn.addEventListener('click', (e) => {  
    if(firstValue === 0 && secondValue === 0){
        firstValue = Number(value);
        result.textContent = Number(value);
        input = e.target.textContent;
        oldOperator = operation(input);
        calcClear()
    }
    else if(!(firstValue === 0) && (secondValue === 0)) {
        calculate.textContent = Number(value);
        secondValue = Number(value);
        input = e.target.textContent;
        newOperator = operation(input);
        result.textContent = Number(equality(oldOperator, firstValue, secondValue));
        interimValue = Number(equality(oldOperator, firstValue, secondValue));
         calcClear();
        
        // console.log(`old operator: ${oldOperator}`)
        // console.log(`new operator: ${newOperator}`)
        // console.log(`first: ${firstValue}`);
        // console.log(`second ${secondValue}`);
        // console.log(`interim: ${interimValue}`)

        
    } 
    else if(!(firstValue === 0) && !(secondValue === 0)){
        firstValue = interimValue;
        secondValue = Number(value);
        oldOperator = newOperator
        result.textContent = Number(equality(oldOperator, firstValue, secondValue));
        interimValue = Number(equality(oldOperator, firstValue, secondValue));
        input = e.target.textContent;
        newOperator = operation(input);
        calcClear();

        // console.log(`calculate ${calculate.textContent}`)

        // console.log(`old operator: ${oldOperator}`)
        // console.log(`new operator: ${newOperator}`)
        // console.log(`first: ${firstValue}`);
        // console.log(`second: ${secondValue}`);
        // console.log(`interim: ${interimValue}`)
        // // resultClear();

    } 

}))

equals.addEventListener('click', (e) => {
    secondValue = Number(value);
    result.textContent = operate(operator, firstValue, secondValue);
    resultClear();
})

    
//EVENT LISTENERS
window.addEventListener('load', reset)
resetBtn.addEventListener('click', reset)

