import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? (
				<p>No expenses</p>
			) : (
				props.expenses.map((expense, index) => {
					return <ExpenseListItem {...expense}
						key={index} 
						optionText={expense}
						
					/>
				})
			)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
};

export default connect(mapStateToProps)(ExpenseList);
