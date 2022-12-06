
function Validation() {

    // var temp = document.querySelectorAll("#fname", "#lname", "#email", "#phone").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (fname == ""){
        alert("First name cannot be empty");
        return false;
    }
    else if (lname == "") {
        alert("Last name cannot be empty");
        return false;
    }
    else if (email == "") {
        alert("Email must be a valid email address");
        return false;
    }
    else if (phone == "") {
        alert("Phone number cannot be empty");
        return false;
    }
    return true;

}


