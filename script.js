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
    return parseFloat(a) / parseFloat(b);
}