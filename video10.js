const names = new Set(["ali","mehmet","ahmet"])
const namesdizi = ["Ahmet","Ali","Mehmet","Baransel","Ahmet","Ali","Mehmet","Baransel"]

/*
// console.log(names)
for (let name of names){
    // console.log('Ad',name)
}
names.add("baran")
//console.log(names)
const names2= new Set()
const namesdizi = ["Ahmet","Ali","Mehmet","Baransel"]

for (let name of namesdizi){
    names2.add(name)
}
// console.log(names2)
names2.delete("Ahmet")
// console.log(names2)

console.log(
    names2.has("Ahmet")
)
*/

// console.log( new Set(namesdizi))

const languages = [
    "İngilizce",
    "Fransızca",
    "İspanyolca",
    "İngilizce",
    "Fransızca",
    "Almanca"
]
const counts = []

const langSet = new Set(languages)
//console.log(langSet)
//console.log(langSet.size)

for(let l of langSet){
    const dilfiltresi = languages.filter(lng => lng == l)
    // console.log(dilfiltresi)
    counts.push({
        language: l,
        count: dilfiltresi.length
    })
}

// console.log(counts)

let a = [1,2,3,4,5,6,20,30,40]
let b = [1,2,3,4,5,60,70,80]
//let c = [...a,...b]

//console.log(new Set(c))



const map = new Map()

map.set("name","Ali")
console.log(map)
console.log(map.size)
const ahmet = {
    name: "Ahmet"
}
const mehmet = {
    name: "Mehmet"
}

map.set(ahmet,120)
    .set(mehmet,100);

// console.log(map)
