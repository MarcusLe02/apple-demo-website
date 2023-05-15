
function validateForm() {
var firstName = document.forms["contact-form"]["first-name"].value;
var lastName = document.forms["contact-form"]["last-name"].value;
var age = document.forms["contact-form"]["age"].value;
var address = document.forms["contact-form"]["address"].value;
var mobileNumber = document.forms["contact-form"]["mobile-number"].value;

if (firstName == "") {
alert("First name must be filled out");
return false;
}

if (lastName == "") {
alert("Last name must be filled out");
return false;
}

if (isNaN(age) || age < 0 || age > 200) {
alert("Age must be a number between 0 and 200");
return false;
}

if (address == "") {
alert("Address must be filled out");
return false;
}

var pattern = /^[0-9]+$/;
if (!pattern.test(mobileNumber)) {
    alert("Invalid mobile number. Please enter a valid mobile number (0-9)");
    return false;
}
alert("Form submitted successfully!");
return true;
}
