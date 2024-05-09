const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Liked';
    btn.style.backgroundColor = '#4CAF50';
    btn.style.pointerEvents = 'none';
  });
});
// Get references to the image and dropdown menu
const dropdownTrigger = document.getElementById('dropdown-trigger');
const dropdownMenu = document.getElementById('dropdown-menu');

// Add click event listener to the image
dropdownTrigger.addEventListener('click', function() {
  // Toggle the visibility of the dropdown menu
  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});
