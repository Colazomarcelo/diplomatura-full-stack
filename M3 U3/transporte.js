document.getElementById("calcularBtn").addEventListener("click", function() {
    var distanciaInput = document.getElementById("distancia");
    var distancia = parseInt(distanciaInput.value);
    var resultado = document.getElementById("resultado");
  
    if (isNaN(distancia)) {
      resultado.textContent = "Ingrese una distancia válida.";
      resultado.style.color = "red";
    } else {
      var medioTransporte = determinarMedioTransporte(distancia);
      resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es " + medioTransporte;
      resultado.style.color = "#333";
    }
  });
  
  function determinarMedioTransporte(distancia) {
    if (distancia <= 1000) {
      return "solamente a pie";
    } else if (distancia <= 10000) {
      return "en bicicleta";
    } else if (distancia <= 30000) {
      return "el colectivo";
    } else if (distancia <= 100000) {
      return "el auto";
    } else {
      return "el avión";
    }
  }
  