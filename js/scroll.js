document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".header__menu a, .footer__menu a"); // Об'єднання селекторів для обох меню

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
