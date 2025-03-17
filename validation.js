document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fanForm");
    const users = []; 

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;

        if (fullName === "") {
            document.getElementById("nameError").innerText = "Full name is required!";
            isValid = false;
        } else {
            document.getElementById("nameError").innerText = "";
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Invalid email format!";
            isValid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits!";
            isValid = false;
        } else {
            document.getElementById("phoneError").innerText = "";
        }

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordPattern.test(password)) {
            document.getElementById("passwordError").innerText = "Password must be at least 6 characters with letters and numbers!";
            isValid = false;
        } else {
            document.getElementById("passwordError").innerText = "";
        }

        if (isValid) {
            users.push({ fullName, email, phone, password });

            console.log("Registered Users:", users); 

            alert("Registration successful! Welcome to FC Barcelona Fan Page.");
            form.reset(); 
        }
    });
});
