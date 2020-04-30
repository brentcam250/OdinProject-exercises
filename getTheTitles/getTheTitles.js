const getTheTitles = function(booksArray) {
    let justTitles = booksArray.map(book => book.title);
    return justTitles;
}

module.exports = getTheTitles;
