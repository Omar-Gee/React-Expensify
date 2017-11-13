//
// Object Destructuring
//


// const person = {
// 	name: 'Omar',
// 	age: 31,
// 	location: {
// 		city: 'Arnhem',
// 		temp: 3
// 	}
// };

// // ES6 Destructuring
// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age}!`);

// const { city, temp: temperature } =person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['Cloekplein 62', 'Arnhem', 'Gelderland', '6826KT'];
const [, city, state = 'Drolois',] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [itemType, , mediumPrice,] = item;

console.log(`A medium ${itemType} costs ${mediumPrice}`)