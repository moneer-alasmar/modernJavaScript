// OBJECT.PROTOTYPE
// PERSON.PROTOTYPE

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// CALCULATE AGE
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// GET FULL NAME
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// GETS MARRIED
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const moneer = new Person('Moneer', 'Alasmar', '12-6-86');
const meagan = new Person('Meagan', 'Alasmar', '1-22-91');

console.log(meagan);

console.log(moneer.calculateAge());

console.log(meagan.getFullName());

meagan.getsMarried('Al-Asmar');

console.log(meagan.getFullName());

console.log(meagan.hasOwnProperty('firstName'));

console.log(meagan.hasOwnProperty('getFullName'));