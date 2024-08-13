/*
const button = document.getElementById("btn")


button.addEventListener("click",function(e){
    console.log("Selam")
})
*/

function clickHandle(){
    console.log("slm")
}

const dblclick = document.getElementById("dblclick")


dblclick.addEventListener("dblclick",function(e){
    console.log("DBLClick")
})
dblclick.addEventListener("mouseenter",function(e){
    console.log("mouseenter")
})

const input = document.getElementById("textt")

input.addEventListener("input",e =>{
    console.log("birşeyler yazılıyor...", e.target.value)
})

const color = document.getElementById("colorpicker")

color.addEventListener("input", e=>{
    document.body.style.backgroundColor = e.target.value
})