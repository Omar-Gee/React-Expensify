import {createStore} from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ setAmount }) => ({
	type: 'SET',
	count: setAmount
});

const resetCount = () => ({
	type: 'RESET'
});



const store = createStore((state = { count:0 }, action) => {
	switch (action.type){ 
		case 'INCREMENT':
		const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
			return {
				count: state.count + incrementBy
			};
		 case 'DECREMENT':
		 const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
			return {
				count: state.count - decrementBy
			}
		case 'RESET': 
			return {
				count: 0
			}
		case 'SET':
			return {
				count: action.count
			}
	 default: 
			return state;
	}	
});

store.subscribe(() => {
	console.log(store.getState());
})

// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy:5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ setAmount: -100 }))