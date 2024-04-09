// imagine a situation that we are going on a tour and we have our own bus and private car both bus (50) and private car (11) person capacity.if it will be less than 11 person we can not take the private car instead take the public transport and it cost each person 20 euro now calculate it according the the number of person we have 



const publicTransportFare = (person) => {
if(typeof person !== 'number' || person < 50){
    return ('Please provide the valid number')
}


    let publicTransportCost = 20;
    let busCapacity = person % 50;
    let fare = busCapacity % 11;
    let finalFare = fare * 20;
    return finalFare


    
}

const result = publicTransportFare(163)
console.log(result);