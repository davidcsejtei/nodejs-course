/*
    Szabályok:
        - más service-eket használhat
    VAGY
        - DAO-kat vagy Repository-kat használhat
*/

export function findAllUsers() {
    const users = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Peter',
            age: 40
        }
    ];

    return users;
}