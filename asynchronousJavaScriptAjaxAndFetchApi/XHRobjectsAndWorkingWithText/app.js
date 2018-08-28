document.getElementById('button').addEventListener('click', loadData
);

function loadData() {
  // CREATE XHR OBJECT
  const xhr = new XMLHttpRequest();
  
  // OPEN
  xhr.open('GET', 'data.txt', true);

  // OPTIONAL - USED FOR SPINNERS/LOADERS/HOUR GLASSES
  xhr.onprogress = function() {
    console.log('Ready State: ', xhr.readyState);
  }


  xhr.onload = function() {
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>
      `;
    } 
  }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

  // READY STATE VALUES
  // 0 - REQUEST NOT INITIALIZED
  // 1 - SERVER CONNECTION ESTABLISHED
  // 2 - REQUEST RECEIVED
  // 3 - PROCESSING REQUEST
  // 4 - REQUEST FINISHED AND RESPONSE IS READY

  // HTTP STATUSES
  // 200 = OK
  // 403 = FORBIDDEN
  // 404 = NOT FOUND
}