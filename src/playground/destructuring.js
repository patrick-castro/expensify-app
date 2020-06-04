//
// Object Destructuring
//

// const person = {
//   name: 'Patrick',
//   age: 23,
//   location: {
//     city: 'Davao City',
//     temp: 92,
//   },
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const { temp: temperature, city } = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

const address = ['1299 S Juniper Street', 'Philly', 'Pennysylvania', '19147', 'Davao'];

const [street, city, state, ...something] = address;

console.log(`You are in ${city} ${state}`);
console.log(`${something}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${coffee} costs ${mediumPrice}`);
