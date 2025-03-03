document.addEventListener("DOMContentLoaded", function() {
    let messages = document.querySelectorAll(".message");
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.opacity = "1";
            msg.style.transform = "translateY(0)";
        }, index * 1000);
    });
});
