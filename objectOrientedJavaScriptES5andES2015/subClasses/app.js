class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const moneer = new Customer('Moneer', 'Alasmar', '111-111-1111', 'Standard');

console.log(moneer.greeting());
console.log(Customer.getMembershipCost());
