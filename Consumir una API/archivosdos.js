// Contenedor donde se agregarán las tarjetas
const container = document.querySelector('.container');

// Función para generar las tarjetas dinámicamente
function mostrarProductos(productos) {
    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    productos.forEach(producto => {
        container.innerHTML += `
            <div class="card">
                <img src="${producto.image}" alt="${producto.title}" class="card-img">
                <h2 class="card-title">${producto.title}</h2>
                <p class="card-precio">Precio: $${producto.price}</p>
            </div>
        `;
    });
}

// Obtener productos desde la API falsa
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
      console.log(data); // Ver los productos en la consola
      mostrarProductos(data); // Mostrar productos en las tarjetas
  })
  .catch(error => console.error('Error:', error));

