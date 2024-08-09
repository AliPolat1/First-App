//const h1 = document.querySelector("h1")
//const h1 = document.getElementsByTagName('h1')
/*for(let i = 0; i < h1.length; i++){
    console.log(h1[i])
}*/

// const h1 = document.querySelector(".test-1")
//const h1 = document.getElementsByClassName("test-1")
//console.log(h1)

//const title = document.querySelector("#test")
const titles = document.querySelectorAll("h1")
const title = document.getElementById("test")
test.setAttribute("title","test baslik")
//console.log(title)
/*
title.style.color = "white"
title.style.backgroundColor = "blue"
title.style.borderRadius = "6px"
title.classList.add("title")
title.classList.remove("title")
title.innerHTML += " TESSTTT"
*/
titles.forEach(( title , i) => {
    title.style.fontSize = "24px"
    title.style.backgroundColor = "black"
    if ( i % 2 == 0){
        title.style.color="green"

    }else{
        title.style.color ="red"

    }
    
});
//document.querySelectorAll(".test-1").forEach(item => console.log(item))