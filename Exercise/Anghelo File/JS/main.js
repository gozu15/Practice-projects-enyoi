function PlayOperation(){
    let checkOperation = document.getElementById('calculate');
    let getFirstNumber= document.getElementById('num1').value;
    let getSecondNumber= document.getElementById('num2').value;
    let getBoxResult = document.getElementById('result')
    let result;
    let getOperation = checkOperation.options[checkOperation.selectedIndex].value;
    if(getOperation == "suma"){
        result = Sum(getFirstNumber,getSecondNumber);
        BuildResult(getBoxResult,result);
    }   
    if(getOperation == "resta"){

    }
    if(getOperation == "Multiplicacion"){

    }
    if(getOperation == "Division"){

    }
   
}
function BuildResult(namebox,result){
    const div = namebox
    div.innerHTML = "El resultado es: " +result   
}
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