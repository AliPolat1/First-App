const onay = confirm('Bu kodları test etmek istediğine emin misin?')

let benmiyim = true
let dogru = 4 > 3
let yanlis = 4 == 3
 
//console.log(dogru)
//console.log(yanlis)

let a = 5 
let b = 6

//console.log( a += b );
//console.log( a-b );
//console.log(a==b)
//console.log(a!=b)
//console.log(a<b)
//console.log(a>b)


//console.log( "Ali".lenght == "Mehmet".length )


let tarih = new Date()

console.log("Tam Tarih: "+ tarih.getDate())
console.log("Yıl: "+ tarih.getFullYear())
console.log("Ay: "+ tarih.getMonth())
console.log("Gün: "+ tarih.getDay())
console.log("Saat: "+ tarih.getHours()+":"+tarih.getMinutes())

// veri girişi alma

//let sayi1 = parseInt(prompt("Sayi 1: "))
//let sayi2 = parseInt(prompt("Sayi 2: "))
//let toplam = sayi1 + sayi2
//console.log("Toplam= " + toplam)


// girişe göre işlem yapma 

let sayi1 = parseInt(prompt("Sayi 1: "))
let sayi2 = parseInt(prompt("Sayi 2: "))

let toplam = sayi1 + sayi2
console.log("Cevap= " + toplam)
    


