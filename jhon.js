//activar boton
let btn = document.getElementById("EnviarDatos");
btn.addEventListener("click", activarFun);

function activarFun(){
    //capturar informacion clave/valor
let capClave = document.getElementById("clave").value;
let capValor = document.getElementById("valor").value;

if(capClave == "" || capValor == ""){

    alert("debes rellenar todo");
}else{

    localStorage.setItem(capClave,capValor);
}





}

function mostrarDatos(){

    let mostrarValor = localStorage.getItem()
}

