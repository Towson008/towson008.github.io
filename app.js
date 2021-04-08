//present OnScreen digits onLoad
let currentTotal = 0;

//what onScreen at any given time comes in strings
let collate = "0";

//tracking the operator previously 
let preOperator;


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
    // if(symbol === "C"){
    //     collate = "0";
    //     currentTotal = 0;
    // }

    switch(symbol){
        case 'C':
            collate = "0";
            currentTotal = 0;
            break;
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
