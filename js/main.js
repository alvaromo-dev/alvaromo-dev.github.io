/* =========================================================
   JAVASCRIPT - Portafolio Álvaro Millán
   Funciones:
     1. Menú hamburguesa en celulares
     2. Año automático en el pie de página
     3. (Opcional) Cerrar el menú al elegir una sección

   Si no necesitas alguna función, puedes comentar su bloque.
   ========================================================= */


/* ---------------------------------------------------------
   1. MENÚ HAMBURGUESA (celulares)
   Abre y cierra la lista de navegación al tocar el botón.
   --------------------------------------------------------- */
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', abierto);
  });

  // ---------------------------------------------------------
  // 3. CERRAR EL MENÚ AL ELEGIR UNA SECCIÓN
  // ---------------------------------------------------------
  navLinks.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ---------------------------------------------------------
   2. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
   Muestra el año actual; no tendrás que cambiarlo cada año.
   --------------------------------------------------------- */
const anio = document.getElementById('anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}
