import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({id: '123abc'});

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	})
})

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {note: 'some new value'});

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'some new value'
		}
	})
}) 

test('should setup add expense action object', () => {
	const expenseData = {
		description: 'Rent',
		amount: 50,
		createdAt: 1000,
		note: 'some note'
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
		
	});
})

test('should setup add expense action object with default values', () => {
	const expenseData = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	};
	const action = addExpense();

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})