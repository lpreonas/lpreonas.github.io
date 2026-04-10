document.addEventListener("DOMContentLoaded", function() {
  // Only run on mobile
  if (window.innerWidth > 900) return;

  // Fix image ordering on bio and contact pages
  // These pages have: div.flex > [text-div, image-div]
  // We want image BELOW text, so no change needed for bio/contact
  // BUT our CSS flex-direction:column is showing them wrong

  var flexContainers = document.querySelectorAll('.page__content > div');
  flexContainers.forEach(function(container) {
    var children = Array.from(container.children);
    if (children.length === 2) {
      var hasHomeImage = container.querySelector('.home-image');
      if (hasHomeImage) {
        // Index page: image already first in HTML, keep it first (on top)
        container.style.flexDirection = 'column';
      } else {
        // Bio/contact: text first, image second → text on top, image on bottom
        container.style.flexDirection = 'column';
        // Force image div to be last
        var imageDiv = children[1];
        container.appendChild(imageDiv);
      }
      // Make both children full width
      children.forEach(function(child) {
        child.style.width = '100%';
      });
    }
  });
});
