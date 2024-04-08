// write a function that name radianToDegree and take radian as a parameter and find the output in degree,make sure that degree only contains 2 digit after '.'


const radianToDegree = (radian) => {
let pi = Math.PI; 
const degree = (radian * (180 / pi)).toFixed(2);
return degree
}
const result = radianToDegree(10)
console.log(result);