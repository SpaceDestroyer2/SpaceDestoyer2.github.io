let feedCount = 0;

document.getElementById("feedButton").addEventListener("click", function() {
    feedCount++;
    if (feedCount >= 22) {
        window.location.href = "https://sites.google.com/view/parrotkingdom/home";
    } else {
        alert("Keep feeding the parrot!");
    }
});
