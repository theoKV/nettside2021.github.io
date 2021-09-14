/* skfite mellom ly og mørk tema*/
let theme = "Light"

function myFunction(){
if (theme == "Light"){
document.getElementById('stylesheet').href='CSS/stylesheet2.css'
theme = "Dark"

}else{
    document.getElementById('stylesheet').href='CSS/Light mode.css'
theme = "Light"
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