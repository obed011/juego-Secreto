let numeroSecreto;
let intentos=0;
let numerosSorteados=[];
let numeroMaximo=10;
condicionesIniciales();
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentarJuego() {
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero, en ${intentos} ${(intentos==1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if(numerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }
    else{
    if (numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
