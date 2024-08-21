document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'product-subsection-arrow'
  var arrows = document.querySelectorAll('.product-subsection-arrow');

  arrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      // Find the closest menu-item and the sub-tabs within it
      var menuItem = this.closest('.menu-item');
      var subTabs = menuItem.querySelectorAll('.sub-tab');

      subTabs.forEach(function (subTab) {
        // Toggle the 'show' class on each sub-tab
        if (subTab.style.display === "none" || subTab.style.display === "") {
          subTab.style.display = "block";
          subTab.style.maxHeight = subTab.scrollHeight + "px"; // Smooth transition
        } else {
          subTab.style.maxHeight = 0;
          setTimeout(function () {
            subTab.style.display = "none";
          }, 300); // Match the transition time
        }
      });
    });
  });
});
