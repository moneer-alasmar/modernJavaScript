// PERSON CONSTRUCCTOR
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const moneer = new Person('Moneer', 31);
// const mo = new Person('Meagan', 27);

// console.log(moneer.age);

const moneer = new Person('Moneer', '12-6-1986');

console.log(moneer.calculateAge());