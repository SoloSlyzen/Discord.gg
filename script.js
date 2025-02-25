// Optionally add JS functionality if needed, for example, handling the form submission or showing an alert on incorrect login
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
    } else {
        alert("Login Successful!");
    }
});
