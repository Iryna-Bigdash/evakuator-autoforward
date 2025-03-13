// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');

//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.nav-list a'); // Збираємо всі посилання

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', 'false');
      menuBtnRef.classList.remove('is-open');
    });
  });
})();
