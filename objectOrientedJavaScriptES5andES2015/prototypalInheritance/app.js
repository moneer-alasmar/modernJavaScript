// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Moneer', 'Alasmar');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, memberShip) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.memberShip = memberShip;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer();
Customer.prototype.constructor = Customer;

// create customer
const customer1 = new Customer('Meagan', 'Alasmar', '111-111-1111', 'standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName} welcome to our company!`;
}

console.log(customer1.greeting());