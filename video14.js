try{
    let name = "Ali"
    let surname = "Polat"
    let fullname = `${name} ${surname}` //     let fullname = `${name} ${surname}`
    throw "Bir hata yok."
} catch(err){
    console.log(`Bir hata var! işte hata\n `+ err)
}