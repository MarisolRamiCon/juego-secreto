let numeroSecreto= 0;
let intentos=1;
let listaNumerosSorteados =[];
let numeroMaximo=10;

//Declaracion de función
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//getElementById obtengo el elemento por id.
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){//igual en valor e igual en tipo de dato
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez': 'veces'} `); //Utilizamos el mismo parrafo que teniamos
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto y queremos crear una funcion que limpie el input
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo);
    //Si ya sorteamos todos los numeros mostrar un mensaje
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }else{
        //Almacenar valores en la lista
        //Si el numero generado esta incluido en la lista hacemos una operacion, si no pues no
        
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();


        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio e intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
}

condicionesIniciales();
