const qr_text = document.getElementById('qr-text')
const sizes = document.getElementById('Sizes') // select the label
const generateBtn = document.getElementById('generateBtn')
const downloadBtn = document.getElementById('downloadBtn')

const qrContainer = document.getElementById('Qr-body'); //main body
// let size =sizes.value;
let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault(); //refrecing off karva
    isemptyInput();

})

function generateQrcode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qr_text.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"

    })
}
//let me handel the size
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isemptyInput();


})

function isemptyInput() {
    if (qr_text.value.length > 0) {
        generateQrcode();
    }
    else {
        alert("Please Enter your url or text first to generate your QR CODE");
    }
}


downloadBtn.addEventListener('click', () => {
    let img = qrContainer.querySelector('img');
    let canvas = qrContainer.querySelector('canvas');
    if (img) {


        triggerDownload(img.src);

    }
    else if (canvas) {
        const dataUrl = canvas.toDataURL("image/png")
        triggerDownload(dataUrl);
    } else {
        alert("Your image now not be ready to download");
    }


})

function triggerDownload(dataUrl) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = "qrcode.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
