let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultadoSorteo = document.getElementById("resultado");


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

function listarAmigos(){
    
    let elementosLista = "";
    
    for (let i = 0; i < amigos.length; i++) {
        elementosLista += `<li>${amigos[i]}</li>`;
    }
    return lista.innerHTML = elementosLista;
}

function limpiarLista() {
    lista.innerHTML = "";
}

function agregarAmigo(){
    validarAmigo();  
    console.log(amigos); 
    limpiarCaja();
    limpiarLista();
    listarAmigos();

}

function sortearAmigo(){
    if (amigos == "") {
        alert("Debe ingresar amigos para el sorteo");
    }else{
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        console.log(numeroSorteado);
        resultadoSorteo.innerHTML = `<li>Te ha tocado como amigo secreto a: ${amigos[numeroSorteado]}`;
    }
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
