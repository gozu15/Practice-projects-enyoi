import {DataProducts} from "../config/data.js";
let myapp = (function(){    
    let data = DataProducts();
    let id   
    console.log(data);
    let cont =3;
    let base64String = "";
    
    let CreateProduct = ()=>{
        let name = document.getElementById('nameproduct').value
        let description = document.getElementById('description').value
        let amount = document.getElementById('amount').value
        //let image = document.getElementById('image').value
    
        let product_new = {
            id: cont+1,
            name,
            description,
            amount,
            image:base64String
        }   
        data.push(product_new);
       
        //id= product_new.id;
        localStorage.setItem('product',JSON.stringify(data));        
        Init();
        console.log("SUMBIT",product_new)
    }  

    function DeleteProduct(row){
        let product =JSON.parse(localStorage.getItem('product')); 
        console.log("ACTUALZIAR",row)
        let dataaux= product.filter((item) => item.id != row.id);
        localStorage.setItem("product",JSON.stringify(dataaux))
        Init();
        console.log(dataaux);
    }
    function UpdateProduct(row){
        console.log("ACTUALZIAR",row)
        id= row.id
        let nameproduct = document.getElementById('nameproduct')
        nameproduct.value=row.name
        let description =document.getElementById('description')
        description.value=row.description
        let amount =document.getElementById('amount')
        amount.value=row.amount
        document.getElementById('createbtn').style.display = 'none'
        document.getElementById('updatebtn').style.display = ''
        document.getElementById('cancelbtn').style.display = ''
        //TODO 
        //Cambiar imagen de un producto
        

    }

    function Update(){
        let nameproduct = document.getElementById('nameproduct').value
        
        let description =document.getElementById('description').value
       
        let amount =document.getElementById('amount').value
        

        let list = JSON.parse(localStorage.getItem('product'));
        list.forEach(element => {
            if(element.id === id){
                element.name = nameproduct,
                element.description = description,
                element.amount = amount,
                element.image = base64String
            }
        });

        localStorage.setItem('product',JSON.stringify(list))
        Init()
        CancelUpdateProduct();
        console.log('check',list);
    }

    function CancelUpdateProduct(){        
        let nameproduct = document.getElementById('nameproduct')
        nameproduct.value=null
        let description =document.getElementById('description')
        description.value=null
        let amount =document.getElementById('amount')
        amount.value=null
        document.getElementById('createbtn').style.display = ''
        document.getElementById('updatebtn').style.display = 'none'
        document.getElementById('cancelbtn').style.display = 'none'
        //TODO 
        //Cambiar imagen de un producto
        

    }

    function ViewMore(row){
//         id name
// image
// amount
// description
        window.location.href = `../products_component/viewmore.html?id=${row.id}&name=${row.name}&amount=${row.amount}&description=${row.description}`;
        console.log("VIEWMORE")
    }
    
    function Init(){
        let bool = localStorage.getItem('product')!= undefined ?  true : false
       
        if(bool){
            let products = JSON.parse(localStorage.getItem('product'));
            data = products
        }
        else{
            localStorage.setItem('product', JSON.stringify(data));           
        }

        let table = document.getElementById('tbody');
        if(table.children.length >=1){
            while (table.firstChild) {
            table.removeChild(table.firstChild);
          }
        }        
       
        data.forEach((rows)=>{
            let product = document.createElement("div")
            product.className = "product row"
            let columnone = document.createElement("div");
            columnone.className ="col-4"
    
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
            columntwo.className ="col-4"
    
            let img = document.createElement('img')
            img.className = "img-product"
            img.src = rows.image != "" ? rows.image : "../assets/images/nodata.jpg"
            img.style.width = '100px'
            img.style.height = '80px'          
            columntwo.style.justifyContent ='center'
            columntwo.style.display = 'flex'
            columntwo.style.alignItems = 'center'
            columntwo.appendChild(img);            

            let columnthree = document.createElement("div");
            columnthree.className ="col-4"    
          
            let button_edit =document.createElement('button');
            button_edit.className="btn btn-warning";      
            button_edit.addEventListener('click',()=>{
                UpdateProduct(rows);
            })
            let iconedit= document.createElement("i")
            iconedit.className="bi bi-pencil-square";
            button_edit.appendChild(iconedit)
            
            let button_viewmore= document.createElement('button');
            button_viewmore.className="btn btn-primary";
            button_viewmore.addEventListener('click',() =>{
                ViewMore(rows);
            })
            let iconviewmore = document.createElement("i");
            iconviewmore.className = "bi bi-three-dots-vertical";
            button_viewmore.appendChild(iconviewmore);    
    
            let button_delete=document.createElement('button');
            button_delete.className="btn btn-danger";
            button_delete.addEventListener('click',()=>{
                DeleteProduct(rows)
            })
            let icondelete = document.createElement("i");
            icondelete.className = "bi bi-trash3-fill";
            button_delete.appendChild(icondelete);
    
    
            columnthree.appendChild(button_edit);
            columnthree.appendChild(button_viewmore);
            columnthree.appendChild(button_delete)
            
            product.appendChild(columnone)
            product.appendChild(columntwo)
            product.appendChild(columnthree)
    
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
        },
        cancelupdate: function(){
            return document.getElementById('cancelbtn').addEventListener('click',() =>{
                CancelUpdateProduct();
            })
        },
        update:function (){
            return document.getElementById('updatebtn').addEventListener('click',()=>{
                Update();
            })
        },
        getImage:function (){
            return document.getElementById('image').addEventListener('change',(event) =>{
                console.log(event.target.files[0])
                let file = event.target.files[0];
                var reader = new FileReader();               
                reader.onload = function () {
                    base64String = reader.result
                    // .replace("data:", "")
                    //     .replace(/^.+,/, "");           
                   
                    console.log(base64String);
                }
                reader.readAsDataURL(file);
                
            })
        }
    }
    
})();
myapp.escucha();
myapp.cancelupdate();
myapp.getImage();
myapp.update();

myapp.Init();


