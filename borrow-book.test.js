// borrow_book.spec.js
const borrow_book = require('./borrow_book');

describe('borrow_book function tests', () => {
    test('borrows an available book and updates list', () => {
        const books = ["Moby Dick", "1984", "Pride and Prejudice"];
        const msg = borrow_book("1984", books);
        expect(msg).toBe("You have borrowed '1984'.");
        // books should be mutated: "1984" removed
        expect(books).toEqual(["Moby Dick", "Pride and Prejudice"]);
    });

    test('tries to borrow a book that is not available', () => {
        const books = ["Moby Dick"];
        const msg = borrow_book("The Hobbit", books);
        expect(msg).toBe("Sorry, 'The Hobbit' is not available.");
        expect(books).toEqual(["Moby Dick"]); // unchanged
    });

    test('borrowing from an empty list', () => {
        const books = [];
        const msg = borrow_book("Moby Dick", books);
        expect(msg).toBe("Sorry, 'Moby Dick' is not available.");
        expect(books).toEqual([]); // still empty
    });

    test('validates argument types (book_title must be string)', () => {
        expect(() => borrow_book(123, ["1984"])).toThrow('book_title must be a string');
    });

    test('validates argument types (available_books must be array)', () => {
        expect(() => borrow_book("1984", "not-an-array")).toThrow('available_books must be an array');
    });
});
