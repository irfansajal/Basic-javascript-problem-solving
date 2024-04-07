// write a function that take an array with different number and find the count of how many number is bigger than five

const findGreaterThanFive = (array) => {
  // console.log(array);
  let Count = 0;
  for (let i = 0; i < array.length; i++) {
    let arrayCount = array[i];
    //console.log("result " + arrayCount);
    if (arrayCount >= 5) Count++;
  }
  return Count;
};

let result = findGreaterThanFive([1, -6, 8, -3, 5, 4, 6, 10]);
console.log(result);
