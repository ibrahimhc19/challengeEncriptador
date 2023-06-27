const paraEncriptar = document.querySelector(".paraEncriptar");
const paraDesencriptar = document.querySelector(".paraDesencriptar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encriptar(textoParaEncriptar) {
    let arregloCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoParaEncriptar = textoParaEncriptar.toLowerCase();

    for (let i = 0; i < arregloCodigo.length; i++) {
        if (textoParaEncriptar.includes(arregloCodigo[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(arregloCodigo[i][0], arregloCodigo[i][1]);
        }
    }
    return textoParaEncriptar;
}

function botonEncriptar() {
    const stringEncriptado = encriptar(paraEncriptar.value);
    paraDesencriptar.value = stringEncriptado;
    paraEncriptar.value = "";
    paraDesencriptar.style.backgroundImage = "none";
}

function desencriptar(textoEncriptado) {
    let arregloCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < arregloCodigo.length; i++) {
        if (textoEncriptado.includes(arregloCodigo[i][1])) {
            textoEncriptado = textoEncriptado.replaceAll(arregloCodigo[i][1], arregloCodigo[i][0]);
        }
    }
    return textoEncriptado;
}

function botonDesencriptar() {
    const stringDesencriptado = desencriptar(paraEncriptar.value);
    paraEncriptar.value = "";
    paraDesencriptar.value = stringDesencriptado;
    paraDesencriptar.style.backgroundImage = "none";
}