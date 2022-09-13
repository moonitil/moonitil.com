// Creates new email with form inputs
function createEmail(){
    let firstName = document.getElementById("firstName").value,
        lastName = document.getElementById("lastName").value,
        myEmail = firstName.charAt(0) + '.' + lastName + '@waketech.edu';

    alert(myEmail);
}