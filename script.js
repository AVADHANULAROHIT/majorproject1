function LOGIN() {
    window.location.href = 'login.html';
}
function Signup() {
    window.location.href = 'signup.html';
}
function loginto() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your login verification logic here
    // For simplicity, let's navigate to the sample login page if the username and password are both "admin"
    if (username === "admin" && password === "admin") {
        alert('Login Successful');
        window.location.href = 'detail.html';
    } else {
        alert('Login Failed');
    }
}
function create_account() {
    var n = document.getElementById("new-username").value;

    var p = document.getElementById("new-password").value;
    var cp = document.getElementById("confirm-password").value;
    //Code for password validation
    var letters = /^[A-Za-z]+$/;

    //other validations required code
    if (n == '' || p == '' || cp == '') {
        alert("Enter each details correctly");
    }
    else if (!letters.test(n)) {
        alert('Name is incorrect must contain alphabets only');
    }
    else if (p != cp) {
        alert("Passwords not matching");
    }
    else if (document.getElementById("new-password").value.length > 12) {
        alert("Password maximum length is 12");
    }
    else if (document.getElementById("new-password").value.length < 6) {
        alert("Password minimum length is 6");
    }
    else {
        alert("Your account has been created successfully... Redirecting to JavaTpoi");
        window.location = 'login.html';
    }
}