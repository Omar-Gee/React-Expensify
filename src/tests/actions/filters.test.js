import { 
	setTextFilter, 
	sortByDate, 
	sortByAmount, 
	setStartDate, 
	setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should generate start date action object', () => {
	const action = setStartDate(moment(0));

	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
});

test('should generate end date action object', () => {
	const action = setEndDate(moment(100));

	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(100)
	})
});

test('should set text filter action object with text value', () => {
	const action =setTextFilter('test');

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'test'
	})
})

test('should set text filter action object with default values', () => {
	const action =setTextFilter();

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
})

test('should set sort by amount action object', () => {
	const action = sortByAmount();

	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	})
})

test('should set sort by date action object', () => {
	const action = sortByDate();

	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	})
})