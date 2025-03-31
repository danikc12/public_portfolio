document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    if (card.classList.contains('placeholder')) {
      card.addEventListener('click', (e) => e.preventDefault());
    }

    card.addEventListener('mouseenter', () => {
      const title = card.getAttribute('data-title');
      const tooltip = document.createElement('span');
      tooltip.textContent = title;
      tooltip.className = 'tooltip';
      card.appendChild(tooltip);
    });

    card.addEventListener('mouseleave', () => {
      const tooltip = card.querySelector('.tooltip');
      if (tooltip) tooltip.remove();
    });
  });
});

// Tooltip styles are now in CSS