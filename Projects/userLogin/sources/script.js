// Elements by id
const newUsername = document.getElementById('newUsername'),
      newPassword = document.getElementById('newPassword'),
      confirmPassword = document.getElementById('confirmPassword');

const usernameWarning = document.getElementById('usernameWarning'),
      passwordWarning = document.getElementById('passwordWarning'),
      confirmPasswordWarning = document.getElementById('confirmPasswordWarning'); 

// Event Listeners
newUsername.oninput = checkUsername;
newPassword.oninput = validatePassword;
confirmPassword.onchange = comparePasswords;

// Login

function validateLogin() {
    event.preventDefault();
    let username = document.getElementById('username').value,
        password = document.getElementById('password').value;

    if (username == '' && password == '') {
        return;
    }

    // Check array data for matching username
    for (var i = 0; i < users.length; ++i) {
        var user = users[i];

        if (user.username == username){
            userMatch = true;
            break;
        }
    }

    // Check array data for matching password
    for (var i = 0; i < users.length; ++i) {
        var user = users[i];

        if (user.password == password){
            passMatch = true;
            index = i;
            break;
        }
    }

    // Update page if login successful
    if (userMatch == true && passMatch == true) {
        loginSuccess();
    } else {
        alert('Login information is incorrect!');
    }
}

// Sign Up

// Check to see if username already exists on the server
function checkUsername() {
    var username = "user=" + newUsername.value;

    // Make AJAX Call to api/register
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/user" + "?" + username, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE){
        var userMatch = xhr.responseText;

            if (userMatch == 'true') {
                usernameWarning.style.display = 'block';
            } else {
                usernameWarning.style.display = 'none';
            }
        }
    }
}

function validatePassword() {
    var passMatch = false;

    var patterns = {
        "lowercase": /[a-z]/,
        "uppercase": /[A-Z]/,
        "number": /[\d]/
    }

    if(!newPassword.value.includes(newUsername.value) || newUsername.value == '') {
        for(var key in patterns) {
            if(patterns[key].test(newPassword.value) && newPassword.value.length >= 8 || newPassword.value == '')
                {
                    passwordWarning.style.display = 'none';
                    passMatch = true;
                } else {
                    passwordWarning.style.display = 'block';
                    passMatch = false;
                }
        }  
    }
}

function comparePasswords() {
    if(newPassword.value != confirmPassword.value && confirmPassword.value != '') {
        confirmPasswordWarning.style.display = 'block';  
    } else {
        confirmPasswordWarning.style.display = 'none';
    }
}

// function validateForm() {
//     event.preventDefault();
//     let fullName = document.getElementById('fullName').value,
//         newUsername = document.getElementById('newUsername').value,
//         newPassword = document.getElementById('newPassword').value,
//         confirmPassword = document.getElementById('confirmPassword').value;
    
//     // Check array data for matching username
//     for (var i = 0; i < users.length; ++i) {
//         var user = users[i];

//         if (user.username == newUsername){
//             userMatch = true;
//             break;
//         }
//     }

//     if (userMatch == true) {
//         alert('Please enter a unique username!');
//         newUsername.value = '';
//         userMatch = false;
//         return;
//     }

//     // Check if password meets requirements
//     if (!newPassword.includes(newUsername)) {
//         const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
//               result = pattern.test(newPassword);

//         if (result == true && newPassword == confirmPassword) {
//             createNewUser(fullName, newUsername, newPassword);
//         } else if (newPassword != confirmPassword) {
//             alert("Passwords don't match!");
//         } else {
//             alert('Password must contain one uppercase letter, one lowercase letter, one number, and 8 characters.');
//         }

//     } else if (!newPassword == '') {
//         alert("Password can not contain username!")
//     }
// }
 
// function createNewUser(fullName, newUsername, newPassword) {
//     console.log(fullName, newUsername, newPassword);
//     // Construct new object
//     var userObject = {};
//     userObject.name = fullName;
//     userObject.username = newUsername;
//     userObject.password = newPassword;

//     // Push to Array
//     users.push(userObject);
//     signInSuccess(fullName);
// }

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