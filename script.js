//Defining display and buttons
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


//Function for clearing display 
const clearDisplay = function () {
    display.textContent = "";
}

//Function for backarrow
const backarrow = function () {
    display.innerText = display.innerText.slice(0,-1)
}


//Function for the minus button
const minus = function () {
    display.innerText = display.innerText - display.innerText;
}


//Logic
buttons.map(button => {
    button.addEventListener('click',(e) => {
      switch(e.target.innerText){

            case "←":
               backarrow();
                break;

            case "C":
             clearDisplay();
             break;

            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = "Error!"
                }
                
                break;

                default: display.textContent += e.target.innerText;
      }
        
    })
})

