var alumnos = [
    {
      nombre: 'Juan Gomez',
       nota: 7
    },
    {
      nombre: 'Pedro Rodriguez',
      nota: 4
    },
    {
      nombre: 'Roxana García',
     nota: 8
    },
    {
      nombre: 'Luciano Lopez',
      nota: 5
    },
    {
      nombre: 'Fernanda Gimenez',
      nota: 6
    },
    {
      nombre: 'Florencia Martinez',
      nota: 10
    },
    {
      nombre: 'Raul Sanchez',
      nota: 7
    },
    {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];
  
  var alumnosContainer = document.getElementById('alumnos-container');
  
  alumnos.forEach(function(alumno) {
    var div = document.createElement('div');
    div.className = 'alumno';
    
    var nombre = document.createElement('span');
    nombre.textContent = alumno.nombre;
    div.appendChild(nombre);
  
    var nota = document.createElement('span');
    nota.className = 'nota';
    nota.textContent = 'Nota: ' + alumno.nota;
    div.appendChild(nota);
    
    if (alumno.nota >= 7) {
      div.classList.add('aprobado');
    }
  
    alumnosContainer.appendChild(div);
  });
  