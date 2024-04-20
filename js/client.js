document.getElementById('generate').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var strength = document.getElementById('strength').value;
    var useNumbers = document.getElementById('useNumbers').checked;
    var useUppercase = document.getElementById('useUppercase').checked;
    var password = generatePassword(length, strength, useNumbers, useUppercase);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, strength, useNumbers, useUppercase) {
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (useNumbers) {
        charset += '0123456789';
    }

    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}
