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

const book = {
	title: 'Ego is the enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'Self-Published'} = book.publisher;


console.log(publisherName);