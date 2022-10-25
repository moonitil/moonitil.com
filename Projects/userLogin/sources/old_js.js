// function validateLogin() {
//     event.stopPropagation();
//     let username = document.getElementById('username').value,
//         password = document.getElementById('password').value;

//     if (username == '' && password == '') {
//         return;
//     }

//     // Check array data for matching username
//     for (var i = 0; i < users.length; ++i) {
//         var user = users[i];

//         if (user.username == username){
//             userMatch = true;
//             break;
//         }
//     }

//     // Check array data for matching password
//     for (var i = 0; i < users.length; ++i) {
//         var user = users[i];

//         if (user.password == password){
//             passMatch = true;
//             index = i;
//             break;
//         }
//     }

//     // Update page if login successful
//     if (userMatch == true && passMatch == true) {
//         loginSuccess();
//     } else {
//         alert('Login information is incorrect!');
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

