//dealing with username validation
document.getElementById('username').addEventListener('input', function(ev){
let usernameElement =ev.target;
let username = usernameElement.value;

// access first char of username
var firstChar = username.charAt(0);

//check if first username start with a-z or A-Z
if(firstChar.toLowerCase() === firstChar || firstChar === firstChar.toUpperCase()){
    usernameElement.classList.add('valid-text');
    usernameElement.classList.remove('invalid-text');
} else {
    usernameElement.classList.add('invalid-text');
    usernameElement.classList.remove('valid-text');
    //should print "username must start with a-z or A-z"
}
if(username.length>3){
    usernameElement.classList.add('valid-text');
    usernameElement.classList.remove('invalid-text');
} else {
    usernameElement.classList.add('invalid-text');
    usernameElement.classList.remove('valid-text');
    // print "username must be username must be 3 or more alpha numeric characters"
} 
});



//dealing with PASSWORD validation
document.getElementById('password').addEventListener('input', function(ev){
    let passwordElement =ev.target;
    let password = passwordElement.value;
    
    //if password is 8 or  more characters
    if(password.length>7){
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');

        // AND if password contains at least 1 UPPER CASE LETTER
        for( i = 0; i < password.length; i++){
            var charAtIndex = password.charAt(i);
            if(charAtIndex.toUpperCase === charAtIndex){ // if UPPERCASE 
                //it IS an upperCase Letter

                //check if input contains 1 number (at least or exactly 1?)
                for( i = 0; i < password.length; i++){
                    var charAtIndex = password.charAt(i);
                    if (charAtIndex >= '0' && charAtIndex <= '9') { //if NUMBER
                        // it is a number
                        
                        //check for characters: / * - + ! @ # $ ^ ~ []
                        for( i = 0; i < password.length; i++){
                            var charAtIndex = password.charAt(i);
                            if (charAtIndex = '/', '*', '-', '+', '!', '@', '#', '$', '^', '~', '[', ']') { //is special character
                                passwordElement.classList.add('valid-text');
                                passwordElement.classList.remove('invalid-text');
                            }
                            else {
                                //no special character
                                passwordElement.classList.add('invalid-text');
                                passwordElement.classList.remove('valid-text');
                                // print "password must be contain SPECIAL CHARACTER"
                            }
                        }
                    } 
                    else { //if no number
                        passwordElement.classList.add('invalid-text');
                        passwordElement.classList.remove('valid-text');
                        // print "password must be contain number"
                    }          
                }   
            } else { // if NO uppercase
                passwordElement.classList.add('invalid-text');
                passwordElement.classList.remove('valid-text');
                // print "password must be contain uppercase"
                } 
        } 
    } else { // if not 8 or more chars 
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
        // print "password must be 8 or more characters"
        }
});


//  dealing with  CONFIRM PASSWORD
document.getElementById('password2').addEventListener('input', function(ev){
    let passwordElement =ev.target;
    let password2 = passwordElement.value;

    if(password2 === password){
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');
    } else{
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
    }
}
)

// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getAnimations('password');
// const password2 = document.getElementById(password2);

// form.addEventListener('Submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs(){
//     //get values from inputs
//     const usernameValue = username.value.trim();
//     const emailValue= email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim(); 

//     if(usernameValue === ''){
//         // empty username field
//         //show error
//         //add error class
//         setErrorFor(username, 'Username cannot be blank');
//     } else{
//         //add success class
//         setSuccessFor(username)
//     }
// }

// function setErrorFor(input, message){
//     const formControl = input.parentElement; //.form-control
//     const small = formControl.querySelector('small');

//     //add error class
//     formControl.className = 'form-control error';
// }
