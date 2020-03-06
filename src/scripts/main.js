document.addEventListener('DOMContentLoaded', function ()  {
  const elModal = document.querySelector('.modal');
  const elOpenModal = document.querySelector('.js-open-modal');
  const elCloseModal = document.querySelector('.js-close-modal');
  
  function openModal () {
    //lModal.style.display = 'flex';
    elModal.classList.add('active')
  }

  function closeModal () {
    elModal.classList.remove('active');
  }
  
  
  elOpenModal.onclick = function () {
    openModal();
  };
  
  
  elCloseModal.onclick = function () {
    closeModal();
  };
  
  
  window.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      closeModal();
    }
  };
  
  // ===========> Encolhe o Header //
  window.onscroll = function() {
    let y = window.pageYOffset;
    const elHeader = document.querySelector('header');
    if(y >= 100) {
      elHeader.classList.add('small');
    } else {
      elHeader.classList.remove('small');
    }
  };
  
  
     // ===========> Controla o Hamburguer //
    
  const elToggle = document.querySelector('.hambuguer');
  const elMenu = document.querySelector('.menu');
  elToggle.onclick = function() {
    console.log('y');
    elMenu.classList.toggle('active');
  }
  
    
  

  
  /*
  let toggle = function() {
    let getMenuBar = document.querySelector(".container");
    let getMenuBarUl = document.querySelector(".container ul");
    let getMenuBarLink = document.querySelectorAll(".container a");
    
    if (toggleOpen === false) {
      getMenuBarUl.style.display = "all";
    }
  }
  */

});

