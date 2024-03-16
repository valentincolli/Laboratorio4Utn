// Función para mostrar los detalles del producto en una ventanita o popup
function showProductDetails(imageSrc, productName, productDescription, deliveryTime, implementation, licensing, price, paymentMethods) {
    // Crea un nuevo div para el popup
    var popup = document.createElement("div");
    popup.classList.add("popup"); // Agrega una clase al div

    var content = `
      <div class="popup-content">
        <img src="${imageSrc}" alt="${productName}">
        <h2>${productName}</h2>
        <p>${productDescription}</p>
        <h3>Información adicional:</h3>
        <ul>
          <li><strong>Plazos de entrega:</strong> ${deliveryTime}</li>
          <li><strong>Puesta en marcha:</strong> ${implementation}</li>
          <li><strong>Formas de contratación y/o licencia:</strong> ${licensing}</li>
          <li><strong>Precio:</strong> ${price}</li>
          <li><strong>Formas de pago:</strong> ${paymentMethods}</li>
        </ul>
        <button class="btn btn-secondary"onclick="closeProductPopup()">Volver</button>
        <button class="btn btn-primary"onclick="redirectToContactPage('${productName}')">Consultar</button>
      </div>
    `;
    popup.innerHTML = content; // Agregamos el contenido al div del popup

    document.body.appendChild(popup); // Agregamos el popup al cuerpo del documento
}

// Función para cerrar el popup
function closeProductPopup() {
    var popup = document.querySelector(".popup"); // Seleccionamos el popup
    popup.parentNode.removeChild(popup); // Eliminamos el popup del DOM
}

// Función para redirigir a la página de contacto con el nombre del producto en la URL
function redirectToContactPage(productName) {
    window.location.href = "contacto.html?product=" + encodeURIComponent(productName);
}
document.getElementById('boton-whatsapp').addEventListener('click', function() {
  enviarMensajeWhatsApp();
});

function enviarMensajeWhatsApp() {
  var mensaje = encodeURIComponent("Hola, me gustaría obtener más información."); // Mensaje predefinido
  var numero = "+54 9 3436228191"; // Reemplaza con tu número de teléfono, incluyendo el código de país pero sin el signo "+" ni guiones.
  var url = "https://web.whatsapp.com/" + numero + "?text=" + mensaje;
  window.open(url, '_blank');
}

