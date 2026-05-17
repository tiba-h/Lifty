const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const toast = document.querySelector('#toast');
const cartButtons = document.querySelectorAll('.add-to-cart');
const contactForm = document.querySelector('.contact-form');
const planForm = document.querySelector('.plan-form');

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.hidden = true;
  }, 3200);
}

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product || 'Produkt';
    showToast(`${product} wurde zum Beispiel-Warenkorb hinzugefügt.`);
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Danke! Das Formular ist für die Aufgabe gemockt und wurde nicht wirklich gesendet.');
    contactForm.reset();
  });
}

if (planForm) {
  planForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const goal = document.querySelector('#goal').value;
    const days = document.querySelector('#days').value;
    const duration = document.querySelector('#duration').value;
    const equipment = document.querySelector('#equipment').value;
    const result = document.querySelector('#plan-result');

    result.textContent = `Beispiel: ${goal}, ${days} pro Woche, ${duration} pro Einheit, Equipment: ${equipment}.`;
    showToast('Beispielplan wurde aktualisiert.');
  });
}
