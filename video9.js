const fonksiyon = number => number ** 2

3
function cube(cb, number) {
    return cb(number) * number
}


// console.log( cube(fonksiyon, 3))    

const a = sayi1 => {
    const b = sayi2 =>{
        const c = sayi3 => {
            return sayi1+sayi2+sayi3
        }
        return c
    }
    return b
}

// console.log(a(5)(5)(10))



const sayilar = [1,2,3,4,5,6]

let toplam = 0 



sayilar.forEach(toplamlari => toplam += toplamlari)
// console.log(toplam)


function merabade(){
    // console.log("selam")
}
// setTimeout(merabade, 1000)
const interval = setInterval(merabade, 1000)
const timeout = setTimeout(() => {
    clearInterval(interval)
    // console.log("Interval işlemi iptal edildi!")
}, 5000);

const sayilar2 = sayilar.map(sayi => sayi*2)
console.log(sayilar2)

let users = [
    {
        id:1,
        name:"Ali",
        age:17
    },
    {
        id:2,
        name:"Mehmet",
        age:16
    },
    {
        id:3,
        name:"Ahmet",
        age:15
    }
]
/*
users = users.map(user => {
    if(user.id == 2){
        user.name = "Memo"
    }
    return user
})
*/
//console.log(users)

console.log(
    sayilar.filter(number => number > 2 && number < 5 )
)

console.log(
    sayilar.reduce((eski, yeni) => eski+yeni, 0 )
)

console.log(
    sayilar.every((sayi) => typeof sayi == "number")
)

console.log(
    sayilar.some((sayi) => sayi == true)
)

console.log(
    sayilar.find((sayi) => sayi > 5)
)
console.log(
    sayilar.findIndex((sayi) => sayi > 5)
)
const harfler = ["A","B","C","D","E"]
console.log(harfler.sort())