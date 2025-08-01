function clamp(val) {
    val = val.replace(/[^0-9]/g, "");
    if (val === "") return "";
    let num = Math.max(0, Math.min(255, parseInt(val, 10)));
    return num.toString();
    }

    function toHex(val) {
    if (val === "") return "??";
    let hex = parseInt(val, 10).toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
    }

    function ColorConv() {
    const rInput = document.getElementById("r-input");
    const gInput = document.getElementById("g-input");
    const bInput = document.getElementById("b-input");
    const previewBox = document.getElementById("color-preview");
    const hexOutput = document.getElementById("red-output");

    rInput.value = clamp(rInput.value);
    gInput.value = clamp(gInput.value);
    bInput.value = clamp(bInput.value);

    const r = rInput.value, g = gInput.value, b = bInput.value;

    if (r !== "" && g !== "" && b !== "") {
        const hex = "#" + toHex(r) + toHex(g) + toHex(b);
        previewBox.style.backgroundColor = hex;
        previewBox.innerHTML = "";
        hexOutput.textContent = hex;
    } else {
        previewBox.style.backgroundColor = "";
        previewBox.innerHTML = "?";
        hexOutput.textContent = "#??????";
    }
}