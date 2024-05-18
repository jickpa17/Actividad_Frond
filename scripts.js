// JavaScript para filtrar películas
function filtrarPeliculas(categoria) {
  let tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(tarjeta => {
      let categoriaTarjeta = tarjeta.querySelector('.card-body p.' + categoria);
      if (categoria === 'Todas' || categoriaTarjeta) {
          tarjeta.style.display = 'block';
      } else {
          tarjeta.style.display = 'none';
      }
  });
}



  