import * as firebase from 'firebase';
import { setTimeout } from 'timers';
import moment from 'moment';

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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
// .on('value',(snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	});
// 	console.log(expenses);
// });

database.ref('expenses').push({
	description: 'Water bill',
	note: '',
	amount: 500,
	createdAt: 1
});


