/*
function outherFuction(){
    let count = 0;
    
    function innerFunction(){
        count++
        return count

    }
    return innerFunction
}

const innerFunc = outherFuction()
console.log(innerFunc())
*/

function counter(){
    let count = 0
    function up(){
        count++
        return count
    }
    function down(){
        count--
        return count                          
    }
    return {
        up,
        down
    }
}
let count = counter()

console.log(count.up())
console.log(count.down())
console.log(count.up())
console.log(count.down())

