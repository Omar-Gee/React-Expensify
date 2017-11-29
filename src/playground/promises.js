import { setTimeout } from "timers";


const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'andrew',
		// 	age: 26
		// });
		reject('Something went wrong');
	}, 1500);
});
console.log('before');

promise.then((data) => {
	console.log('1', data);
}).catch((error) => {
	console.log('error: ', error);
})


console.log('after');