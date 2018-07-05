const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

function hello(){
  return 'hello';
}

// with template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</lli>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`
document.body.innerHTML = html;

