const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook)
}

function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.style.border = "0.5rem solid black";
        bookDiv.style.padding = "1rem";
        bookDiv.style.margin = "1rem";

        bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        `;

        bookList.appendChild(bookDiv);
    });
}

addBookToLibrary("Pap, vertel eens...", "Elma van Vliet", 208, false);
addBookToLibrary("De laatste ochtend", "Samuel Bjork", 400, false);
addBookToLibrary("Vrees niet", "Stephen King", 496, false);

displayBooks();