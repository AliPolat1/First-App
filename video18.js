/*  
const test = callback => {
    setTimeout(() => {
        callback("hata oluştu", [] )
    }, 2000)

}

const callback = (err, data) =>     {
    if(err){
        console.log("hata", err)
    } else{
        console.log("data", data)
    }

}

test(callback)

const promise = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("İşlem başarılı.")

    }, 1500)

    //reject("İşlem başarısız.")
})

console.log(
    promise
)

promise.then((data) => {
    console.log(data)
}).catch(err => {
    console.warn(err)
})

*/

const API_URL = "https://jsonplaceholder.typicode.com/posts"

/*
fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
*/

async function getPosts(){
    try {
        const response = await fetch(API_URL)
        const data = await response.json();
        console.log(data)
    } catch(err){
        console.error(err)
    }
}
getPosts()