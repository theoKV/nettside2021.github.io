/* skfite mellom ly og mørk tema*/
let theme = "Dark"

function myFunction(){
if (theme == "Pink"){
document.getElementById('stylesheet').href='CSS/stylesheet2.css'
theme = "Dark"

}else if(theme =="Dark"){
    document.getElementById('stylesheet').href='CSS/Light mode.css'
theme = "Light"
}else if(theme =="Light"){
  document.getElementById('stylesheet').href='CSS/Pink.css'
  theme = "Pink"
}



}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var large = false
  function Bilde(id){
    /*CSS som brukes   
    img{
    transition-duration:0.4s ;
    width: auto;
    height:50%;
    float: right;
    
  /* for runde hjørner på bildet border-radius: 100px;*/
  /*Bilde endrer seg når pekeren er over den*/
  /*
  img:hover{
    
    height: 79%;
    width: auto;
    position:absolute;
    border: 0px solid red;
right:0%;
top:1%;
  }*/
    /*Definerer hvliket bilde som skal brukes*/ 
    var pic = document.getElementById(id).style;
    /*hvis bildet er lite gjør det stort hvis ikke gjør det lite */
    if(large == false){
      pic.width = "auto"
      pic.position = "absolute"
      pic.right = "0%"
      pic.top = "1%"
      pic.height = "79%";
      pic.transitionDuration = "0.4s"
      large = true
      
    }else{
      pic.transitionDuration = "0s"
      pic.width = "auto"
      pic.height = "50%"
      large = false
      pic.position = "static"
    }
    
  }