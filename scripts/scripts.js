document.addEventListener("DOMContentLoaded", function () {
  var navbarCollapse = document.querySelector(".navbar-collapse");
  var navbarLinks = document.querySelectorAll(".nav-link");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        var offsetPosition =
          targetElement.offsetTop -
          document.querySelector(".navbar").offsetHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (navbarCollapse.classList.contains("show")) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
});
