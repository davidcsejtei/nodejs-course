import { findAllUsers } from "./userService";

describe('User service', () => {
    test('Find all users', async () => {
        const expectedUsers = [
            {
                name: 'John',
                age: 30
            },
            {
                name: 'Peter',
                age: 40
            }
        ];

        const users = findAllUsers();

        expect(users).toEqual(expectedUsers);
    });
});