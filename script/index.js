//VARIABLES
const container = document.getElementById('container');
const container_sections = document.getElementsByClassName('container_sections')
const current_menu_text = document.getElementById('current_menu_text');
const current_bar_menu = document.getElementById('current_bar_menu');

const total_height = parseFloat(window.getComputedStyle(container_sections[0]).height);
let mid_height = total_height / 2;

const total_width = parseFloat(window.getComputedStyle(container_sections[0]).width);

const button_language = document.getElementById('action_img_language');
const container_language_text = document.getElementById('container_language_text')

//SCROLL ANIMATE
const spanish_language = document.getElementById('spanish_language')
const english_language = document.getElementById('english_language')

let switch_language = 0;

function list_language(num) {
  let list_menu = ['Inicio','Últimos proyecto','Proyectos','Servicios','Sobre mí','Contacto'];
  let list_menu_english = ['Home','Last News','Proyects','Services','About me','Contact'];
  if(switch_language == 0){
    return list_menu[num];
  }
  else if(switch_language == 1){
    return list_menu_english[num];
  }
}

let active1, active2, active3, active4, active5,active6
active1 = true;
container.addEventListener('scroll', function() {
  let currentPosition = container.scrollTop;
  current_bar_menu.style.height = '5px'

  if(currentPosition <= mid_height){
    current_menu_text.innerHTML = list_language(0);
    current_bar_menu.style.width = 0
    active1 = true
  }
  else{
    active1 = false
  }
  if(currentPosition >= mid_height){
    current_menu_text.innerHTML = list_language(1);
    current_bar_menu.style.width = total_width / 5 + 'px';
    active2 = true
  }
  else{
    active2 = false
  }
  if (currentPosition >= mid_height *3){
    current_menu_text.innerHTML = list_language(2);
    current_bar_menu.style.width = total_width / 2.5 + 'px';
    active3 = true
  }
  else{
    active3 = false
  }
  if (currentPosition >= mid_height *5){
    current_menu_text.innerHTML = list_menu[3];
    current_bar_menu.style.width = total_width / 1.6 + 'px';
    active4 = true
  }
  else{
    active4 = false
  }
  if (currentPosition >= mid_height *7){
    current_menu_text.innerHTML = list_menu[4];
    current_bar_menu.style.width = total_width/ 1.25 + 'px';
    active5 = true
  }
  else{
    active5 = false
  }
  if (currentPosition >= mid_height *9){
    current_menu_text.innerHTML = list_menu[5];
    current_bar_menu.style.width = total_width + 'px';
    active6 = true
  }
  else{
    active6 = false
  }
});

function desvanecer() {
  let opacidad = 1
  let intervalo = setInterval(function () {
  if (opacidad <= 0) {clearInterval(intervalo)}
  current_menu_text.style.opacity = opacidad; opacidad -= 0.025;}, 10)
  setTimeout(() => {
    let opacidad2 = 0;
    let intervalo2 = setInterval(function(){
    if (opacidad2 >= 1) {clearInterval(intervalo2)}
    current_menu_text.style.opacity = opacidad2; opacidad2 += 0.025},10)
  }, 500);
}

//MENU TOGGLE

let toggle = document.getElementById('menu_dropdown')
let content_menu = document.getElementById('content_menu_toggle');
console.log(toggle.checked)


toggle.addEventListener('click', function(){
  content_menu.style.display = 'flex';
  if (toggle.checked) {
    let opacidad = 0
    let intervalo = setInterval(function () {
    if (opacidad >= 1) {
      clearInterval(intervalo);
      
    }
    content_menu.style.opacity = opacidad; opacidad += 0.009;}, 10)
  }
  else{
    let opacidad = 1
    let intervalo = setInterval(function () {
    if (opacidad <= 0) {
      clearInterval(intervalo);
      content_menu.style.display = 'none';
    }
    content_menu.style.opacity = opacidad; opacidad -= 0.02;}, 10)
    container_language_text.style.display = 'none';
  }
})

let darkMode = document.getElementById('button_mode')
let menu_dropdown_label = document.getElementById('menu_dropdown_label')

let ss = document.styleSheets[0];

console.log(ss.cssRules);


let WhiteMode = document.getElementsByClassName('WhiteMode');
let DarkMode = document.getElementsByClassName('DarkMode');

