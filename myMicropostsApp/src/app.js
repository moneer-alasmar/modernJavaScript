import { http } from './http';
import { ui } from './ui';

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR ADD POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

// LISTEN FOR DELETE
document.querySelector('#posts').addEventListener('click', deletePost);

// LISTEN FOR EDIT STATE
document.querySelector('#posts').addEventListener('click', enableEdit);

// GET POSTS
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// SUBMIT POSTS
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // CREATE POST
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post Added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
}

// DELETE POST
function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
  e.preventDefault();
}

// ENABLE EDIT STATE
function enableEdit(e) {
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    // FILL FORM WITH CURRENT POST
    ui.fillForm(data);
  }

  e.preventDefault();
}