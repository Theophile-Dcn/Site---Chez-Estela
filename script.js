// MENU HAMBURGER
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});
// const hamburger span = document.querySelector('.hamburger');
const hamburger = document.querySelector('.hamburger');
menuHamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});
// FERMER LE MENU
const removeMenu = document.querySelector('#removeMenu');

removeMenu.addEventListener('click', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenu) {
    mobileMenu.classList.remove('mobile-menu');
  }
});

//  BOUTON SCROLL TOP 

const scrollBtn = document.querySelector('#scrollBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animation badge 
const ratio = .4
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
  };

  // texte apparition

 const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
        } 
      })
    }; 
  
  
const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector('.reveal'))


  const textIntersect = function (entries, observere) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('revealTexte-visible')
        observere.unobserve(entry.target)
        } 
      })
    }; 
const observere = new IntersectionObserver(textIntersect, options);
  observere.observe(document.querySelectorAll('.revealTexte').forEach(function(r){
    observere.observe(r)
  }));



    


    




  