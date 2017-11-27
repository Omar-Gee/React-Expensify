export default (expenses) => {
	let allAmounts = expenses.map((expense) => {			
		return expense.amount;
	});
	const totalAmount = allAmounts.reduce((total, amount) => total + amount, 0);
	return totalAmount;
};