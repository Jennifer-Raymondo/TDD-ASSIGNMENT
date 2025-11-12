// borrow_book.test.js
const borrow_book = require('./borrow_book');

test('borrows a book that exists', () => {
    const books = ["Percy Jackson", "The Alchemist", "Dune"];
    const msg = borrow_book("Dune", books);
    expect(msg).toBe("You have borrowed 'Dune'.");
    expect(books).toEqual(["Percy Jackson", "The Alchemist"]);
});

test('tries to borrow a book that is not available', () => {
    const books = ["Percy Jackson", "The Alchemist"];
    const msg = borrow_book("The Hobbit", books);
    expect(msg).toBe("Sorry, 'The Hobbit' is not available.");
    expect(books).toEqual(["Percy Jackson", "The Alchemist"]);
});

test('borrowing from an empty list', () => {
    const books = [];
    const msg = borrow_book("The Alchemist", books);
    expect(msg).toBe("Sorry, 'The Alchemist' is not available.");
    expect(books).toEqual([]);
});
