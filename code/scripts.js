// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hover effects for menu items
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#FFA500'; // Light orange
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#000000'; // Black text
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

// Contact form submission (simple alert for demonstration)
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});
