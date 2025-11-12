// borrow_book.js
function borrow_book(book_title, available_books) {
    // Find the book in the list
    const index = available_books.indexOf(book_title);

    // If book not found
    if (index === -1) {
        return `Sorry, '${book_title}' is not available.`;
    }

    // If found, remove it
    available_books.splice(index, 1);
    return `You have borrowed '${book_title}'.`;
}

module.exports = borrow_book;
