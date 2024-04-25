// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const messageContainer = document.getElementById('message-container');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(signupForm);

        // Create object to store form data
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Send form data to backend
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            // Handle success (plain text or HTML response)
            return response.text();
        })
        .then(data => {
            // Display success message to user
            messageContainer.textContent = data; // You can customize this to display any message you want
            // Optionally, redirect user to login page after a delay
            setTimeout(() => {
                window.location.href = '/login'; // Redirect to login page
            }, 3000); // Redirect after 3 seconds (adjust as needed)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., display error message to user)
        });
    });
});

