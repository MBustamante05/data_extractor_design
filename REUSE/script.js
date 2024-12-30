//USER VALIDATION
const usernameValidation = /^(?!.*@)[a-z][a-z]+\d*|^(?!.*@)[a-z][a-z]*\d\d+$/i;
let quote = 'Hello@gmail.com';
let result = usernameValidation.test(quote);

//EMAIL VALIDATION
const emailValidation = /^[A-Za-z\._\-0-9]*[@][A-za-z]+[\.][a-z]{2,4}([\.][a-z]{2,4})?$/;
quote = 'Bmosquera0510@gmail.com.co';


//PASSWORD VALIDATION

function password(word){
  let valid = /^[a-zA-Z]/g
  if(word.length < 8 ){
    console.log(word + ' does not have 8 characters or more');
  }else if(!word.match(valid)){
    console.log('Your password should not start with a number or special character');
  }else if(word.length > 16){
    console.log(word + 'has more expected characters: ' + word.length);
  }
  else{
    console.log('You have log in with: ' + word)
  }
  
}

export {usernameValidation, emailValidation};