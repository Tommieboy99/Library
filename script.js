const myLibrary = []

function Book(newBook) {
  this.id = crypto.randomUUID();
  this.title = newBook.title,
  this.author = newBook.author,
  this.pages = newBook.pages,
  this.status = newBook.status
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book({title, author, pages, status});
  myLibrary.push(newBook);
}

console.log(addBookToLibrary("Catch me", "Tom Nibbet", 200, "not read"));
console.log(addBookToLibrary("Not for you", "Rip", 100, "read"));