document.addEventListener('DOMContentLoaded', function() {
    fetch('/productos')
      .then(response => response.json())
      .then(data => {
        const tabla = document.querySelector('.productos-section tbody');
        tabla.innerHTML = ''; 
        data.forEach((producto) => {
          const fila = `<tr>
                          <td><img src="${producto[7]}" alt="Imagen del Producto" class="product-img" style="width:50px"></td>
                          <td>${producto[1]}</td>
                          <td>$${producto[3]}</td>
                          <td>${producto[2]}</td>
                          <td>${producto[4]}</td>
                          <td>${producto[5]}</td>
                          <td>${producto[6]}</td>
                          <td>
                              <button class="btn-small btn-success">Marcar como Vendido</button>
                              <button class="btn-small btn-danger">Cerrar Cotización</button>
                          </td>
                        </tr>`;
          tabla.innerHTML += fila;
        });
      })
      .catch(error => console.error('Error:', error));
});
