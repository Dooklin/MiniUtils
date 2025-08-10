const select = document.querySelector(".custom-select");
const display = select.querySelector(".select-display");
const options = select.querySelector(".select-options");
const text = select.querySelector(".select-text");

display.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
    text.textContent = e.target.textContent;
    options.style.display = "none";
    // You can also handle value changes here
    console.log("Selected:", e.target.dataset.value);
    }
});

document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
    options.style.display = "none";
    }
});