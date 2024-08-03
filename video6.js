// Döngüler
const dizi = []
const isimler = ["Ahmet", "Mehmet", "Veli", "Ali", "Baransel", "Senem", "Metin"]
for(let i = 0; i<=10; i++){
    //console.log(i)
}
for(let i = 10; i>=0; i--){
   // console.log(i)
}



for(let i = 1; i<=5; i++){
    dizi.push(i)
}
//console.log(dizi)
let toplam = 5

for(let i = 0; i<=dizi.length -1; i++){
     toplam += dizi[i]
}
//console.log(toplam)

//console.log(dizi)


let i = 0 
while( i <= 5) {
    //console.log(i)
    i++
}

let n = 0
do{
    //console.log("Ad: ",isimler[n])
    n++
}while(n < isimler.length)


for(let isim of isimler){
    //console.log("İsim: ",isim)
}

for(let isim of isimler){
    if(isim != "Ali"){
        continue;
    }
    if(isim == "Ali"){
        console.log("Ali Bulundu!")
        break;
    }
    console.log(isim)
}

for(let i=0;i<=10; i++){
    console.log(i + " x "+  i +" = "+i*i)
}
for(let i=0;i<=10; i++){
    console.log(i ,i**2 , i**3)
}
let tektoplam= 0 
let cifttoplam= 0
let tekcifttoplam = []
for(let i=0;i<=100;i++){
    if(i%2== 0){
        cifttoplam += i
    }
    else{
        tektoplam += i
    }
    if(i== 100){
        tekcifttoplam.push(tektoplam, cifttoplam)
    }
}
console.log(tekcifttoplam)
