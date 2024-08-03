function selamver(){
    console.log("Selamun Aleyküm")
}
selamver()
console.log("Aleyküm Selam")

function tamisim(){
    let isim = "Ali"
    let isim2 = "Fırat"
    let soyad = "Polat"
    let birlesik = isim+" "+isim2+" "+soyad
    return birlesik
}

console.log(tamisim())


function toplama(sayi1,sayi2){
    let toplam= sayi1+sayi2
    return toplam;
}

//let toplanacak1 = parseInt(prompt("Toplanacak 1. sayıyı giriniz"))
//let toplanacak2 = parseInt(prompt("Toplanacak 2. sayıyı giriniz"))

//console.log(toplama(toplanacak1,toplanacak2))


function argumanlar(){
    //console.log(arguments)
}
argumanlar(12,3,4,6,7,8)



function argumantoplama(){
    let toplam = 0 
    for(let i = 0; i <arguments.length; i++)
    {
        toplam += arguments[i]
    }
    return toplam;
}
console.log(argumantoplama(1,2,3,4,5,6,7))


const merabade = function(name){
    return `Selam ${name}`
}

console.log(merabade("Ali"))


;(function() {
    console.log("Selam");
})()

let merabadesene = (function(name){
    console.log(`Merhaba ${name}`)
})("Ali")



const selamdur = name => `Selam Dostum ${name}`;
console.log(selamdur("Ali"))