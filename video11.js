
//const numbers = [1,2,3,4]
//const [n1,n2,n3,n4] = numbers

//  console.log(n1)
/*
const skills = [
    ["HTML","CSS","JAVASCRIPT"],
    ["PHP","C#","NODEJS"]
]
*/
// const [frontend, backend] = skills
// console.log(frontend)


//const names = ["Ali","Ahmet","Mehmet","Cenk","Tosun","Arda","Güler"]

//const [ben,birisi, ...otherNames] = names

// console.log(otherNames)                           

/*const countries = [
    ["Türkiye", "Ankara"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
    ["Findland", "Helsinki"]
]
*/
/*
for ( const country of countries){
     console.log(`Ülke: ${country[0]} - Başkent: ${country[1]}`)
}*/
const ben2 = {
    name:"Ali",
    secondName:"Fırat",
    surname:"Polat",
    age: 17,
    pets: {
        cats:["Paşa"],
        dogs:["Tarçın"]
    }
}

function showuserinfo({name, secondName, surname, age , pets: {dogs,cats}}){
    return `Merhaba, ben ${name} ${secondName} ${surname}. ${age} yaşındayım. ${cats.length} kedim ve ${dogs.length} köpeğim var.`
}
console.log(showuserinfo(ben2))

//const {surname: soyad} = ben2

//console.log(soyad)



/*
function multiply([num1,num2]){
    let carpim = numbers[0] * numbers[1]
    return carpim
}

let numbers = [10,30]
console.log(multiply(numbers))
*/