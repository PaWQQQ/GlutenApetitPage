html = document.querySelector('html');

/* Scrollowanie nagłówka */
window.onscroll = function () {
  var headerBanner = document.getElementById("header-banner");
  if (window.scrollY > 50) {
    headerBanner.classList.add("small");
  } else {
    headerBanner.classList.remove("small");
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
     
      const headerHeight = document.getElementById('header-banner').offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    });
  });

  /* Pojawienie się i znikanie menu nawigującego */
  const navbar = document.getElementById("navmenu");
  if (
    document.body.scrollTop > 110 ||
    document.documentElement.scrollTop > 110
  ) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
  const przgor = document.getElementById("przycisk-gora");
if (
  document.body.scrollTop > 110 ||
  document.documentElement.scrollTop > 110
) {
  przgor.classList.add("show");
} else {
  przgor.classList.remove("show");
}
};




/* Pojawienie się i znikanie menu hamburger*/
function pokazmenu() {
    var menu = document.getElementById("hamburgermenu")
  
    // Jeśli menu jest ukryte, pokaż je
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      html.style.overflow = 'hidden';
    } else {
      menu.style.display = "none";
      html.style.overflow = 'visible';
    }
  }
function powrotdogory(){
  window.scrollTo({
    top: 0, // Przewija do samej góry
    behavior: 'smooth' // Dodaje animację
});
}

//Galeria - Skrypt
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');

// Funkcja otwierająca modal
images.forEach(img => {
    img.addEventListener('click', () => {
        const imgSrc = img.getAttribute('data-src');
        modalImg.src = imgSrc;  // Ustawiamy duże zdjęcie w modalu
        modal.style.display = 'flex'; // Pokazujemy modal
        html.style.overflow = 'hidden';
    });
});

// Funkcja zamykająca modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Ukrywamy modal
    html.style.overflow = 'visible';
});

// Zamknij modal, jeśli klikniemy poza zdjęciem
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Ukryj modal
        html.style.overflow = 'visible';
    }
});