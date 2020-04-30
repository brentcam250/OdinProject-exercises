let findTheOldest = function(people) {
    let oldest = people.reduce((currentOldest, person) => {
        if(!person.yearOfDeath){
            //they havent died yet, lets see how old they are today
            person.yearOfDeath = new Date().getFullYear();
        }
        if((currentOldest.yearOfDeath - currentOldest.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth)){
            return person;
        }else{
            return currentOldest;
        }
    }, people[0]);
    return oldest;
}


module.exports = findTheOldest
