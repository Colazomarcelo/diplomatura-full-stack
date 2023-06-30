function encontrarMayor() {
  const numerosInput = document.getElementById("numerosInput").value;
  const numeros = numerosInput.split(",").map(Number);
  
  let mayor = numeros[0];      // mayor valor inicial.
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];      // nuevo valor inicial mayor.
    }
  }
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = mayor + " es el número mayor. " ;
}
