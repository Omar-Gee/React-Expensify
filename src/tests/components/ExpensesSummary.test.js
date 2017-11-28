import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary, ExpensesSummary } from '../../components/ExpensesSummary';

test('should give ExpensesSummary component with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
	expect(wrapper).toMatchSnapshot();
});

test('should give ExpensesSummary component with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2353252335566}/>)
	expect(wrapper).toMatchSnapshot();
});