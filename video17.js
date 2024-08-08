
/*
localStorage.setItem("name","Ali")
console.log(localStorage)
console.log(localStorage.getItem("name"))
console.log(localStorage)
console.log(localStorage.key(0))
const names = ["Ali","Fırat","Polat"]
localStorage.setItem("names",names)
console.log(localStorage)
*/

const user = {
    name:"Ali",
    surname:"Polat"
}
localStorage.setItem("user",JSON.stringify(user))
console.log(localStorage)
localStorage.clear()

console.log(JSON.parse(localStorage.getItem("user")))


let sepet = JSON.parse(localStorage.getItem("basket")) ||  []
const urunler = [
    {
        id:1,
        title:"Bilgisayar",
        price:10000
    },
    {
        id:2,
        title:"Klavye",
        price:999
    },
    {
        id:3,
        title:"Mouse",
        price:140
    },

]

function addBasket(productId){
    sepet.push(productId)
    localStorage.setItem("basket", JSON.stringify(sepet))
    saveToStorage()

}

function removeBasket(productId){
    basket = basket.filter( id => i != productId)
    saveToStorage()
}
function saveToStorage(){
    localStorage.setItem("basket", JSON.stringify(sepet))
}
addBasket(2)
addBasket(3)
console.log(sepet)
