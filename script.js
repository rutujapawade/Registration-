document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (username.length < 3) {
        document.getElementById('userError').innerText = 'Username must be at least 3 characters.';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }

    if (isValid) {
        alert(`Account created for ${username}! (Note: Since this is GitHub Pages, data isn't saved to a database).`);
        console.log({ username, email, password });
    }
});