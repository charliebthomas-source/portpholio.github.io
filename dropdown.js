document.querySelectorAll('.drop-link').forEach(link => {
  const dropdownId = link.dataset.dropdown;
  const dropdown = document.getElementById(dropdownId);

  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    dropdown.style.top = rect.bottom + window.scrollY + 'px';
    dropdown.style.left = rect.left + window.scrollX + 'px';
    dropdown.style.display = 'block';
  });

  link.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdown.matches(':hover')) {
        dropdown.style.display = 'none';
      }
    }, 100);
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});