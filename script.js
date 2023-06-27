const paraEncriptar = document.querySelector(".paraEncriptar");
const paraDesencriptar = document.querySelector(".paraDesencriptar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encriptar(textoEncriptado) {
    let arregloCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < arregloCodigo.length; i++) {
        if (textoEncriptado.includes(arregloCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(arregloCodigo[i][0], arregloCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function botonEncriptar() {
    const stringEncriptado = encriptar(paraEncriptar.value);
    paraDesencriptar.value = stringEncriptado;

}