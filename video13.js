// // console.log("30 days of JavaScript")
// console.log(["Ali","Mehmet","Ahmet"])

/* console.log({
    name:"Ali",
    age:17,
    surname:"Polat"
})*/

// console.log("Ben %d yaşındayım ve %d yılında doğdum",10,1993)

//console.log("%c Dur!","font-size:50px; font-family: Arial;color:red;text-shadow: 2px 2px 1  px white")

//console.warn("DİKKAT")
//console.error("DİKKAT")

let isimler = ["Ahmet","Ali","Mehmet"]

console.table({
//    name:"Ali",
  //  surname:"Polat"
})

//console.time("calculate 1m array")
//new Array(10e6).fill("abc").map((value,index) => index)
//console.timeEnd("calculate 1m array")

//let a = 5
//let b = 6
//console.assert(a>b,"A B'den büyük değil")

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]


console.group("İsimler")
console.log(names)
console.groupEnd()
console.group("Ülkeler")
console.log(countries)
console.groupEnd()
console.group("Kullanıcılar")
console.log(user)
console.log(users)
console.groupEnd()

const test = () => {
    console.count("Test çağrısı")
}
test()
test()
test()  

console.clear()