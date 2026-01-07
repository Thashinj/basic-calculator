var display = '';
var percentVal = '';
var result = '';
var memory = 0;
var Calculated = false;

function num(val) {
    if(Calculated){
        display = '';
        document.getElementById('solve').value = '';
        Calculated = false;
    }
    
    display += val;
    document.getElementById('solve').value = display;
}

function operatorType(op){
    if (Calculated){
        Calculated = false;
    }

    display += op;

    document.getElementById('solve').value = display;
}

function calculate() {
    try {
        if (display === '' ) {
            throw new Error("Empty expression");
        }
        if (isNaN(display[0]) && display[0] !== '-' && display[0] !== '.'){
            throw new Error("Invalid start");
        }
        if (isNaN(display.slice(-1))) {
            throw new Error("Cannot end with operator");
        }

        result = math.evaluate(display);

        if (!isFinite(result)) {
            throw new Error("Error");
        }

        display = result;
        document.getElementById('solve').value = display;
        Calculated = true;
    }
    catch (e) {
        if (e.message === "Cannot end with operator" || e.message === "Empty expression" || e.message === "Invalid start of expression") {
            document.getElementById('solve').value = "Invalid Int";
        }
        else if (e.message === "Error") {
            document.getElementById('solve').value = "Zero Divide";
        } 
        else {
            document.getElementById('solve').value = "Error";
        }
         
         display = '';
         Calculated = false;
    }
}

function squareRoot() {
    try{
        if(display === '' || isNaN(display) || display < 0){
            throw "Not a number";
        }

        display = math.sqrt(display);
        document.getElementById('solve').value = display;
        Calculated = true;
    }
    catch {
        document.getElementById('solve').value = "Invalid";
        display = '';
        Calculated = false;
    }
}

function squaredNumber() {
    
    try{
        if(display === '' || isNaN(display) || display < 0){
            throw "Not a number";
        }

        display = display**2;
        document.getElementById('solve').value = display;
        Calculated = true;
    }
    catch {
        document.getElementById('solve').value = "Invalid No.";
        display = '';
        Calculated = false;
    }
}

function memoryPlus(){
    result = document.getElementById('solve').value;
    memory += parseFloat(result);
}

function memoryMinus(){
    result = document.getElementById('solve').value;
    memory -= parseFloat(result);
}

function memoryRecall(){
    document.getElementById('solve').value = memory;
    display = memory;
    Calculated = true;
}

function memoryClear(){
    memory = 0;
    document.getElementById('solve').value = '';
    display = '';
}

function backSpace(){
    document.getElementById('solve').value = document.getElementById('solve').value.slice(0, -1);
    display = document.getElementById('solve').value;
}

function clearDisplay() {
    display = '';
    document.getElementById('solve').value = '';
    Calculated = false;
}

function clearAll(){
    memory = 0;
    display = '';
    document.getElementById('solve').value = '';
    Calculated = false;
}