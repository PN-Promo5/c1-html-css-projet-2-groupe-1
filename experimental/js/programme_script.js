
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
let mercredi=document.getElementById('mer')
let mercredie=document.getElementById('mere')
let jeudi=document.getElementById('jeu')
let jeudie=document.getElementById('jeue')
let vendredi=document.getElementById('ven')
let vendredie=document.getElementById('vendre')
let samedi=document.getElementById('sam')
let samedie=document.getElementById('same')
let dimanche=document.getElementById('dim')
let dimanchee=document.getElementById('dime')
let para_1=document.getElementById('para_1')
let para_2=document.getElementById('para_2')
let para_3=document.getElementById('para_3')
let para_4=document.getElementById('para_4')
let para_5=document.getElementById('para_5')

mercredi.addEventListener('click',function(){
  para_1.style.display="block"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="none"
})
mercredie.addEventListener('click',function(){
  para_1.style.display="block"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="none"
})

jeudi.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="block"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="none"
})

jeudie.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="block"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="none"
})

vendredi.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="block"
  para_4.style.display="none"
  para_5.style.display="none"
})

vendredie.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="block"
  para_4.style.display="none"
  para_5.style.display="none"
})

samedi.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="block"
  para_5.style.display="none"
})

samedie.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="block"
  para_5.style.display="none"
})

dimanche.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="block"
})

dimanchee.addEventListener('click',function(){
  para_1.style.display="none"
  para_2.style.display="none"
  para_3.style.display="none"
  para_4.style.display="none"
  para_5.style.display="block"
})
