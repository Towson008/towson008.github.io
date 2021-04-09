//present OnScreen digits onLoad
let currentTotal = 0;

//what onScreen at any given time comes in strings
let collate = "0";

//tracking the operator previously 
let preOperator = null;


const screen = document.querySelector('.screen');

//when a button is clicked and displayed on screen
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNum(value)
    }
    screen.innerText = collate;
} 
// handling symbols
function handleSymbol(symbol){
//      ÷ -
//   ➕ ➖ ➗ ✖️ ✖️
// ←
    switch(symbol){
        case 'C':
            collate = "0";
            currentTotal = 0; 
            break;
        case '=':
            if(preOperator === null){
                return
            }
            usedOperator(parseInt(collate));
            preOperator = null;
            collate = currentTotal;
            currentTotal = 0;
            break;
        case '←':
            if(collate.length === 1){
                collate = "0";
            }else {
                collate = collate.substring(0, collate.length - 1);
            }
        case '÷':
        case '×':
        case '−':
        case '+':
            handleMaths(symbol);
            break
    }
}
function handleMaths(symbol){
    if(collate === '0'){
        //do nothing 
        return;
    }
    const intCollate = parseInt(collate);

    if (currentTotal === 0){

    }
}
// function to handle maths functions

function handleMaths(symbol){
    if(collate === "0"){

        return;
    }
    const intCollate = parseInt(collate);

    if (currentTotal === 0){
        currentTotal = intCollate;
    } else{
        usedOperator(intCollate);
    }

    preOperator = symbol;

    collate = "0";
}
  
function usedOperator(intCollate){
    if(preOperator === '+') {
        currentTotal += intCollate;
    } else if(preOperator === '−') {
        currentTotal -= intCollate;
    }else if(preOperator === '×') {
        currentTotal *= intCollate;
    }else {
        currentTotal /= intCollate;
    }
}
// handling numbers
function handleNum(numberString){
    if (collate === "0"){
        collate = numberString;
    }else{
        collate += numberString; 
    } 
}
// 
function inIt(){
    document.querySelector('.calc-buttons').addEventListener('click', (e) =>{
        buttonClick(e.target.innerText);
    })}

inIt()
