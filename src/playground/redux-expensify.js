import { createStore, combineReducers } from 'redux';

// add
// remove
// edit
// set text filter
// sort by date
// sort by amount
// setstartdate
// set enddate

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
// Filters reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

// Store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

const demoState = {
	expenses: [{
		id: 'awdwac',
		description: 'Januari Rent',
		note: 'This was the final payment for that address',
		amount: 75000,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};

