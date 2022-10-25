// Elements by id
const newName = document.getElementById('fullName'),
      newUsername = document.getElementById('newUsername'),
      newPassword = document.getElementById('newPassword'),
      confirmPassword = document.getElementById('confirmPassword'),
      
      signUpForm = document.getElementById('signUp'),

      usernameWarning = document.getElementById('usernameWarning'),
      passwordWarning = document.getElementById('passwordWarning'),
      confirmPasswordWarning = document.getElementById('confirmPasswordWarning'); 

// Event Listeners
newUsername.oninput = checkUsername;
newPassword.oninput = validatePassword;
confirmPassword.onchange = comparePasswords;
signUpForm.onsubmit = submitForm;

// Login

// Sign Up
    
// Check to see if username already exists on the server
var userMatch = false;

function checkUsername() {
    var username = "user=" + newUsername.value;

    // Make AJAX Call to api/register
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/user" + "?" + username, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE){
        var user = xhr.responseText;

            if (user == 'true') {
                usernameWarning.style.display = 'block';
                userMatch = true;
            } else {
                usernameWarning.style.display = 'none';
                userMatch = false;
            }
        }
    }
}

// Make sure password meets all requirements
function validatePassword() {
    var patterns = {
        "lowercase": /[a-z]/,
        "uppercase": /[A-Z]/,
        "number": /[\d]/
    }

    // Make sure password doesn't include username
    if(!newPassword.value.includes(newUsername.value)) {
        for(var key in patterns) {
            // Makes sure password follows set rules and is at least 8 characters
            if(patterns[key].test(newPassword.value) && newPassword.value.length >= 8)
                {
                    passwordWarning.style.display = 'none';
                    return true;
                } else {
                    passwordWarning.style.display = 'block';
                    return false;
                }
        }  
    }
}

// Make sure passwords match
function comparePasswords() {
    if(newPassword.value != confirmPassword.value) {
        confirmPasswordWarning.style.display = 'block';  
        return false;
    } else {
        confirmPasswordWarning.style.display = 'none';
        return true;
    }
}

function submitForm() {
    event.preventDefault();
    console.log(userMatch, validatePassword(), comparePasswords());
    if(!userMatch && validatePassword() && comparePasswords()) {
        console.log('pass!');
    }
}

// Hide/Show Forms

function loginSuccess(){
    clearInputs();

    // Change message to welcome user
    let name = users[index].name;
    document.getElementById('greeting').innerHTML = 'Hello, ' + name + '!';

    // Hide form and show log out button
    document.getElementById('login').style.display = 'none';
    document.getElementById('logOut').style.display = 'inline';
}

function signInSuccess(fullName) {
    clearInputs();
    console.log(users);
    
    // Change message to welcome user
    document.getElementById('greeting').innerHTML = 'Hello, ' + fullName + '!';
    
    // Hide form and show log out button
    document.getElementById('signUp').style.display = 'none';
    document.getElementById('logOut').style.display = 'inline';
}

function logOut(){
    // Change message back
    document.getElementById('greeting').innerHTML = 'Hello!';

    // Hide log out button and show original buttons
    document.getElementById('logOut').style.display = 'none';
    document.getElementById('btns').style.display = 'flex';
}

function goBack(formId) {
    clearInputs();

    // Hide form and show original buttons
    document.getElementById(formId).style.display = 'none';
    document.getElementById('btns').style.display = 'flex';
}


function showForm(type) {
    document.getElementById(type).style.display = 'flex';
    document.getElementById('btns').style.display = 'none'; 
}

function clearInputs() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}