import { http } from './http';
import { ui } from './ui';

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR ADD POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

// LISTEN FOR DELETE
document.querySelector('#posts').addEventListener('click', deletePost);

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