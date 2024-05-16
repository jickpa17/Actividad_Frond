// JavaScript para filtrar películas
function filtrarPeliculas(categoria) {
    let tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
      let categoriaTarjeta = tarjeta.querySelector('.card-text').textContent;
      if (categoria === 'Todas' || categoriaTarjeta.includes(categoria)) {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  }
  