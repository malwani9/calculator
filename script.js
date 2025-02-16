let firstOperand = 0;
let operator = '';
let secondOperand = 0;

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
   else if(operator === '÷'){
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
    return parseFloat(a) / parseFloat(b);
}

let buttons = document.querySelectorAll(".calc-button");
let displayOpration = document.getElementById("operation-display");
let displayContent = ""
buttons.forEach((btn) => {
     btn.addEventListener("click", (e) =>{
        if(e.target.value == "+" || e.target.value == "-" || e.target.value == "x" || e.target.value == "÷"){
            operator = e.target.value;
        }
        if(e.target.value === "C"){
            displayOpration.textContent = "";
            displayContent = "";
        }else if(e.target.value === "="){
            operate(operator,firstOperand,secondOperand);
            displayContent += e.target.textContent + " ";
            displayOpration.textContent = displayContent;
        }
        else{
            firstOperand = e.target.value;
            secondOperand = e.target.value;
            displayContent += e.target.textContent + " ";
            displayOpration.textContent = displayContent;
        }
     });
});

/* function display(btn){
    displayOpration.textContent = btn.value;
} */