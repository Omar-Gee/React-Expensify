import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
	{ 
		description = '', 
		note = '', 
		amount = 0, 
		createdAt = 0 
	} = {} 
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
})
// remove
const removeExpense = ({ id }= {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

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
		case 'ADD_EXPENSE':
			return [
				...state, 
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id)
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

store.subscribe(() => {
	console.log(store.getState());
})
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 750000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

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

