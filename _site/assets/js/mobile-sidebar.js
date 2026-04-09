document.addEventListener("DOMContentLoaded", function() {
  // Only run on mobile
  if (window.innerWidth > 900) return;

  // Get sidebar content
  var sidebarBio = document.querySelector(".author__bio");
  var sidebarLinks = document.querySelector(".author__urls");

  // Get the mobile nav menu
  var mobileNav = document.querySelector(".greedy-nav__toggle");
  var hiddenLinks = document.querySelector(".hidden-links");

  if (!hiddenLinks || !sidebarBio) return;

  // Create a divider and sidebar info to inject
  var divider = document.createElement("li");
  divider.style.cssText = "border-top: 1px solid #ddd; margin: 0.5em 0; list-style: none;";

  var bioItem = document.createElement("li");
  bioItem.style.cssText = "padding: 0.5em 1em; font-size: 0.85em; list-style: none;";
  bioItem.innerHTML = sidebarBio.innerHTML;

  var linksItem = document.createElement("li");
  linksItem.style.cssText = "padding: 0.5em 1em; list-style: none;";
  if (sidebarLinks) linksItem.innerHTML = sidebarLinks.innerHTML;

  hiddenLinks.appendChild(divider);
  hiddenLinks.appendChild(bioItem);
  hiddenLinks.appendChild(linksItem);
});

// On mobile, move headshot above text on home page
if (window.innerWidth <= 900) {
  var flexDivs = document.querySelectorAll('.page__content div[style*="flex"]');
  flexDivs.forEach(function(div) {
    var children = Array.from(div.children);
    if (children.length === 2) {
      // Move the image div (second child) before the text div (first child)
      div.insertBefore(children[1], children[0]);
    }
  });
}
