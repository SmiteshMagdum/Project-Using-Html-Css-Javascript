const typed = new Typed(".text", {
    strings: [" web Devloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
 
  const menuIcon = document.getElementById('menu-icon');
  const navUl = document.querySelector('header nav ul');

  menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });


  