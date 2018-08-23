const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());

const moneer = Object.create(personPrototypes, {
  firstName: {value: 'Moneer'},
  lastName: {value: 'Alasmar'},
  age: {value: 31}
})

console.log(moneer)
console.log(moneer.greeting());