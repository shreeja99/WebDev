function validate() {

    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!/^[A-Za-z ]{6,}$/.test(name)) {
        alert("Invalid Name");
        return false;
    }

    if (pass.length < 6) {
        alert("Password too short");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid Email");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Invalid Phone Number");
        return false;
    }

    alert("Registration Successful");
    return true;
}   