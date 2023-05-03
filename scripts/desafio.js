function calcularIMC() {
  var altura = parseFloat(document.getElementById("altura").value);
  var peso = parseFloat(document.getElementById("peso").value);

  var imc = peso / (altura ** 2);

  var categoria = "";
  if (imc < 18.5) {
    categoria = "peso inferior";
  } else if (imc < 25) {
    categoria = "normal";
  } else if (imc < 30) {
    categoria = "sobrepeso";
  } else {
    categoria = "obesidad";
  }

  var mensaje = "Tu IMC es " + imc + ", lo que indica que tienes " + categoria;

  document.getElementById("resultado").innerText = mensaje;
}
