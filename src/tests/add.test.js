import jest from 'jest';

const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}`;

//console.log(generateGreeting('omar'));
console.log(generateGreeting());

test('should return given name', () => {
	const result = generateGreeting('omar');

	expect(result).toBe(`Hello omar`);
});
test('should return anonymous name', () => {
	const result = generateGreeting();

	expect(result).toBe(`Hello anonymous`);
});



test('should add two number', () => {
	const result = add(3, 4);

	expect(result).toBe(7);
});