const user = {
    ad:"Ali",
    soyad:"Polat",
    age:17,
    pc:false,
    laptop:true,
    "phone number": "05447245771",
    skills:[
        "HTML",
        "CSS",
        "C#",
        "Lua"
    ],
    akraba:[
        "Senem",
        "Metin",
        "Baransel"
    ],
    tamisim : function(){
        return `${this.ad} ${this.soyad}`
    }
}

// console.log(user)

// console.log(user.ad)
// console.log(user.skills)
// console.log(user.skills[0])
// console.log(user["phone number"])
// console.log(user.tamisim())

user.skills.push("JavaScript")
//  console.log(user.skills)

user.bilgiyigetir = function() {
    let skills = this.skills.splice(0, this.skills.length ).join(', ')
    // console.log(skills)    
}

// console.log(user.bilgiyigetir())
let newUser = Object.assign({}, user)

// console.log(user)

newUser.ad = 'Ahmet'

// console.log(newUser)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


for( let [key,val] of Object.entries(user)){
    // console.log(`Key = ${key}, Value = ${val}`)
}
// console.log( user.hasOwnProperty("ad"))


