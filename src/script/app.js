export function scroll(){document.querySelector('nav a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    });
  });
}