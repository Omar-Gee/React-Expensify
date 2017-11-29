import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyAjK0dMgKWf7dbwta05vWHJnZgG8iC8nro",
	authDomain: "expensify-2c3e7.firebaseapp.com",
	databaseURL: "https://expensify-2c3e7.firebaseio.com",
	projectId: "expensify-2c3e7",
	storageBucket: "expensify-2c3e7.appspot.com",
	messagingSenderId: "649241051720"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
	name:"Omar Geerman",
	age: "31",
	stressLevel: 6,
	job:{ 
		title: 'sofware developer',
		company: 'google'
	},
	location: {
		city: 'Arnhem',
		country: 'Netherlands'
	}
}).then(() => {
	console.log('Data is saved!');
}).catch((e) => {
	console.log('error: ', e);
})

database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Amsterdam'
}).then(() => {
	console.log('updated changes!')
}).catch((e) => {
	console.log('error: ', e);
})

// database.ref().remove().then(() => {
// 	console.log('data was removed');
// }).catch((e) => {
// 	console.log('Did not remove data ', e);
// })