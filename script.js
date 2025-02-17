let firstOperand = null;
let operator = '';
let secondOperand = null;

let buttons = document.querySelectorAll(".calc-button");
let display = document.getElementById("calculator-display");
let displayContentValue = '0'

function clickButton(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (btn) => {
           if(buttons[i].classList.contains("number")){
             inputOperand(btn.target.value);
           }
           else if(buttons[i].classList.contains("operator")){
             inputOperator(btn.target.value);
           }
           else if(buttons[i].classList.contains("clear")){
             clear();
           }else if(buttons[i].classList.contains("equal")){
            let result = operate(operator,firstOperand, secondOperand);
            if(result){
                displayContentValue = result;
                updateDisplay();
                firstOperand = result;
                secondOperand = null;
                operator = '';
            }
           }
        })
    }
}

clickButton();
updateDisplay();

function updateDisplay(){
   display.textContent = displayContentValue;
}

function inputOperand(operand){
   if(firstOperand === null && operator == ''){
     firstOperand = operand;
     displayContentValue = firstOperand;
     updateDisplay();
   }else if(firstOperand != null && operator == ''){
     firstOperand += operand;
     displayContentValue = firstOperand;
     updateDisplay();
   }
   else if(firstOperand != null && operator != '' && secondOperand == null){
    secondOperand = operand
    displayContentValue = secondOperand;
    updateDisplay();
   }
   else if(firstOperand != null && operator != '' && secondOperand != null) {
    secondOperand += operand
    displayContentValue = secondOperand;
    updateDisplay();
   }
}

function inputOperator(operatorSign){
  if(operator == ''){
    operator = operatorSign;
  }else if(operator != ''){
    let result = operate(operator,firstOperand, secondOperand);
    if(result){
        displayContentValue = result;
        updateDisplay();
        firstOperand = result;
        secondOperand = null;
        operator = operatorSign;
    }
  }
}

function clear(){
  firstOperand = null;
  secondOperand = null;
  operator = '';
  displayContentValue = '0';
  updateDisplay();
}

function operate(operator,a,b){
   if(operator === '+'){
     return add(a,b);
   }
   else if(operator === '-' ){
   return subtract(a,b);
   }
   else if(operator === '*'){
   return  multiply(a,b);
   }
   else if(operator === '/'){
   return divide(a,b);
   }
}

function add(a,b){

    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b){
    if(b === 0 || b === '0'){return 'ERROR';}
    return parseFloat(a) / parseFloat(b);
}

/* buttons.forEach((btn) => {
     btn.addEventListener("click", (e) =>{
        if(e.target.value == "+" || e.target.value == "-" || e.target.value == "x" || e.target.value == "÷"){
            operator = e.target.value;
        }
        if(e.target.value === "C"){
            displayOpration.textContent = "";
            displayContent = "";
        }else if(e.target.value === "=" && (firstOperand.length > 0 && secondOperand.length > 0) && operator != ''){
            let value = operate(operator,firstOperand,secondOperand);
            displayContent += e.target.textContent + " " + value;
            displayOpration.textContent = displayContent;
            console.log(firstOperand);
            console.log(secondOperand);
            console.log(operator);
            firstOperand.length, secondOperand.length = 0;
        }
        else if(operator == ''){
            firstOperand.push(e.target.value);
            let first = firstOperand.join('');  
            displayContent += first + " ";
            displayOpration.textContent = displayContent;
        }else{
            secondOperand.push(e.target.value);
            let second = secondOperand.join('');
            displayContent += second + " ";
            displayOpration.textContent = displayContent;
        }
     });
});

 function display(btn){
    displayOpration.textContent = btn.value;
} */ 