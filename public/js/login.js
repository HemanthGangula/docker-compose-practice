// login.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(loginForm);

        // Create object to store form data
        const loginData = {};
        formData.forEach((value, key) => {
            loginData[key] = value;
        });

        // Send form data to backend
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from backend
            console.log(data);
            // Redirect user or show success message based on response
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });
    });
});

