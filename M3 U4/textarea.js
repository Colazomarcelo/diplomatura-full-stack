function contarCaracteres() {
    var textarea = document.getElementById("texto");
    var contador = document.getElementById("contador");
    var caracteresRestantes = textarea.value.length;
  
    contador.textContent = caracteresRestantes;
  }
  