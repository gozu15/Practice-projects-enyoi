function Calculate(){
    let input = document.getElementById("input-number");
    let getoperation = input.value;
    let multiply = getoperation.indexOf('*');
    let sum = getoperation.indexOf('+')
    let rest = getoperation.indexOf('-')
    let divide = getoperation.indexOf('/');
    let index =0;
    let checkOperationstodo = CountOperationsInString(getoperation);
  // while(checkOperationstodo >=0){
    
        if(multiply!= -1){
           
            //checkOperationstodo =0;
            // multiply = valueaux.indexOf('*');   
            //checkOperationstodo -= 1
            input.value = ResolveOperation(input.value,multiply)

            console.log("MUTI2",multiply);
            console.log("check2",checkOperationstodo);
        }
        else{
            
            if(divide != -1){
                // multiply = valueaux.indexOf('/');   
            checkOperationstodo -= 1
            input.value = ResolveOperation(input.value,divide)

            }
            else if(sum != -1){
                // multiply = valueaux.indexOf('+');   
            checkOperationstodo -= 1
            input.value = ResolveOperation(input.value,sum)

            }
            else if(rest !=-1){
                // multiply = valueaux.indexOf('-');   
            checkOperationstodo -= 1
            input.value = ResolveOperation(input.value,rest)

            }
        }     
        //checkOperationstodo = CountOperationsInString(input.value);
        
   //}
    
}
function ResolveOperation(poperation,position){
    let valueaux = poperation;  
    let buildnumberone=""; 
    let buildnumbertwo="";
    //TODO 
    for (let index = 0; index < position; index++) {
        const element = poperation[index];
        buildnumberone = buildnumberone+element;
    }

    for (let index = position+1; index <= poperation.length -1; index++) {
        const element = poperation[index];
        buildnumbertwo = buildnumbertwo+element;
    }

    let numberoneaux = buildnumberone;
    let operationaux = valueaux[position];
    let numbertwoaux= buildnumbertwo;
    let auxoperacion = numberoneaux+operationaux+numbertwoaux;
   //console.log("multi",multiply);
   console.log("AUXOPER",auxoperacion)

    let result = ExecuteOperation(numberoneaux,numbertwoaux,operationaux);
    let aux = poperation;
    
    aux = aux.replace(""+auxoperacion,""+result);               
    return aux;    
   
}

function PressNumber(pnumber){
    let input = document.getElementById("input-number");
    let inputtext =(input.value != null ? input.value + pnumber : pnumber);
    input.value = inputtext;
    input.focus();
}
function PressOperation(poperation){
    let input = document.getElementById("input-number");
    let operation =  (input.value == null ? "0" + poperation : input.value+poperation);
    let checkOperationDouble = input.value;
    checkOperationDouble = checkOperationDouble[checkOperationDouble.length -1] == '+' ||
    checkOperationDouble[checkOperationDouble.length -1] == '-' ||
    checkOperationDouble[checkOperationDouble.length -1] == '*' || 
    checkOperationDouble[checkOperationDouble.length -1] == '/' ? true : false
    console.log("CHE",checkOperationDouble);
    if(checkOperationDouble)
    {
        let aux = ""+input.value;
        aux = aux.slice(0,parseInt(aux.length)- 1)       
        aux =aux+poperation;            
        input.value = aux;
    }
    else{
        input.value = operation;
    }
    // input.addEventListener('change',GetChange())
    
    input.focus();
}

function ExecuteOperation(numberone, numbertwo,operation){
    let response =0;
    if(operation == '+'){
        response= Sum(numberone,numbertwo);
    }
    else{
        if(operation == '-')
        {
            response = Rest(numberone,numbertwo);
        }
        else{
            if(operation == '*'){
                response = Multiply(numberone,numbertwo);
            }
            else{
                response = Divide(numberone,numbertwo);
            }
        }
    }
    return response;
}

function CountOperationsInString(string){
    let cont =0;
    let checklongstring = string.length;   
    for (let index = 0; index < checklongstring; index++) {
        let element = string[index];
        element = element == '+' ||
         element == '-' ||
         element == '*' || 
         element == '/' ? true : false
         if(element){
             cont ++;
         }
    }
    return cont;  
}


    let input = document.getElementById('input-number');
    input.addEventListener('keyup',function(e){
        let keycode = e.keyCode;
        console.log(keycode)
        if (keycode == 13) {
           Calculate()           
        }
    })


function Sum(numOne,numTwo){
    return parseInt(numOne) + parseInt(numTwo);
}
function Rest(numOne,numTwo){
    return parseInt(numOne) - parseInt(numTwo);
}
function Multiply(numOne,numTwo){
    return parseInt(numOne) * parseInt(numTwo);
}
function Divide(numOne,numTwo){
    return parseInt(numOne) / parseInt(numTwo);
}
function ClearData(){
    let input = document.getElementById("input-number");
    input.value = null;
}
