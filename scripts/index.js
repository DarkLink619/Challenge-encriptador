//Inputs y Acciones
var paraEncriptar = document.getElementById("encriptar");
var encriptado = document.getElementById("encriptado");
var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonLimpiar = document.querySelector("#boton-borrar");
var botonCopiar = document.querySelector("#boton-copiar");

//Text area de texto encriptado desactivada
encriptado.disabled = true;

//Funcion de copiar
botonCopiar.onclick = function copiar() {

    //llamamos al elemento y lo guardamos en una variable local
    var copiarTextoEncriptado = document.getElementById("encriptado").value;
    navigator.clipboard.writeText(copiarTextoEncriptado); //se guarda en el clipboard

    //notificacion de texto copiado
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'success',
        title: 'Texto Copiado'
    })

}

//Funcion limpiar
botonLimpiar.onclick = function clear() {
    document.getElementById("encriptar").value = "";
    document.getElementById("encriptado").value = "";
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//Codigo para encriptar, funcion encriptado
botonEncriptar.onclick = function() {

    /*Creamos una variable local que llame al textarea
    para convertir todo el contenido en minuscula*/
    var resultadoEncriptado = paraEncriptar.value.toLowerCase(); 

    //en este caso usamos la funcion replace en conjunto de un switch
    let resultadotexto = resultadoEncriptado.replace (/[aeiou]/g, function(vocal) {

        switch (vocal){
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "a":
                return "ai";
            case "o":
                return "ober";
            case "u":
                return "ufat"
            default:
                break;
        }
    });

    //agregamos el texto encriptado al area correspondiente
    document.getElementById("encriptado").value = resultadotexto;

    //vaciamos el area principal
    document.getElementById("encriptar").value = "";

}

//Codigo para la segunda funcion, desencriptar
botonDesencriptar.onclick = function() {

    /*Reutilizamos el codigo anterior par ahorrar tiempo,
    solo hacemos algunas modificaciones*/
    var resultadoEncriptado = paraEncriptar.value.toLowerCase(); 

    //en este caso usamos la funcion replace en conjunto de un switch
    let resultadotexto = resultadoEncriptado.replace (/(enter|imes|ai|ober|ufat)/g, function(texto) {

        switch (texto){
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u"
            default:
                break;
        }
    });

    //agregamos el texto encriptado al area correspondiente
    document.getElementById("encriptado").value = resultadotexto;

    //vaciamos el area principal
    document.getElementById("encriptar").value = "";

}