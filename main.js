// Declaramos las variables...
let userURL = document.getElementById("userURL"); 
let outputURL = document.getElementById("output");
let outputString = document.getElementById("codeOut");
let outputHTML = document.getElementById("outputHTML");
let forceBreak = '<span style="font-size:1px;color:#fff;">&nbsp;</span>';
let btn = document.getElementById("getCode");
let btn2 = document.getElementById("getCodeMC");


// Funcion principal (deglosar URL)
function doSomething() {
    const newURL= document.getElementById("userURL").value;
    const splitURL=newURL.toString().split(".");
    const newWWW = splitURL[0] + '.' + forceBreak;
    const killDomain = forceBreak + '.' + splitURL[2];
    const noWWW = forceBreak + '.' + splitURL[1];
    const x = document.forms["myForm"]["userURL"].value;

    if (newURL.includes("www.")) {
        outputString.value = newWWW + splitURL[1] + killDomain;
        outputHTML.innerHTML = newWWW + splitURL[1] + killDomain;
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn2.classList.remove('disabled');
        btn2.disabled = false;
    } //else if (newURL.includes("https")) {
        //return false;
    //}
    else {
    outputString.value = splitURL[0] + noWWW;
    outputHTML.innerHTML = splitURL[0] + noWWW;
    btn.classList.remove('disabled');
    btn.disabled = false;
    btn2.classList.remove('disabled');
    btn2.disabled = false;
    }

    if (x == "w") {
        userURL.setAttribute("valid", "false");
        outputString.value = '';
        }

    if (x == "ww") {
    userURL.setAttribute("valid", "false");
    outputString.value = '';
    }

    if (x == "www") {
        userURL.setAttribute("valid", "true");
        }

}

// Borra formulario y reinicia todo
function clearAll() {
    userURL.value = '';
    outputString.value = '';
    outputHTML.innerHTML = 'Aquí saldrá el código…';
    btn.classList.add('disabled');
    btn.disabled = true;
    btn2.classList.add('disabled');
    btn2.disabled = true;
}

// Fuerza un ejemplo
function fillAll() {
    userURL.value = 'www.google.com';
    btn.classList.remove('disabled');
    btn.disabled = false;
    btn2.classList.remove('disabled');
    btn2.disabled = false;
    doSomething();
}

// Copiar código al portapapeles
function copiarHTML() {
    var copyText = document.getElementById("codeOut");
    let snackBar = document.getElementById("snackbar");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

    navigator.clipboard.writeText(copyText.value);

    snackBar.innerText = "Versión HTML copiada al portapapeles!";
    snackBar.className = "show";
    setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);

}

// Copiar versión WYSIWYG
function copiarMC() {
    var target = document.getElementById('outputHTML');
    var snackBar = document.getElementById("snackbar");
var range, select;
if (document.createRange) {
range = document.createRange();
range.selectNodeContents(target)
select = window.getSelection();
select.removeAllRanges();
select.addRange(range);
document.execCommand('copy');
select.removeAllRanges();
snackBar.innerText = "Versión WYSIWYG copiada al portapapeles!";
    snackBar.className = "show";
    setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
} else {
range = document.body.createTextRange();
range.moveToElementText(target);
range.select();
document.execCommand('copy');
}
} 


// Previene enviar el form
var form = document.getElementById("myForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

// Acciones de los inputs
document.getElementsByClassName('grabURL')[0].addEventListener('keyup', function() {
    doSomething();
})

document.getElementsByClassName('fillForm')[0].addEventListener('click', function() {
    fillAll();
})

document.getElementsByClassName('html')[0].addEventListener('click', function() {
    copiarHTML();
})

document.getElementsByClassName('mc')[0].addEventListener('click', function() {
    copiarMC();
})

document.getElementsByClassName('clear')[0].addEventListener('click', function() {
    clearAll();
})