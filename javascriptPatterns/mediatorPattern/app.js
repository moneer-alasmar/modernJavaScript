const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // LIST OF USERS

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to){
        // SINGLE USER MESSAGE
        to.recieve(message, from);
      } else {
        // MASS MESSAGE TO ENTIRE CHATROOM
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const moneer = new User('Moneer');
const meagan = new User('Meagan');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(moneer);
chatroom.register(meagan);

moneer.send('Hello Brad', brad);
meagan.send('Hello moneer', moneer);
brad.send('Hello everyone!');