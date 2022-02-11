//Övning 5

const person1 = {
    first: 'Clara',
    last: 'Leivas',
    location: 'Malmö'
}
const person2 = {
    first: 'Jonathan',
    last: 'Sandqvist',
    location: 'Los Angeles'
}

function combineNames({first}, {last}){
    return {
        firstName: first,
        lastName: last
    }
}

const person3 = combineNames(person1, person2);
console.log(person3);