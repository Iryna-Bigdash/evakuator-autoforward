document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    let targetId = this.getAttribute('href').split('#')[1];
    let targetElement = document.getElementById(targetId);

    if (targetElement) {
      const pageHeaderHeight =
        document.querySelector('.page-header').offsetHeight;
      const targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition - pageHeaderHeight,
        behavior: 'smooth',
      });

      history.pushState(null, null, window.location.pathname);
    }
  });
});
