let code = '';
const correctCode = '1111';

function inputCode(number) {
    code += number;
    document.getElementById("codeOutput").innerText = "Code: " + code;

    if (code.length === 4) {
        if (code === correctCode) {
            window.location.href = "feed.html";
        } else {
            alert("Incorrect code. Try again.");
            code = ''; // Reset code
            document.getElementById("codeOutput").innerText = "Code: ";
        }
    }
}
