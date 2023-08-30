// Create an object to store registered users
var users = [];

// Function to register a new user
function registerUser(username, password) {
  // Check if username already exists
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      return false; // Username already exists
    }
  }

  // Add new user to the users object
  users.push({
    username: username,
    password: password
  });

  return true; // Registration successful
}

// Function to login and validate user
function loginUser(username, password) {
  // Check if username and password match a registered user
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true; // Login successful
    }
  }

  return false; // Login failed
}

// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate login
  if (loginUser(username, password)) {
    // Display success message and redirect to secured page
    document.getElementById("message").innerHTML = "Login successful";
    window.location.href = "secured-page.html";
  } else {
    // Display error message
    document.getElementById("message").innerHTML = "Invalid username or password";
  }
});

// Example usage: register a user
registerUser("johnDoe", "password");
