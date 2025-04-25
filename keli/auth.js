document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from reloading
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (username === "kali" && password === "linux") {
      message.textContent = "Welcome to the F Society";
      message.style.color = "#00ff00";
      console.log("Access granted to F Society");

      ge
  
      // Delay before redirecting (optional)
      setTimeout(() => {
        window.location.href = "fsociety.html"; // redirect
      }, 2000); // 2 seconds delay
    } else {
      message.textContent = "Access Denied!";
      message.style.color = "red";
      console.log("Access denied");
    }
  });
 
  