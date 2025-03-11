const {height: pageHeaderHight} = document.querySelector('.page-header').getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHight}px` ;


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const headerOffset = document.querySelector(".page-header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset - 20; // Додаємо трохи запасу
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
  


  