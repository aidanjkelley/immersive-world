import './style.css';
import Experience from "./Experience/Experience.js";

const experience = new Experience(
    document.querySelector("canvas.experience-canvas")
);

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector("button"); // Assuming the "Start" button is the only button on the page.
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");

    startButton.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    const closeButton = document.querySelector(".close-button"); // Assuming the close button has the class "close-button".
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Code to hide the modal after 10 seconds
    const hideModalAfterTime = 10000; // 10 seconds
    setTimeout(() => {
        modal.style.display = "none";
        overlay.style.display = "none";
    }, hideModalAfterTime);
});