darkMode.addEventListener('click',function () {
  if (darkMode.checked) {
    container.style.backgroundColor = 'rgb(40, 40, 40)';
    // ss.cssRules[8].style.color = 'rgb(200, 200, 200)';
    ss.cssRules[9].style.backgroundColor = 'rgb(80, 80, 80)';
    ss.cssRules[13].style.border = '1px solid white';
    ss.cssRules[19].style.border = '1px solid white';
    ss.cssRules[21].style.borderRight = '1px solid white';
    ss.cssRules[24].style.border = '1px solid white';
    ss.cssRules[32].style.color = 'rgb(200, 200, 200)';

    for (let i = 0; i < DarkMode.length; i++) {
      DarkMode[i].style.display = 'block';
      WhiteMode[i].style.display = 'none';
      console.log('hola')
    }
    
    console.log(darkMode.checked)
  }
  else{
    container.style.backgroundColor = 'rgb(255, 255, 255)';
    // ss.cssRules[8].style.color = 'rgb(80, 80, 80)';
    ss.cssRules[9].style.backgroundColor = 'rgb(200, 200, 200)';

    ss.cssRules[13].style.border = '1px solid black';
    ss.cssRules[19].style.border = '1px solid black';
    ss.cssRules[21].style.borderRight = '1px solid black';
    ss.cssRules[24].style.border = '1px solid black';
    ss.cssRules[32].style.color = 'rgb(200, 200, 200)';
    ss.cssRules[32].style.color = 'rgb(80, 80, 80)';

    for (let i = 0; i < DarkMode.length; i++) {
      DarkMode[i].style.display = 'none';
      WhiteMode[i].style.display = 'block';
    }
    console.log(darkMode.checked)
  }
})


button_language.addEventListener('click', function(){
  if(container_language_text.style.display == 'none'){
    container_language_text.style.display = 'block';
    console.log('hola');
  }
  else{
    container_language_text.style.display = 'none';
  }
})



spanish_language.addEventListener('click', function(){
    switch_language = 0
    console.log(switch_language);
    if (active1 == false) {current_menu_text.innerHTML = 'Home'}
    if (active2 == false) {current_menu_text.innerHTML = 'Ultimas novedades'}
    if (active3 == false) {current_menu_text.innerHTML = 'Proyectos'}
    if (active4 == false) {current_menu_text.innerHTML = 'Servicios'}
    if (active5 == false) {current_menu_text.innerHTML = 'Sobre mí'}
    if (active6 == false) {current_menu_text.innerHTML = 'Contacto'}
})
english_language.addEventListener('click', function(){
  switch_language = 1
  console.log(switch_language);
  if (active1) {current_menu_text.innerHTML = 'Home'}
  if (active2) {current_menu_text.innerHTML = 'Last news'}
  if (active3) {current_menu_text.innerHTML = 'Proyects'}
  if (active4) {current_menu_text.innerHTML = 'Services'}
  if (active5) {current_menu_text.innerHTML = 'About me'}
  if (active6) {current_menu_text.innerHTML = 'Contact'}
})




















// let scrollPosition = currentScroll.scrollTop;
//     if(scrollPosition == 0){
//       current_menu_text.innerHTML = list_menu[0];
//     }
  



// currentScroll.addEventListener('scroll', function() {
    

//     // current_menu_text = list_menu[0];
//     if(scrollPosition <= total_height / 2){
//       current_menu_text.innerHTML = list_menu[0];
//       // alert('eureka')
//     }
//     if(scrollPosition >= total_height / 2){

//       // desvanecer();
//       // console.log('hola')
//       current_menu_text.innerHTML = list_menu[1];
//       // aparecer(current_menu_text);
//     }

    
//     if (scrollPosition >= total_height + 100){
//       current_menu_text.style.transition = '1s'
//       current_menu_text.style.transform = 'rotateY(360deg)';
//       current_menu_text.innerHTML = list_menu[2];
//       // alert('eureka')
//     }
//     if (scrollPosition >= total_height *2 + 100){
//       current_menu_text.innerHTML = list_menu[3];
//       // alert('eureka')
//     }
//     if (scrollPosition >= total_height *3 + 100){
//       current_menu_text.innerHTML = list_menu[4];
//       // alert('eureka')
//     }
//     if (scrollPosition >= total_height *4 + 100){
//       current_menu_text.innerHTML = list_menu[5];
//       // alert('eureka')
//     }
//     // console.log('Posición de desplazamiento vertical:', scrollPosition, total_height*2 / 2,list_menu[1]);
// });


// function desvanecer() {
//   let current_opacity = current_menu_text.style.opacity;
//   interval = setInterval(function() {
//     if (current_opacity <= 0) {
//       clearInterval(interval)
//       console.log('see')
//     }
//     current_menu_text.opacity = current_opacity;
//       current_opacity -= 0.025;
//   }, 10)
//   // setTimeout(aparecer, 2000); // Esperar 2 segundos antes de iniciar el segundo intervalo
// }
// // function aparecer() {
// //   interval = setInterval(function() {
// //     if (current_opacity <= 0) {
// //       clearInterval(interval)
// //     }
// //     current_box.style.opacity = current_opacity;
// //       current_opacity -= 0.025;
// //   }, 10)
// // }
