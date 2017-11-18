import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>Amount: {amount}</p>
		<p>CreatedAt: {createdAt}</p>
		
	</div>
);

// const mapStateToProps = (state) => {
// 	return {	
// 		expenses: state.expenses
// 	}
// }

export default ExpenseListItem;