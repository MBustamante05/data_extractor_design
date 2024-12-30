import {usernameValidation, emailValidation} from './REUSE/script.js';

let matias = 'matias05';
let result = usernameValidation.test(matias);
console.log(result);

//REAL CODE
const dataInput = document.getElementById('data-input'),
      dataBtn = document.getElementById('data-btn'),
      dataDisplay = document.getElementById('data-display'),
      alertText = document.getElementById('alert-text');

function extractor(){
  if(dataInput.value === ''){
    alertText.style.display = 'block';
    setTimeout(()=>{
      alertText.style.display = 'none';
    },1500)
  }else if(dataInput.value.match(usernameValidation)){
    dataDisplay.innerHTML = 'It seems like your data type is an username'
  }else if(dataInput.value.match(emailValidation)){
    dataDisplay.innerHTML = 'It seems like your data type is an email';
  }else{
    dataDisplay.innerHTML = "It doesn't seem to be nor email or username"
  }
}

//BUTTON FUNCTION
dataBtn.addEventListener('click', extractor);

dataInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    extractor();
  }
})

//CHANGE BACKGROUND

const luneIcon = document.getElementById('lune-icon'),
      sunIcon = document.getElementById('sun-icon'),
      titleEl = document.getElementById('title-el'),
      pEl = document.getElementById('p-el'),
      navBar = document.getElementById('nav-bar'),
      imgBg = document.getElementById('img-bg'),
      changeBgEl = document.getElementById('change-bg');

let changed = false;

function changeBg(){
  if(changed){
    lightBg();
  }else{
    darkBg();
  }
};

function darkBg(){
  changed = true;
  luneIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  document.body.style.background = '#04091A';
  navBar.classList.add('navbar-dark');
  navBar.classList.remove('navbar-light');
  titleEl.style.color = '#fff';
  pEl.style.color = '#fff';
  dataInput.style.border = '1px solid #fff';
  dataDisplay.style.color = '#fff';
  imgBg.src = 'img/data-black.png';
};

function lightBg(){
  changed = false;
  luneIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  document.body.style.background = '#fff';
  navBar.classList.add('navbar-light');
  navBar.classList.remove('navbar-dark');
  titleEl.style.color = '#070E26';
  pEl.style.color = '#111';
  dataInput.style.border = '1px solid grey';
  dataDisplay.style.color = '#111';
  imgBg.src = 'img/data-white.png';
}

changeBgEl.addEventListener('click', changeBg);