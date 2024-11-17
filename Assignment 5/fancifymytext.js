function makeTextBigger() {
    const textArea = document.getElementById("textbox");
    textArea.style.fontSize = "24pt";
    alert("BOOOOOOM!");
}

function applyStyle() {
    const textArea = document.getElementById("textbox");
    const fancyShmancy = document.getElementById("fancy");

    if (fancyShmancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";
    }
}

function addMoo() {
    const textArea = document.getElementById("textbox");
    textArea.value = textArea.value.toUpperCase();
    const sentences = textArea.value.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }

    textArea.value = sentences.join(". ").trim()
}