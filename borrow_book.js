// borrow_book.js
function borrow_book(book_title, available_books) {
    // Input validation
    if (typeof book_title !== 'string') {
        throw new Error('book_title must be a string');
    }
    if (!Array.isArray(available_books)) {
        throw new Error('available_books must be an array');
    }

    // Find the book index (exact match)
    const idx = available_books.findIndex(title => title === book_title);

    if (idx === -1) {
        // Not found
        return `Sorry, '${book_title}' is not available.`;
    }

    // Remove the book from the original array (side-effect required by spec)
    available_books.splice(idx, 1);

    // Return success message
    return `You have borrowed '${book_title}'.`;
}

module.exports = borrow_book;
