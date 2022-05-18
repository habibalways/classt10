
// email pattern

let email    = 'developerhabib1@gmail.com';
let patterns = /^[a-z0-9._]*@[a-z]{2,10}\.[a-z]{3,6}$/;
console.log(patterns.test(email));



//  UserName pattern

let usename     = 'developer@habib';
let patternUser = /^[a-z@_]{8,16}$/;
console.log(patternUser.test(usename));





// BD phone number pattern

let number = '01879972105';
let pattern = /^(\+8801|01|008801)[0-9]{9}$/;
console.log(pattern.test(number));




// Password pattern

let password        = 'Xw2@65sasd';
let passPattern = /^[a-zA-z0-9@#$%^&]{8,12}$/ ;
console.log(passPattern.test(password));



// Zipcode Pattern

let zip = '5602';
let zipPattern = /^[0-9]{4}$/ ;
console.log(zipPattern.test(zip));








   


