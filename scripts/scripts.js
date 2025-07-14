window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
  
    preloader.classList.add('hidden');
  
    setTimeout(() => {
      content.classList.add('visible');
    }, 800);
  });