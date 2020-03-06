//alert(Math.random() * Math.floor(6));
/*const vogals = 'aeiou';
let y = Math.floor(Math.random()*5);
document.write(vogals[y])*/


//setInterval(function() {
//console.log('Hello')
//}, 3000);

let elButton = document.querySelector('button');
/*let nmax = 51;
let n = 6;
let e = 2
let emax = 13*/


/*elButton.onclick = function () {
  alert('Start');
}*/


/*let i = 0;
  for(i = 0; i < n; i++){
    let div = document.createElement('div'); 
    elContainer.appendChild(div);
  }*/
  

/*NUMEROS Euromilhoes*/
function genRandom(nmax) {
  let divs = document.querySelectorAll('.random-container');

  let i = 0;
  for (i = 0; i < divs.length; i++) {
    setInterval(function () {
      let randomN = Math.floor(Math.random()* nmax);
      divs[i].innerHTML = randomN;
    }, 100);
  }
}

elButton.onclick = function () {
  genRandom(6, 51);
}


/*Estrelas Euromilhoes*/
/*let i = 0;
for(i = 0; i < e; i++){
  let div = document.createElement('div'); 
  elContainer.appendChild(div);

  setInterval(function () {
    let randomN = Math.floor(Math.random()* emax);
    div.innerHTML = randomN;
  }, 100);
}*/



/*document.addEventListener('DOMContentLoaded', function ()  {
  const elgenRandom = document.querySelector('.start');
  
  function startgenRandom () {
    elgenRandom.classList.add('active');
  }
}*/






/*const elEuroMilhoes = document.querySelector('#euro');
const elStopEuro = document.querySelector('#stopEuro');
function generateKey() {
  return Math.floor(Math.random() * 50) + 1
}
function generateStar() {
  return Math.floor(Math.random() * 9) + 1
}
function generateEuro() {
  let chave = [];
  let estrelas = [];
  let chaveCompleta = '';
  let tempKey = 0;
  let tempStar = 0;
  /* Generate key */
/*  for (let i = 0; i <= 5; i++) {
    tempKey = generateKey();
    while (chave.includes(tempKey)) {
      tempKey = generateKey();
    }
    chave[i] = tempKey;
  }
  /* Generate Stars */
/*  for (let i = 0; i <= 1; i++) {
    tempStar = generateStar();
    while (estrelas.includes(tempStar)) {
      tempStar = generateStar();
    }
    estrelas[i] = tempStar;
  }
  for (let i = 0; i <= 5; i++) {
    chaveCompleta += '<div>' + chave[i] + '</div>';
  }
  for (let i = 0; i <= 1; i++) {
    chaveCompleta += '<div class=\'estrelas\'>' + estrelas[i] + '</div>';
  }
  elEuroMilhoes.innerHTML = chaveCompleta;
}
function stopEuro() {
  clearInterval(intervalEuro);
}
let intervalEuro = 0;
elStopEuro.onclick = function () {
  if (intervalEuro) {
    stopEuro();
    intervalEuro = 0;
    elStopEuro.textContent = 'Roll the dices!';
  } else {
    intervalEuro = setInterval(function () {
      generateEuro()
    }, 50);
    elStopEuro.textContent = 'Stop!';
  }
}*/