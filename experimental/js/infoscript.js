/*
===============================================================

Barev and welcome to my little playground!

My name is Ani and I'm a Web Developer from Yerevan. Here you will find some of my personal experiments. Feel free to use them for whatever you want.

===============================================================
*/
function init(){

  var styles = ["animate4", "animate1", "animate2", "animate3"];
  var scales = ["scale1", "scale2", "scale3"];
  var opacities = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var stars = "";
  var count = 300;
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < count; i++) {
    stars += "<span class='star " + styles[rand(0, 4)] + " " + opacities[rand(0, 6)] + " "
    + scales[rand(0, 3)] + "' style='animation-delay: ." + rand(0, 9)+ "s; left: "
    + rand(0, widthWindow) + "px; top: " + rand(0, heightWindow) + "px;'></span>";
  }

  document.querySelector(".sky").innerHTML = stars;

  }

window.onload = init;
window.onresize = init;


//création des jr
let horaire=document.getElementById('horaire')
let acces=document.getElementById('acces')
let partenaire=document.getElementById('partenaire')
let contact=document.getElementById('contact')
let billeterie=document.getElementById('billeterie')
let newsletter=document.getElementById('newsletter')
let para_6=document.getElementById('para_6')
let para_7=document.getElementById('para_7')
let para_8=document.getElementById('para_8')
let para_9=document.getElementById('para_9')
let para_10=document.getElementById('para_10')
let para_11=document.getElementById('para_11')


horaire.addEventListener('click',function(){
  para_6.style.display="block"
  para_7.style.display="none"
  para_8.style.display="none"
  para_9.style.display="none"
  para_10.style.display="none"
  para_11.style.display="none"

})

acces.addEventListener('click',function(){
  para_6.style.display="none"
  para_7.style.display="block"
  para_8.style.display="none"
  para_9.style.display="none"
  para_10.style.display="none"
  para_11.style.display="none"

})

partenaire.addEventListener('click',function(){
  para_6.style.display="none"
  para_7.style.display="none"
  para_8.style.display="block"
  para_9.style.display="none"
  para_10.style.display="none"
  para_11.style.display="none"

})

contact.addEventListener('click',function(){
  para_6.style.display="none"
  para_7.style.display="none"
  para_8.style.display="none"
  para_9.style.display="block"
  para_10.style.display="none"
  para_11.style.display="none"

})

billeterie.addEventListener('click',function(){
  para_6.style.display="none"
  para_7.style.display="none"
  para_8.style.display="none"
  para_9.style.display="none"
  para_10.style.display="block"
  para_11.style.display="none"

})

newsletter.addEventListener('click',function(){
  para_6.style.display="none"
  para_7.style.display="none"
  para_8.style.display="none"
  para_9.style.display="none"
  para_10.style.display="none"
  para_11.style.display="block"

})
