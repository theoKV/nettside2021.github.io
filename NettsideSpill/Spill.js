//passer på at reset knappen ikke vises vis du ikke har tapt
document.getElementById("reset").style.display = "none";
let poeng = 0;
let highscore = 0;
//må være glob for at scopsene skal sende y verdien oppover
globalThis.y = 100

function start(){
  globalThis.x = 0
  var x = Math.random()*1000;
  //viser scoreboard på start også for at UI skal oppdatere etter reset
document.getElementById('scoreBoard').innerHTML ="Poeng : " + poeng 
//skjuler reset og start knapp når start functionen kjører
document.getElementById("test").style.display = "none";
document.getElementById("reset").style.display = "none";
document.getElementById("start").style.display = "none";
//viser hinderene etter spillet starter
document.getElementById("hinder").style.display = "block";
document.getElementById("hinder1").style.display = "block";

//setter en fast start for å unngå start loops(Boksen treffer musen når du klikker start)

document.getElementById('hinder').style.left = x+'px'
document.getElementById('hinder1').style.left = x+'px'
var interval0 = window.setInterval(function(){
  
  //definerer div-en for å legge til en eventListener
  var div = document.getElementById('hinder');
  
  //Ser om musepekeren er i boksen
  div.addEventListener('mouseenter', function(){
    console.log("DEATH!?")
    clearInterval(interval0)
    clearInterval(interval1)
    //viser start knappen på nytt og resetter poeng summen
    document.getElementById("reset").style.display = "block";
    poeng = 0;
    
  }, false);
  var div1 = document.getElementById('hinder1');
  div1.addEventListener('mouseenter', function(){
    console.log("DEATH!?")
    //stopper loopen vis pekeren er i boksen
    clearInterval(interval0)
    clearInterval(interval1)
    document.getElementById("reset").style.display = "block";
    poeng = 0;

  }, false);
document.getElementById('hinder').style.top = y+'px'
document.getElementById('hinder1').style.top = y+'px'
var hastighet = 12.2*(poeng/50+1)
         y= y+hastighet


},16.7);


var interval1 = window.setInterval(function(){
  //lager to forkjellige x verdier som begge hinderene går til
  var x = Math.random()*1800
  document.getElementById('hinder').style.left = x+'px'
  var x = Math.random()*1800
  document.getElementById('hinder1').style.left = x+'px'
  globalThis.y = -900;
 /* myLoop();*/  
  console.log("foreverloop")
  poeng = poeng+1
  if(poeng > highscore){
    highscore = poeng
  }
  document.getElementById('scoreBoard').innerHTML ="Poeng : " + poeng ;
  document.getElementById('highscore').innerHTML ="Rekord : " + highscore ;
 if(poeng < 100){
  document.body.style= `background-color: rgb(${255-poeng*2}, ${255-poeng*2}, ${255-poeng*2})`
 }
}, 2400-poeng*20);


}
