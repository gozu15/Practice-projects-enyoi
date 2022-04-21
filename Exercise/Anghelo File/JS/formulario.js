import {DataProducts} from "../config/data.js";
let myapp = (function(){    
    let data = DataProducts();
    let id
    console.log(data);
    let CreateProduct = ()=>{
        let name = document.getElementById('nameproduct').value
        let description = document.getElementById('description').value
        let amount = document.getElementById('amount').value
        let image = document.getElementById('image').value
    
        let product_new = {
            id: data.length+1,
            name,
            description,
            amount,
            image
        }   
        data.push(product_new);
        //localStorage.clear();
        id= product_new.id;
        localStorage.setItem('product',JSON.stringify(data));       
        Init();
        console.log("SUMBIT",product_new)
    }  

    function ReloadData(){

    }
    
    function Init(){
        let bool = localStorage.getItem('product')!= undefined ?  true : false
        if(bool){
            let check = JSON.parse(localStorage.getItem('product'));            
            let lastdata = check[check.length-1];     
            if(lastdata.id === id ){
                data=[]             
                data.push(lastdata);
            }
            else{
                //data = [];
                data = check;
            }
            
        }
        else{
            console.log("dt",data)
            localStorage.setItem('product',JSON.stringify(data))
        }
        let table = document.getElementById('tbody');
        data.forEach((rows)=>{
            let product = document.createElement("div")
            product.className = "product row"
            let columnone = document.createElement("div");
            columnone.className ="col-6"
    
            let name= document.createElement("div")
            name.textContent = rows.name;
            let description = document.createElement("div")
            description.textContent = rows.description;
            let amount = document.createElement("div");
            amount.textContent = rows.amount;
    
            columnone.appendChild(name)
            columnone.appendChild(description)
            columnone.appendChild(amount)
    
            let columntwo = document.createElement("div");
            columntwo.className ="col-6"
    
            //<button type="button" class="btn btn-warning">Warning</button>
            //<i class="bi bi-pencil-square"></i><i class="bi bi-three-dots-vertical"></i>
            let button_edit =document.createElement('button');
            button_edit.className="btn btn-warning";      
            let iconedit= document.createElement("i")
            iconedit.className="bi bi-pencil-square";
            button_edit.appendChild(iconedit)
            
            let button_viewmore= document.createElement('button');
            button_viewmore.className="btn btn-primary";
            let iconviewmore = document.createElement("i");
            iconviewmore.className = "bi bi-three-dots-vertical";
            button_viewmore.appendChild(iconviewmore);
    
    //<i class="bi bi-trash3-fill"></i>
            let button_delete=document.createElement('button');
            button_delete.className="btn btn-danger";
            let icondelete = document.createElement("i");
            icondelete.className = "bi bi-trash3-fill";
            button_delete.appendChild(icondelete);
    
    
            columntwo.appendChild(button_edit);
            columntwo.appendChild(button_viewmore);
            columntwo.appendChild(button_delete)
            
            product.appendChild(columnone)
            product.appendChild(columntwo)
    
            table.appendChild(product);
    
            
        })  
        console.log("TR",table);   
    }

   

    return{
        Init : function(){
            return Init()
        },        
        escucha: function(){
            return document.getElementById('createbtn').addEventListener('click',() =>{
                CreateProduct();
            })
        }
    }
    
})();
myapp.escucha();

myapp.Init();


