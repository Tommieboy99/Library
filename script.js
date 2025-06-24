const myLibrary = []

function Book(newBook) {
  this.id = crypto.randomUUID();
  this.title = newBook.title;
  this.author = newBook.author;
  this.pages = newBook.pages;
  this.status = newBook.status;
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book({title, author, pages, status});
  myLibrary.push(newBook);
}

function displayLibrary() {
  myLibrary.forEach(book => {
    const tableBody = document.querySelector(".table-body");
    const row = document.createElement("tr");
  
    const idCell = document.createElement("td");
    idCell.textContent = book.id;

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const statusCell = document.createElement("td");
    statusCell.textContent = book.status;

    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
})};

const newBookBtn = document.querySelector(".btn-newBook");
const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector(".close-btn");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
})

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
})

const bookForm = document.querySelector("#bookForm");

bookForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const titleValue = document.querySelector('#title').value;
  const authorValue = document.querySelector('#author').value;
  const pagesValue = document.querySelector('#pages').value;
  const statusValue = document.querySelector('#status').value;

  addBookToLibrary(titleValue, authorValue, pagesValue, statusValue);
  displayLibrary();

  dialog.close();
})
