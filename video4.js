// Koşullar if , else , else if , switch , Ternary Operator

/*
let sayi1 = parseInt(prompt("Sayi 1: "))
let sayi2 = parseInt(prompt("Sayi 2: "))
if ( sayi1 > sayi2){
    console.log (" Birinci sayı ikinci sayıdan büyüktür.")
}
else if ( sayi1 < sayi2){
    console.log("İkinci sayı birinci sayıdan büyüktür.")
}
else{
    console.log("Sayılar birbirine eşitti!")
}
*/
/*
for(let i=1; i<=10;i++){
    if(i%2 == 0){
        console.log("Sayı çift: " + i)
    }
    else{
        console.log("Sayı tek: " + i)

    }
}
*/

/*
let sayi = parseInt(prompt("Aklımdaki sayıyı bil!: "));

switch(sayi){
    case 3:
        console.log("Doğru cevap. Tebrikler!");
        break;
    default:
        console.log("Hatalı cevap.");
}
*/
let sayi = parseInt(prompt("Aklımdaki sayıyı bil!: "));

/*switch(sayi){
    case 3:
        console.log("Doğru cevap. Tebrikler!");
        break;
    default:
        console.log("Hatalı cevap.");
}
*/

console.log(
    sayi == 3 ? "Tebrikler!" : "Yanlış!"
)


