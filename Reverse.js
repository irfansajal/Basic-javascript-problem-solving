// write two name and take them as a function parameter  and reverse and show the longest name

/* const findBiggerName = (nam) => {
  let longestName = "";

  for (let i = 0; i < nam.length; i++) {
    //console.log(nam[i]);
    let ele = nam[i];
    let find = ele.split("").reverse("").join("");

    if (ele.length > longestName.length) {
      longestName = find;
    }
  }
  return longestName;
};

let name = ["alina", "tony"];
let result = findBiggerName(name);
console.log(result); */
// second way 

/* const reverseName = (name1,name2)=> {
    let first = name1.length
    let second = name2.length
    if (first > second){
        return name1.split('').reverse().join('')
    }
    else{
        return name2.split("").reverse().join("");
    }

}
let result = reverseName('alina','bony')
console.log(result); */

