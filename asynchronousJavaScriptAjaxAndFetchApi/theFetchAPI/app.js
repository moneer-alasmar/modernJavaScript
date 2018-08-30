document.getElementById('button1').addEventListener('click', getText);

// GET LOCAL TEXT FILE DATA
function getText() {
  fetch('test.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function (data) {
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// WITH ARROW FUNCTIONS
function getText() {
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
  }




document.getElementById('button2').addEventListener('click', getJson);

// GET LOCAL JSON DATA
function getJson() {
  fetch('posts.json')
  .then(function(res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `
        <li>${post.title}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// SAME AS ABOVE WITH ARROW FUNCTIONS
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `
        <li>${post.title}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err =>
    console.log(err));
}



document.getElementById('button3').addEventListener('click', getExternal);

// GET DATA FROM EXTERNAL API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(function(res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `
        <li>${user.login}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}

// SAME AS ABOVE WITH ARROW FUNCTIONS
function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `
        <li>${user.login}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}