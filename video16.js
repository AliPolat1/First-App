let sampleJSON = `[
    {
        "name": "Ali",
        "surname":"Polat"
    },
    {   
        "name": "Baran",
        "surname":"Polat"
    },
    {   
        "name": "Senem",
        "surname":"Polat"
    }

]`;


try {
    let users = JSON.parse(sampleJSON, (key,value) => {
        return key == "name" ? value.toUpperCase() : value
    })
    //console.log(users)
}
catch(err){
    console.log("JSON parse edilip yazdırılırken bir hata oluştu. İşte hata : "+err)
}


let categories = [
    {
        name: "CSS",
        count: 5
    },
    {
        name: "Javascript",
        count: 16
    }
]

let categoriesJSON = JSON.stringify(categories, ["count","name"],4)
console.log(categoriesJSON)