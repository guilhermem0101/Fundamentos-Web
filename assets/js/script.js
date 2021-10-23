
/*
Tag: getElementByTagName()
Id: getElementById()
Nome: getElementByName()
classe: getElementByClassName()
Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false

/*nome.style.width = '100%'
email.style.width = '25%'*/

function validaNome () {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <3) {
       txt.innerHTML = "Nome invalido"
       txt.style.color = "red"
    }

    else {
        txt.innerHTML = "Nome valido"
        txt.style.color = "green"
        nomeOK = true
    }
}

function validaEmail () {
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf("@") ==-1 || email.value.indexOf(".") ==-1 ) {
       txt.innerHTML = "E-mail invalido"
       txt.style.color = "red"
    }

    else {
        txt.innerHTML = "E-mail valido"
        txt.style.color = "green"
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Limite de 10 caracteres excedido"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else {
        txtAssunto.style.display = "none"
       assuntoOK = true
    }

}
 function enviar(){
     if (nomeOK == true && emailOK == true && assuntoOK == true){
         alert ("Formulario enviando com sucesso")
     }
     else{
         alert("Verifique o formulario")
     }

 }