// Select all drop links
document.querySelectorAll('.drop-link').forEach(link => {
  const dropdownId = link.dataset.dropdown;
  const dropdown = document.getElementById(dropdownId);

  // Show dropdown on mouse enter
  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    dropdown.style.top = rect.bottom + window.scrollY + 'px';
    dropdown.style.left = rect.left + window.scrollX + 'px';
    dropdown.style.display = 'block';
  });

  // Hide dropdown when mouse leaves the link or dropdown
  link.addEventListener('mouseleave', () => {
    setTimeout(() => {
      // Only hide if not hovering over dropdown
      if (!dropdown.matches(':hover')) {
        dropdown.style.display = 'none';
      }
    }, 100); // small delay to allow moving to dropdown
  });

  // Keep dropdown open if hovering over it
  dropdown.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});