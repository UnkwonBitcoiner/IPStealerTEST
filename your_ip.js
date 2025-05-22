document.addEventListener('DOMContentLoaded', function() {
    const ip = window.location.hostname;
    alert(ip);
});
window.onload = function() {
    document.body.style.cssText = `
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            text-align: center;
            color: white;
        }
        h1 {
            fontSize: 3em;
            fontWeight: bold;
            fontWeight: 700;
        }
    `;
};
