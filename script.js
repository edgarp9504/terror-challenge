document.addEventListener("DOMContentLoaded", function () {
    const muertes_graciosas = {
        "muertes_graciosas": [
          {
            "motivo": "Murió de risa al ver a un pato bailando salsa",
            "fecha": "2055-07-15"
          },
          {
            "motivo": "Fue aplastado por una montaña de peluches",
            "fecha": "2056-03-22"
          },
          {
            "motivo": "Se convirtió en un zombie después de comer pizza con piña",
            "fecha": "2057-09-10"
          },
          {
            "motivo": "Explotó por comer demasiados tacos en una competencia",
            "fecha": "2058-12-05"
          },
          {
            "motivo": "Fue perseguido por un ejército de patitos de goma asesinos",
            "fecha": "2060-08-30"
          },
          {
            "motivo": "Se convirtió en un unicornio y voló hacia el arco iris",
            "fecha": "2061-04-18"
          },
          {
            "motivo": "Chocó con una pared invisible en un videojuego y se desvaneció",
            "fecha": "2062-06-11"
          },
          {
            "motivo": "Fue víctima de una conspiración de gatos que buscaban venganza",
            "fecha": "2063-02-27"
          },
          {
            "motivo": "Se volvió invisible y nadie supo dónde estaba",
            "fecha": "2064-11-19"
          },
          {
            "motivo": "Resbaló con una cáscara de plátano y cayó al abismo del absurdo",
            "fecha": "2065-07-03"
          }
        ]
      }

    const mostrarMotivoBtn = document.querySelector('#guardarDatos');
    const motivoModal = document.querySelector('#motivoModal');
    const motivoTexto = document.querySelector('#motivoTexto');
    const cerrarModalBtn = document.querySelector('#cerrarModal');
    const sangreContainer = document.querySelector('#sangreContainer');

    // Ocultar el cuadro de diálogo modal al principio
    motivoModal.style.display = 'none';
    sangreContainer.style.display = 'none';

    // Función para mostrar la animación de sangre
    function mostrarSangre() {
        sangreContainer.style.display = 'flex';
        setTimeout(function () {
            sangreContainer.style.display = 'none';
        }, 2000);
    }

    mostrarMotivoBtn.addEventListener('click', () => {
        const fechaNacimiento = new Date(document.querySelector('#fechaNacimiento').value);
        const indiceAleatorio = Math.floor(Math.random() * muertes_graciosas.muertes_graciosas.length);
        const fechaMuerte = new Date(muertes_graciosas.muertes_graciosas[indiceAleatorio].fecha);

        const diferenciaFechas = fechaMuerte - fechaNacimiento;
        const msPorAnio = 1000 * 60 * 60 * 24 * 365.25; // Aproximadamente la cantidad de milisegundos en un año considerando años bisiestos.
        const anosRestantes = Math.floor(diferenciaFechas / msPorAnio);

        const nombreCompleto = document.querySelector('#nombreCompleto').value;
        const motivoDeMuerte = muertes_graciosas.muertes_graciosas[indiceAleatorio].motivo;

        motivoTexto.innerHTML = `Nombre: <strong>${nombreCompleto}</strong><br>Motivo de Muerte: ${motivoDeMuerte}<br>Te quedan aproximadamente <strong>${anosRestantes}</strong> años de vida hasta <br><strong>${muertes_graciosas.muertes_graciosas[indiceAleatorio].fecha}</strong>.`;
        motivoModal.style.display = 'flex';
        mostrarSangre();
    });

    cerrarModalBtn.addEventListener('click', () => {
        motivoModal.style.display = 'none';
    });
});
