import {DataProducts} from "../config/data.js";
let data = DataProducts();
console.log(data);
function Init(){
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

        // tdname.textContent= rows.name
        // table.appendChild(product); 

        // let tdlastname = document.createElement("td");
        // tdlastname.textContent= rows.lastname
        // tr.appendChild(tdlastname);      

        // let tdaddress = document.createElement("td");
        // tdaddress.textContent= rows.address   
        // tr.appendChild(tdaddress);

        
    })  
    console.log("TR",table);   
}
function OnSubmitcheck(){
    console.log("SUMBIT")
}
Init();
