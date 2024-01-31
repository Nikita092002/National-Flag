const wheel = document.getElementById("wheel");

document.addEventListener("keydown", toggleWheelVisibility);

function toggleWheelVisibility(event) {
    if (event.key === "W" || event.key === "w") {
        wheel.style.display = wheel.style.display === "none" ? "block" : "none";
    }
}
