const hamburgerIcon = document.querySelector('.nav__hamburger');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav__hamburger--open');
  navOverlay.classList.toggle('nav__overlay--show');
});

navOverlay.addEventListener('click', (e) => {
    const currentElement = e.target;
  
    if (isActive(currentElement, 'nav__parent')) {
      const subMenu = currentElement.nextElementSibling;
  
      if (window.innerWidth < 768) {
        subMenu.style.maxHeight = subMenu.style.maxHeight ? null : subMenu.scrollHeight + 'px';
      } else {
        if (!isActive(subMenu, 'nav__inner--show')) {
          closeDropdown(currentDropdown);
        }
        subMenu.classList.toggle('nav__inner--show');
        currentDropdown = subMenu;
      }
    }
  });

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
  if (isActive(currentDropdown, 'nav__inner--show')) {
    currentDropdown.classList.remove('nav__inner--show');
  }
}

window.addEventListener('resize', () => {
  closeDropdown(currentDropdown);
  if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll('.nav__inner');
    navInners.forEach((navInner) => {
      navInner.style.height = '';
    });
  }
});
