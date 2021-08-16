document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const inputEmail = emailField.value;

    const passField = document.getElementById('user-password');
    const inputPass = passField.value;
    if (inputEmail == 'c.johir@gmail.com' && inputPass == '12345') {
        window.location.href = 'banking.html';
    } else {
        window.alert("Do not match username and pasword!");
    }
})