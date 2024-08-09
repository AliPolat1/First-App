

for (let i = 1; i <= 10;i++){
    let h1 = document.createElement("h1")

    h1.className = "test"
    h1.style.backgroundColor = "black"
    h1.style.color = "white"
    h1.textContent = "Test h"+i
    document.body.appendChild(h1)
}

const allH1Elements = document.querySelectorAll("h1.test")
setTimeout(() => {
    for(const h1 of allH1Elements){
        h1.removeChild(h1)
    }
    
}, 2500);