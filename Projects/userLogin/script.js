var users = [
    {
        name: "Katherine Marranca",
        username: "moonitil",
        password: "Space7719"
    },
    {
        name: "John Doe",
        username: "Johnny",
        password: "Password123"
    }
]

function showForm(type) {
    document.getElementById(type).style.display = 'flex';
    document.getElementById('btns').style.display = 'none'; 
}

// LOGIN

var userMatch = false,
    passMatch = false,
    index = '';

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

function loginSuccess(){
    clearInputs();

    // Change message to welcome user
    let name = users[index].name;
    document.getElementById('greeting').innerHTML = 'Hello, ' + name + '!';

    // Hide form and show log out button
    document.getElementById('login').style.display = 'none';
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

// SIGN UP

function validateForm() {
    event.preventDefault();
    let fullName = document.getElementById('fullName').value,
        newUsername = document.getElementById('newUsername').value,
        newPassword = document.getElementById('newPassword').value,
        confirmPassword = document.getElementById('confirmPassword').value;
    
    // Check array data for matching username
    for (var i = 0; i < users.length; ++i) {
        var user = users[i];

        if (user.username == newUsername){
            userMatch = true;
            break;
        }
    }

    if (userMatch == true) {
        alert('Please enter a unique username!');
        newUsername.value = '';
        userMatch = false;
        return;
    }

    // Check if password meets requirements
    if (!newPassword.includes(newUsername)) {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
              result = pattern.test(newPassword);

        if (result == true && newPassword == confirmPassword) {
            createNewUser(fullName, newUsername, newPassword);
        } else if (newPassword != confirmPassword) {
            alert("Passwords don't match!");
        } else {
            alert('Password must contain one uppercase letter, one lowercase letter, one number, and 8 characters.');
        }

    } else if (!newPassword == '') {
        alert("Password can not contain username!")
    }
}
 
function createNewUser(fullName, newUsername, newPassword) {
    console.log(fullName, newUsername, newPassword);
    // Construct new object
    var userObject = {};
    userObject.name = fullName;
    userObject.username = newUsername;
    userObject.password = newPassword;

    // Push to Array
    users.push(userObject);
    signInSuccess(fullName);
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

function clearInputs() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}