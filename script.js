function toggleDropdown(event) {
  var dropdownContent = event.target.nextElementSibling;
  if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
  } else {
      dropdownContent.classList.add("show");
  }
}