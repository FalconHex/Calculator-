// an array to store all buttons
var buttons = document.getElementsByClassName("button");

// a variable to store display
var display = document.getElementById("display");

// content for calculations
var operand1 = 0;
var operand2 = null;
var operator = null;

// a fuction to check for operator and return the same
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

// a loop through all the buttons
for (var i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener('click',function() {
        //stores the operator
        var value = this.getAttribute('data-value');
        //stores the nummber 
        var text = display.textContent.trim();

        //if a number is clicked and then a operation both are stored
        if(isOperator(value)){
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }

        //clearing display
        else if (value == "ac"){
            display.textContent = "";
        }

        //changing the sign
        else if (value == "sign"){
            operand1 = parseFloat(text);
            operand1 = -1* operand1;
            display.textContent = operand1; 
        }

        else if (value == "."){
            if (text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }

        else if (value == "%"){
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        }

        else if (value == "="){
            operand2 = parseFloat(text);

            //calc the result
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);

            if (result){
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }

        else {
            display.textContent += value;
        }
    }
    );
}
