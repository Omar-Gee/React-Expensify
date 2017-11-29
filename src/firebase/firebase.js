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

database.ref('expenses').push({
	description: 'Rent',
	note: '',
	amount: 500,
	createdAt: 1
});

database.ref('expenses').push({
	description: 'Gum',
	note: '',
	amount: 5,
	createdAt: 1
});

database.ref('expenses').push({
	description: 'Water Bill',
	note: '',
	amount: 200,
	createdAt: 1
});
