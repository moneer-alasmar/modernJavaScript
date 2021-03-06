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

// BRACKETS [] - CHARACTER SETS
re = /gr[ae]y/i; // MUST BE AN A OR E
re = /[GF]ray/i;  // MUST BE A G OR F
re = /[^GF]ray/i;  // MATCH ANYTHING EXCEPT  A G OR F
re = /[A-Z]ray/;  // MATCH ANY UPPERCASE LETTER
re = /[a-z]ray/;  // MATCH ANY LOWERCASE LETTER
re = /[A-Za-z]ray/;  // MATCH ANY LETTER
re = /[0-9]ray/; // MATCH ANY DIGIT IN RANGE

// BRACES {} - QUANTIFIERS
re = /Hel{2}o/i; // MUST OCCUR EXACTLY {M} AMOUNT OF TIMES
re = /Hel{2,4}o/i; // MUST OCCUR EXACTLY {M} AMOUNT OF TIMES IN RANGE
re = /Hel{2,}o/i; // MUST OCCUR AT LEAST {M} TIMES

// PARENTHESIS () - GROUPING
re = /^([0-9]x){3}$/;

// STRING TO MATCH
const str = '3x3x3x';

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