document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("loveMessage").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    let noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
});
