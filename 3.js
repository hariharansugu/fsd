document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here you can add your authentication logic
    if (username === "admin" && password === "admin123") {
        // Redirect to dashboard or perform other actions on successful login
        alert("Login successful!");
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});
