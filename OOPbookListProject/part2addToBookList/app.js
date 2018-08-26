// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI CONSTRUCTOR
function UI() {}

// EVENT LISTENER
document.getElementById('book-form').addEventListener('submit', function(e){
  console.log('test');
  // GET FORM VALUES
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  e.preventDefault();
})