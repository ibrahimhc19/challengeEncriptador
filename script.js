const paraEncriptar = document.querySelector(".paraEncriptar");
const paraDesencriptar = document.querySelector(".paraDesencriptar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



// Funcion para encriptar
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

// Funcion para el boton de encriptar
document.getElementById('encriptar').onclick = botonEncriptar;
function botonEncriptar() {
  const stringEncriptado = encriptar(paraEncriptar.value);
  paraDesencriptar.value = stringEncriptado;
  paraEncriptar.value = "";
  paraDesencriptar.style.backgroundImage = "none";
  let botonCopy = document.getElementById("copy");
  botonCopy.style.display = "block";
}


// Funcion para desencriptar
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


// Funcion para el boton de desencriptar
document.getElementById("desencriptar").onclick = botonDesencriptar;
function botonDesencriptar() {
  const stringDesencriptado = desencriptar(paraEncriptar.value);
  paraEncriptar.value = "";
  paraDesencriptar.value = stringDesencriptado;
  paraDesencriptar.style.backgroundImage = "none";
}

// Funcion para copiar al textarea1 y al portapapeles
document.getElementById("copy").onclick=copiar;
function copiar() {
  let texto = document.getElementById("campo2").value;
  document.getElementById("campo2").value = " ";
  document.getElementById("campo1").value = texto;

  let botonCopy = document.getElementById("copy");
  botonCopy.style.display = "none";

  paraDesencriptar.style.backgroundImage = "";



//   alert("Copiado al portapapeles y al campo de entrada");

}
