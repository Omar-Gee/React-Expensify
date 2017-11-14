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
// REMOVE_EXPENSE
const removeExpense = ({ id }= {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id, 
	updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});
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
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
					return expense;
				}

			})
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
		case 'SET_TEXT_FILTER':
		return { ...state, text: action.text}
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
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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


// Object spread operator

// const user = {
// 	name: 'Jen',
// 	age: 24
// }

// console.log({
// 	...user,	
// 	location: 'Arnhem',
// 	age: 27
// });