document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".greedy-nav .visible-links a");
  links.forEach(function(link) {
    if (link.getAttribute("href") === window.location.pathname) {
      link.classList.add("nav--active");
    }
  });
});
