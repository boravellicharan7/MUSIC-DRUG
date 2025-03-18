// Event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve input values
    const email = document.getElementById("login_email").value.trim();
    const password = document.getElementById("login_password").value.trim();

    // Basic validation to check if fields are not empty
    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the provided email and password match a user in localStorage
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect the user to the dashboard or home page
        window.location.href = "loading.html";
    } else {
        // Show error if no match is found
        alert("Invalid email or password!");
    }
});

// Event listener for guest login button
document.getElementById("guestLoginBtn").addEventListener("click", function() {
    // Create a guest user object
    const guestUser = {
        name: "Guest User",
        email: "guest@example.com",
        isGuest: true
    };
    
    // Store guest user info in session storage (temporary, clears when browser closes)
    // Using sessionStorage instead of localStorage for guest users
    sessionStorage.setItem("currentUser", JSON.stringify(guestUser));
    
    alert("Welcome, Guest User! Some features may be limited.");
    
    // Redirect to the main content page
    window.location.href = "loading.html";
});