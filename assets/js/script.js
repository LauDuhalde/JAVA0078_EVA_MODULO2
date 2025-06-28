$(document).ready(function () {
  // SE HACE CLICK EN EL BOTÓN RESERVA Y AUTOMATICAMENTE SALE EL NOMBRE DE LA PELICULA QUE SE ESTÁ DESEANDO RESERVAR
  $('.btn-reserva').click(function () {
    const titulo = $(this).closest('.card').find('.card-title').text();
    $('#pelicula').val(titulo);
  });

  // VALIDACIÓN + MENSAJE DE LA RESERVA
  $('#formReserva').submit(function (e) {
    e.preventDefault(); // Evita el envío real

    const tarjeta = $('#tarjeta').val().trim();
    const cvv = $('#cvv').val().trim();

    // VALIDACIÓN DE TARJETA , QUE TENGA 16 DIGITOS
    if (!/^\d{16}$/.test(tarjeta)) {
      alert("El número de tarjeta debe tener exactamente 16 dígitos.");
      return;
    }

    // VALIDAR QUE EL CODIGO CVV TENGA 3 DIGITOS
    if (!/^\d{3}$/.test(cvv)) {
      alert("El CVV debe tener exactamente 3 dígitos.");
      return;
    }

    const ultimos4 = tarjeta.slice(-4);

    // USO DE ICONOS FONT AWESOME - PARA VALIDACIÓN DEL MENSAJE DE COMPRA
    const mensajeHTML = `
      <h5><i class="fa-solid fa-circle-check text-success"></i> Reserva exitosa</h5>
      <p><i class="fa-solid fa-clapperboard"></i> <strong>Película:</strong> ${$('#pelicula').val()}</p>
      <p><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> ${$('#horario').val()}</p>
      <p><i class="fa-solid fa-chair"></i> <strong>Asientos:</strong> ${$('#asientos').val()}</p>
      <p><i class="fa-solid fa-credit-card"></i> <strong>Tarjeta:</strong> **** **** **** ${ultimos4}</p>
      <p>¡Gracias por su compra!</p>
    `;

    // MENSAJE DE COMPRA
    $('#mensajeExito').html(mensajeHTML).removeClass('d-none');

    // LIMPIA FORMULARIO
    this.reset();
    $('#modalReserva').modal('hide');
  });
});
