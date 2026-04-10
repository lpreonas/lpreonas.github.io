document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".greedy-nav .visible-links a");
  links.forEach(function(link) {
    if (link.getAttribute("href") === window.location.pathname) {
      link.classList.add("nav--active");
    }
  });
});

// Open all content links in new tabs
document.addEventListener("DOMContentLoaded", function() {
  // Open all links in page content in new tabs
  var contentLinks = document.querySelectorAll(".page__content a");
  contentLinks.forEach(function(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // Open CV nav link in new tab
  var navLinks = document.querySelectorAll(".greedy-nav a");
  navLinks.forEach(function(link) {
    if (link.getAttribute("href") && link.getAttribute("href").includes(".pdf")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

// Open sidebar links in new tabs
var sidebarLinks = document.querySelectorAll(".author__urls a");
sidebarLinks.forEach(function(link) {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
