$(document).ready(function () {
  // VALIDACIÓN FORMULARIO DE CONTACTO
  $('#formContacto').submit(function (e) {
    e.preventDefault(); // Evita el envío real

    const correo = $('#email').val().trim();

    // Expresión regular para validar email simple
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de email
    if (!emailValido.test(correo)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }

    // Se muestra mensaje de contacto exitoso
    $('#mensajeExito').removeClass('d-none');

    // Limpia formulario
    this.reset();
  });

  //TEST DE SEGURIDAD
  $('#formTestSeguridad').submit(function (e) {
      e.preventDefault(); // Evita el envío real

      const correctas = { //Respuestas correctas
        p1: 'a',
        p2: 'c',
        p3: 'a'
      };

      let puntaje = 0;
      let faltantes = false;

      // Validar respuestas seleccionadas
      $.each(correctas, function (pregunta, respuestaCorrecta) {
        const seleccionada = $('input[name="'+pregunta+'"]:checked').val();
        if (!seleccionada) {
          faltantes = true;
        } else if (seleccionada === respuestaCorrecta) {
          puntaje++;
        }
      });

      const $resultado = $('#resultadoTest');

      if (faltantes) {
        $resultado
          .text('Por favor responde todas las preguntas antes de enviar.')
          .removeClass('text-success text-danger')
          .addClass('text-warning')
          .show();
      } else {
        if (puntaje === 3) {
          $resultado
            .text('¡Excelente! Has respondido todo correctamente.')
            .removeClass('text-danger text-warning')
            .addClass('text-success')
            .show();
        } else {
          $resultado
            .text(`Has respondido correctamente ${puntaje} de 3 preguntas. ¡Sigue aprendiendo!`)
            .removeClass('text-success text-warning')
            .addClass('text-danger')
            .show();
        }
      }
    });
});
