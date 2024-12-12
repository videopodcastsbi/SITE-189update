// JavaScript to handle the closing of the file
document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector("footer p").textContent = "Closing... Please wait.";
    setTimeout(() => {
        window.close(); // This will only work in certain contexts, such as when the page is opened by a script.
    }, 2000);
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.querySelector("footer p").textContent = "File not closed.";
});
