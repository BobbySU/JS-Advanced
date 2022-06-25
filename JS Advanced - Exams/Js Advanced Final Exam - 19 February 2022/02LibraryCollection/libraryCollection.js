class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length < this.capacity) {
            this.books.push({
                bookName: bookName,
                bookAuthor: bookAuthor,
                payed: false
            })
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        } else {
            throw new Error("Not enough space in the collection.");
        }
    }

    payBook(bookName) {
        let bookIndex = this.books.findIndex((e) => e.bookName == bookName);
        if (bookIndex == -1) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (this.books[bookIndex].payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        this.books[bookIndex].payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let bookIndex = this.books.findIndex((e) => e.bookName == bookName);
        if (bookIndex == -1) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (!this.books[bookIndex].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            let bookIndex = this.books.findIndex((e) => e.bookAuthor == bookAuthor);
            if (bookIndex == -1) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            return `${this.books[bookIndex].bookName} == ${this.books[bookIndex].bookAuthor} - ${this.books[bookIndex].payed ? 'Has Paid' : 'Not Paid'}.`
        } else {
            let emptySlots = this.capacity - this.books.length;
            let sortBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let output = sortBook.map(e => `${e.bookName} == ${e.bookAuthor} - ${e.payed ? 'Has Paid' : 'Not Paid'}.`).join('\n');
            return [
                `The book collection has ${emptySlots} empty spots left.`,
                output
            ].join('\n')
        }
    }
}

let library = new LibraryCollection(5);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.payBook("Don Quixote"));
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("Ulysses", "James Joyce"));
console.log(library.getStatistics())


