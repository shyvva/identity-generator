const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = [
    'John',
    'Matthew',
    'Carl',
    'Paul',
    'Steve',
    'David',
    'James',
    'Janusz',
    'Freddy',
    'Bruce',
    'Tom',
    'Luise',
];

const femaleNames = [
    'Victoria',
    'Johanna',
    'Megan',
    'Scarllet',
    'Janet',
    'Anna',
    'Hannah',
    'Elizabeth',
    'Uma',
    'Katarina',
    'Evelyn',
    'Fiora',
];

const lastNames = [
    'Kowalsky',
    'Snow',
    'Black',
    'Gray',
    'Skywalker',
    'Potter',
    'Mercury',
    'Hamilton',
    'Jackson',
    'Johanson',
    'Ragnarson',
    'Novak',
];

const people = [];
const maxAge = 78;
const minAge = 18;

const randChoice = (arr) => {

    const randomGenerate = Math.floor(Math.random() * arr.length);
    const item = arr[randomGenerate];

    return item;
}

for (let i = 0; i < 20; i++) {

    const genderRandom = randChoice(genders);

    if (genderRandom == 'F') {
        name = randChoice(femaleNames);
    } else {
        name = randChoice(maleNames);
    };
    const lastName = randChoice(lastNames);

    const generatedPerson = {
        firstName: name,
        lastName: lastName,
        gender: genderRandom,
        age: Math.floor(Math.random() * (maxAge - minAge +1)) + minAge,
        email: `${name.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
        telephone: `+48${Math.floor(100000000 + Math.random() * 900000000)}`,
    };

    people.push(generatedPerson);
};


console.log('people', people);

const data = JSON.stringify(people);


fs.writeFile('people.json', data, (err) => {
    if (err) throw ('Something went wrong', err);
    console.log('The file has been saved!');
});
