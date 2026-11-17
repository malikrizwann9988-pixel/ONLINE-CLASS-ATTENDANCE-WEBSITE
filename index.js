function login() {
     let user = document.querySelector(".username").value; 
     let pass = document.querySelector(".password").value; 
     if(user === "admin" && pass === "1234") { 
        alert("🎉 Congratulations " + user + "! Login successful.");
     } else {
         alert("❌ Failed password, try again!");
         }
         }

