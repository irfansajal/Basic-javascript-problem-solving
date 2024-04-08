// write a function that take the parameter as a file and return if it is a javascript file or another kind of file.normal function or any array function would be fine 


const findTheFileName = (file) => {
    
    if(file.endsWith('.js')){
      return  true
    }
    else{
        return false
    }

}

const result = findTheFileName('index.js')
console.log(result);