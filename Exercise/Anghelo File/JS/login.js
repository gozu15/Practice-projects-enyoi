const myapp=(()=>{
    const url = "http://localhost:3000/accounts"
    let data =[];
    let logged= false;
    async function LogIn(){
        let user= document.getElementById('user_input').value
        let password = document.getElementById('pass_input').value
        await fetch(url,{method:'GET'})
        .then(response =>{
            //console.log(response.json());
             data = response.json().then(dataaux =>{
                dataaux.forEach(element => {
                    if(element.user == user){
                        if(element.password == password){
                            GoMenu();
                        }
                        else{
                            let exception = new ExceptionUsuario("Error en la contraseña")   
                            BuildAlert();                        
                            throw exception

                        }
                    }
                });
             })
            
        })
        .catch(err =>{
            console.log(err)
        })
       
    }

    function BuildAlert(){
        let boxalert
        let alert
        boxalert = document.getElementById('alert-box')
            alert = document.createElement('div')
            alert.className="alert alert-danger"
            alert.id="alertbox"
            alert.role ="alert"
            alert.textContent="Ocurrio un error";
            boxalert.appendChild(alert)
        setTimeout(()=>{
            alert= document.getElementById('alertbox').style.display = 'none'
        },2000)
        

        


    }

    function ExceptionUsuario(mensaje) {
        this.mensaje = mensaje;
        this.nombre = "ExceptionUsuario";
     }

    function GoMenu(){
        window.location.href="../products_component/main.html"
    }
    return{
        LogIn:function(){            
            return LogIn();
        },
        enterLogin: function(){
            return document.getElementById('btnlogin').addEventListener('click',()=>{
                LogIn();
            })
        }
    }
})()
myapp.enterLogin();