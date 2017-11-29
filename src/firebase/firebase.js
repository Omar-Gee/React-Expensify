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
	isSingle: "false",
	location: {
		city: 'Arnhem',
		country: 'Netherlands'
	}
}).then(() => {
	console.log('Data is saved!');
}).catch((e) => {
	console.log('error: ', e);
})

// database.ref().set('This is my data');
// database.ref('age').set(27);
// database.ref('location/city').set('Nijmegen');

database.ref('attributes').set({
		height: 1.8,
		weight: 80
}).then(() => {
	console.log('attributes added!');
}).catch((e) => {
	console.log('addAttributesError: ', e);
})