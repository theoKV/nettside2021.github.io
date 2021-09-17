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