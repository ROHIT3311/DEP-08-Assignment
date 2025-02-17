// script.js
let books = [];

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const price = document.getElementById("bookPrice").value;
  if (name && author && price) {
    addBook(name, author, parseFloat(price));
    displayBooks();
    this.reset(); // Reset the form fields after book addition
  }
});

function addBook(name, author, price) {
  books.push({ name, author, price });
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const bookItem = `<div>
            ${book.name} by ${book.author}, $${book.price}
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>
        </div>`;
    bookList.innerHTML += bookItem;
  });
}

function editBook(index) {
  const book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookPrice").value = book.price;
  deleteBook(index); // Remove the book temporarily; re-add on "submit"
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function searchBooks() {
  const searchText = document.getElementById("searchBox").value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchText)
  );
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const bookItem = `<div>${book.name} by ${book.author}, $${book.price}</div>`;
    bookList.innerHTML += bookItem;
  });
}
