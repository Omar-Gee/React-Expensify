import { login, logout } from '../../actions/auth';

test('should generate login object', () => {
	const action = login(7);

	expect(action).toEqual({
		type: 'LOGIN',
		uid: 7
	})
});

test('should generate logout object', () => {
	const action = logout();

	expect(action).toEqual({ type: 'LOGOUT' });
});