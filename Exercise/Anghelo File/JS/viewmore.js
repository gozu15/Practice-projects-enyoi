
const form = (()=>{
    var remplaza = /\+/gi;
    var url = window.location.href;
    let get_variables = url.split('?');
    let stringvar= get_variables[1];
    let array=[];
    let check_var=stringvar.split('=')
    function checkUrl(){        
       for (let index = 1; index < check_var.length; index++) {
           let element = check_var[index];
           let bool = element.includes('&')
           let garbage =element.includes('%20')
           if(bool){
               let checking = element.split('&')
               array.push(checking[0]);
           }
           else{
                if(garbage){
                   element= changeGarbageFromString(element,"%20"," ")
                   array.push(element)
                }
                else{
                    array.push(element);
                }
           }
       }   
       let getImage= JSON.parse(localStorage.getItem('image')) != "" ? JSON.parse(localStorage.getItem('image')) :"../assets/images/nodata.jpg"

       let idprod = document.getElementById('id_product')
       let titleidprod = document.createElement('h3')
       titleidprod.textContent=`Id:${array[0]}`
       idprod.appendChild(titleidprod); 

       let name = document.getElementById('name_product')
       let titlename = document.createElement('h3')
       titlename.textContent=`Nombre:${array[1]}`
       name.appendChild(titlename); 

       let description = document.getElementById('description_product')
       let titledescription = document.createElement('h3')
       titledescription.textContent=`Descripcion:${array[2]}`
       description.appendChild(titledescription); 

       let amount = document.getElementById('amount_product')
       let titleamount = document.createElement('h3')
       titleamount.textContent=`Cantidad:${array[3]}`
       amount.appendChild(titleamount); 

       let image = document.getElementById('imge_product')
       let img = document.createElement('img')
       img.src=getImage
       img.style.width="150px"
       img.style.height ="170px"
       image.appendChild(img); 
    
    }
    function changeGarbageFromString(string,garbage,newchar){        
        string = string.replace(new RegExp(garbage,"gi"),newchar);        
        return string;
    }
    

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
               localStorage.setItem('image',"")
               window.location.href = "../products_component/main.html"
                console.log("VIEWMORE") 
           })
       },
       checkUrl: function(){
           return checkUrl();
       }
   }
})()
form.GoBack();
form.checkUrl();

