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