class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  // SHOW ALL POSTS
  showPosts(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // SHOW ALERT MESSAGE
  showAlert(message, className) {
    this.clearAlert();

    // CREATE DIV
    const div = document.createElement('div');
    // ADD CLASSES
    div.className = className;
    // ADD TEXT
    div.append(document.createTextNode(message));
    // GET PARENT
    const container = document.querySelector('.postsContainer');
    // GET POSTS
    const posts = document.querySelector('#posts');
    // INSERT ALERT DIV
    container.insertBefore(div, posts);

    // TIMEOUT
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  // CLEAR ALERT MESSAGES
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }
  // CLEAR FIELDS
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // FILL FORM TO EDIT
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // CLEAR ID HIDDEN VALUE
  clearIdInput() {
    this.idInput.value = '';
  }

  // CHANGE THE FORM STATE
  changeFormState(type) {
    if(type === 'edit') {
      // CHANGE SUBMIT BUTTON TEXT CONTENT AND COLOR
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // CANCEL EDIT BUTTON
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      // GET PARENT
      const cardForm = document.querySelector('.card-form');

      // GET ELEMENT TO INSERT BEFORE
      const formEnd = document.querySelector('.form-end');

      // INSERT CANCEL BUTTON
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It!';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';

      // REMOVE CANCEL BUTTON
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // CLEAR ID FROM HIDDEN FIELD
      this.clearIdInput();

      // CLEAR TEXT FIELDS
      this.clearFields();
    }
  }
}

export const ui = new UI();