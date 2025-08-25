let amigos = [];


function validarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombreAmigo);
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}

   

function agregarAmigo(){
    validarAmigo();  
    console.log(amigos); 
    limpiarCaja();

}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
