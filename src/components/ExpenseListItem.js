import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
	<div>
		<h3>{description}</h3>
		<p>Amount: {amount}</p>
		<p>CreatedAt: {createdAt}</p>
		<button onClick={ () => {
			dispatch(removeExpense({id}))		
		}}
		>
			Remove
		</button>
	</div>
);

// const mapStateToProps = (state) => {
// 	return {	
// 		expenses: state.expenses
// 	}
// }

export default connect()(ExpenseListItem);