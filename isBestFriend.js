// write a function that take two parameter as object and find the best friend from the object, return true or false

const isBestFriend = (obj1,obj2) => {
if(obj1.name === obj2.friend && obj2.name === obj1.friend){
    return true
}
else{
    return false
}

}

let obj1 = {name:'alex',friend:
'rita'}
let obj2 = { name:'irfan',friend:'alex'}
let find = isBestFriend(obj1,obj2)
console.log(find);