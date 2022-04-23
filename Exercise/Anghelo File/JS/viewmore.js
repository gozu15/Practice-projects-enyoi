
const form = (()=>{
    var remplaza = /\+/gi;
    var url = window.location.href;
    let get_variables = url.split('?');
    let stringvar= get_variables[1];
    let array=[];
    let check_var
    for (let index = 0; index < 4; index++) {       
        check_var= stringvar.indexOf('=');
        console.log("ORIGI",stringvar);
        console.log("ORIGI",check_var);
        array.push(stringvar[check_var+1]);
        stringvar.replace('=','+') 
        console.log(stringvar[check_var]);
    }
    // url = unescape(url);
    // url = url.replace(remplaza, " ");
    // url = url.toUpperCase();
    console.log(array);

    function obtener_valor(variable) {
        //var variable_may = variable.toUpperCase();
         var variable_pos = url.indexOf(variable);
         console.log(variable_pos)
   }
   

   return {
       obtener_valor: function(){
           return obtener_valor();
       },
       GoBack: function(){
           return document.getElementById("btnback").addEventListener('click',()=>{
               window.location.href = "../products_component/main.html"
                console.log("VIEWMORE") 
           })
       } 
   }
})()
form.GoBack();

