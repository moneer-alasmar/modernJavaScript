class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // CREATE TR ELEMENT
    const row = document.createElement('tr');
  
    // INSERT COLUMNS
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // CREATE DIV
    const div = document.createElement('div');
    // ADD CLASS
    div.className = `alert ${className}`;
    // ADD TEXT
    div.appendChild(document.createTextNode(message));
    // GET PARENT
    const container = document.querySelector('.container');
    // GET FORM
    const form = document.querySelector('#book-form');
    // INSERT ALERT
    container.insertBefore(div, form);
    // TIMEOUT AFTER 3 SECONDS
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000)
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// EVENT LISTENER FOR ADD BOOK
document.getElementById('book-form').addEventListener('submit', function(e){
  // GET FORM VALUES
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  // INSTANTIATE BOOK
  const book = new Book(title, author, isbn);

  // INSTANTIATE UI
  const ui = new UI();

  // VALIDATE
  if(title === '' || author === '' || isbn === '') {
    // ERROR ALERT
      ui.showAlert('Please fill in all fields', 'error');
  } else {
      // ADD BOOK TO LIST
      ui.addBookToList(book);

      // SHOW SUCCESS
      ui.showAlert('Book successfully added!', 'success');
    
      // CLEAR FIELDS
      ui.clearFields();
  }


  e.preventDefault();
});