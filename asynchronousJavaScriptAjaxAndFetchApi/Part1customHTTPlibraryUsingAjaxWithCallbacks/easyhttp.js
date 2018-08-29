function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// MAKE A 'GET' REQUEST
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
// MAKE A 'POST' REQUEST
// MAKE A 'PUT' REQUEST
// MAKE A 'DELETE' REQUEST