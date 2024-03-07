// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        //jstore(mail);
        return (true)
    }
    alert("You have entered an invalid email address!");
    return (false)
}

function Validate_contact(contact_number) {
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ((contact_number.match(phoneNum))) {
        return true;
    }
    else {
        $('#scontact').addClass('border-danger');
        alert("Invalid Contact Number");
        return false;
    }
}

function validateForm() {
    let x = document.forms["contact_us"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
    else {
        a = ValidateEmail(x);
        if (a == true) {
            alert("Thank you for contacting us! We will reach out to you soon");
        }
    }
}

function apply_check() {
    let semail = document.forms["application-for-hostel"]["semail"].value;
    let sfname = document.forms["application-for-hostel"]["sfname"].value;
    let slname = document.forms["application-for-hostel"]["slname"].value;
    let scontact = document.forms["application-for-hostel"]["scontact"].value;
    let scourse = document.forms["application-for-hostel"]["scourse"].value;
    let sdob = document.forms["application-for-hostel"]["sdob"].value;
    a = ValidateEmail(semail);
    b = Validate_contact(scontact);
    if (a == false || b == false) {
        return false;


     $('#scontact').removeClass('border-danger');
     $('#scontact').addClass('border-success');

    }
    $('#scontact').addClass('border-success');
    alert("Your Appplication has been submitted successfully. We will reach out to you!");
    return true;
}

$(document).ready(function () {
    $('#nav-placeholder').load("navbar.html");
    $('#history-data').load("history.html");
});