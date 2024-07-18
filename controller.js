// Assume you have stored user data in local storage as 'key_users'
localStorage.setItem("key_users", JSON.stringify(users));
var rusers = JSON.parse(localStorage.getItem('key_users'));

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var p in rusers) {
        if (username == rusers[p].username && password == rusers[p].password) {
            alert("Logged in successfully");
            function Redirect() {
                window.location = "success.html";
                messageBox.innerHTML = "Welcome, " + rusers[p].firstname + " here are your details: " + "<br/>";
                messageBox.innerHTML += "Name: " + rusers[p].firstname + "<br/>";
                messageBox.innerHTML += "UserName: " + rusers[p].username + "<br/>";
                messageBox.innerHTML += "EmailId: " + rusers[p].email + "<br/>";
            }
        }
    }
}
