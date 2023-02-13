const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const copia = document.querySelector(".copy");
copia.style.display = "none";

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);
    if(!validador || validador === 0){
        alert("solo letras minusculas y sin acentos");
        /*swal({
            title: "Solo letras minusculas y sin acentos!",
            /*text: "You clicked the button!",
            icon: "error",
            button: "Ok!",
          });
        location.reload();*/
        return false;
    }

}

function btnEncriptar(){
    if(!validarTexto()){
    const textoEncriptado = encriptar(textArea.value);
    message.value = textoEncriptado;
    message.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
}
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada  = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    message.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada;
}

function copy(){
    message.select();
    textArea.value = message.value;
   navigator.clipboard.writeText(message.value);
    textArea.select();
   message.value = "";

  
   /*alert('Texto copiado!','continuar','success');*/
   swal({
    title: "Texto copiado!",
    /*text: "You clicked the button!",*/
    icon: "success",
    button: "Ok!",
  });
}