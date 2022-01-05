//passer på at reset knappen ikke vises vis du ikke har tapt
document.getElementById("reset").style.display = "none";
let poeng = 0;
let highscore = 0;
//må være global for at scopsene skal sende y verdien oppover
globalThis.y = 100

function start(){
  globalThis.x = 0
  //Bombene faller alltid fra 0px for å unngå å tape med en gang du klikker start
  document.getElementById('hinder1').style.left = '0px'
  document.getElementById('hinder').style.left = '0px'
  //viser scoreboard på start også for at UI skal oppdatere etter reset
document.getElementById('scoreBoard').innerHTML ="Poeng : " + poeng 
//skjuler reset og start knapp når start functionen kjører
document.getElementById("start").style.display = "none";
document.getElementById("reset").style.display = "none";
document.getElementById("start").style.display = "none";
//viser hinderene etter spillet starter
document.getElementById("hinder").style.display = "block";
document.getElementById("hinder1").style.display = "block";

//setter en fast start for å unngå start loops(Boksen treffer musen når du klikker start)

document.getElementById('hinder').style.left = x+'px'
document.getElementById('hinder1').style.left = x+'px'

//funker som en loop, kjører 60 ganger i sekundet
var interval0 = window.setInterval(function(){
  
  //definerer div-en for å legge til en eventListener
  var div = document.getElementById('hinder');
  
  //Ser om musepekeren er i boksen
  div.addEventListener('mouseenter', function(){
    console.log("DEATH!?")
    //stopper spillet
    clearInterval(interval0)
    clearInterval(interval1)
    document.getElementById('hinder1').style.left = '-1000px'
    document.getElementById('hinder').style.left = '-1000px'
    //viser reset knappen og starter spillet på nytt
    document.getElementById("reset").style.display = "block";
    poeng = 0;
    
  }, false);
  //gir navn til et av hinderene
  var div1 = document.getElementById('hinder1');
  //ser om musen er i boksen
  div1.addEventListener('mouseenter', function(){
    console.log("DEATH!?")
    //stopper loopen og poeng tellingen
    clearInterval(interval0)
    clearInterval(interval1)
    document.getElementById('hinder1').style.left = '-1000px'
    document.getElementById('hinder').style.left = '-1000px'
    //viser reset knappen
    document.getElementById("reset").style.display = "block";
    //resetter score
    poeng = 0;

  }, false);
  
  //poeng øker hastigheten til hinderene
  var hastighet = 14.2*(poeng/15+1)
         y= y+hastighet;
         //setter y posisjonen til hinderene til hastighet variabelen
document.getElementById('hinder').style.top = y+'px'
document.getElementById('hinder1').style.top = y+'px'


//timeren på hvor ofte koden kjører, må være litt høy for å unngå lag
},16.7);


var interval1 = window.setInterval(function(){
  //gir hinderene en tilfeldig posisjon(Horisontalt)
  //trekker fra 200 for å gi høyere sjanse for å treffe venstre siden av skjermen(bug som gjorde det for enkelt)
  var x = Math.random()*2000-200
  document.getElementById('hinder').style.left = x+'px'
  var x = Math.random()*2000-200
  document.getElementById('hinder1').style.left = x+'px'
  
  //Setter posisjonen til toppen
  globalThis.y = -900;
  //legger til et poeng
  poeng = poeng+1
  //hvis poengene er høyere en highscoren, endre highscoren
  if(poeng > highscore){
    highscore = poeng
  }
  //oppdaterer scoreboard og highscore
  document.getElementById('scoreBoard').innerHTML ="Poeng : " + poeng ;
  document.getElementById('highscore').innerHTML ="Rekord : " + highscore ;
 //dette er en if for å unngå att bakgrunnenblir for endret          
 //if(poeng < 100){                                                  
 //endrer fargen basert på poengsum                                   
 //document.body.style= `background-color: rgb(${50+poeng*2}, 0, 0)`
 //}
 //tiden det tar for boksene å fly forbi
}, 2000-poeng*20);


}
