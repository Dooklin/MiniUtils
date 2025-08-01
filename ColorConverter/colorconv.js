const previewBox = document.getElementById("color-preview");

function ColorConv() {
let hexInput = document.getElementById("hex-input").value.trim();

if (!hexInput.startsWith("#")) {
    hexInput = "#" + hexInput;
}

const isValidHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hexInput);

if (isValidHex) {
    previewBox.style.backgroundColor = hexInput;
    previewBox.innerHTML = "";
    
    const rgb = getComputedStyle(previewBox).backgroundColor;
    
    document.getElementById("red-output").textContent = "R: " + rgb.match(/\d+/g)[0];
    document.getElementById("green-output").textContent = "G: " + rgb.match(/\d+/g)[1];
    document.getElementById("blue-output").textContent = "B: " + rgb.match(/\d+/g)[2];
} else {
    previewBox.style.backgroundColor = "";
    previewBox.innerHTML = "?";
    document.getElementById("red-output").textContent = "R: ";
    document.getElementById("green-output").textContent = "G: ";
    document.getElementById("blue-output").textContent = "B: ";
}
}