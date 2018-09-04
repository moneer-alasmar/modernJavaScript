let re;
// LITERAL CHARACTERS
re = /hello/;
re = /hello/i;

// META CHARACTER SYMBOLS
re = /^h/i;  // MUST START WITH
re = /world$/i;  // MUST END WITH
re = /^hello$/i; // MUST BEGIN AND END WITH
re = /h.llo/i; // MATCHES ANY ONE CHARACTER
re = /h*llo/i; // MATCHES ANY CHARACTER 0 OR MORE TIMES
re = /gre?a?y/i; // OPTIONAL CHARACTER IN WORD
re = /gre?a?y\?/i; // ESCAPE CHARACTER

// STRING TO MATCH
const str = 'Gray?';

// LOG RESULTS
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);