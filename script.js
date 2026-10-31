const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrBox = document.getElementById("qrBox");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");

generateBtn.addEventListener('click', () => {
    const val = qrInput.value.trim();
    if (val === "") {
        qrBox.textContent = "Please enter a value";
        return;
    }
    qrBox.innerHTML = "";
    new QRCode(qrBox, { text: val, width: 200, height: 200 });
});

qrInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateBtn.click();
    }
});

downloadBtn.addEventListener('click', () => {
    const img = qrBox.querySelector("img");
    if (img === null) {
        alert("No QR to download !!");
        return;
    }
    const downloadLink = document.createElement("a");
    downloadLink.href = img.src;
    downloadLink.download = "qrcode.png";
    downloadLink.click();
});

clearBtn.addEventListener('click', () => {
    qrBox.textContent = "Your QR code will appear here";
    qrBox.style.color = "#999";
    qrBox.style.fontSize = "14px";
    qrInput.value = "";
});
