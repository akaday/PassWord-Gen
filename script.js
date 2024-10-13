function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    const length = document.getElementById("length").value;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    let password = "";

    let availableChars = charset;
    if (includeSymbols) {
        availableChars += symbols;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    document.getElementById("password").innerText = password;
}

function copyPassword() {
    const password = document.getElementById("password").innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard');
    });
}
