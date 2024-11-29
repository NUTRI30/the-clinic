function toggleMenu() {
  const navbarLinks = document.getElementById("navbar-Links");
  navbarLinks.classList.toggle("show");
}

      // Toggle the menu visibility on small screens
      function toggleMenu() {
        const navbarLinks = document.getElementById("mainNav");
        navbarLinks.classList.toggle("show");
        document.body.classList.toggle("menu-open");
    }
    function closeMenu() {
  const navbarLinks = document.getElementById("mainNav");
  navbarLinks.classList.remove("show");
  document.body.classList.remove("menu-open");
}

function sendWhatsAppMessage(phoneNumber) {

  const message = encodeURIComponent("Hello! I would like to contact you.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, '_blank');
}