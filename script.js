let hour = document.getElementById("hour");
let hourCL = document.getElementById("hourCL");
let hourCS = document.getElementById("hourCS");
let minutesCL = document.getElementById("minutesCL");
let minutesCS = document.getElementById("minutesCS");
let minutes = document.getElementById("minutes");
let display = document.getElementById("show-key");
let dele = document.getElementById("delete");
let showAddNumber = document.getElementById("add-number-text");
let callNumber = document.getElementById("green-call-btn-div");
let callSection = document.getElementById("call-section-div");
let phoneCall = document.getElementById("call");
let callingNumber = document.getElementById("calling-number");
let callStatus = document.getElementById("call-status");
let callingSection = document.getElementById("calling-section");

let cameraSection = document.getElementById('camera-section');



dele.style.display = "none";
showAddNumber.style.display = "none";
callSection.style.display = "none";
callingSection.style.display = "none";
cameraSection.style.display = 'none';





function time() {
    let date = new Date();
    hour.innerHTML = date.getHours();
    hourCL.innerHTML = date.getHours();
    hourCS.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    minutesCL.innerHTML = date.getMinutes();
    minutesCS.innerHTML = date.getMinutes();

    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
        minutesCL.innerHTML = "0" + minutesCL.innerHTML;
        minutesCS.innerHTML = "0" + minutesCS.innerHTML;
    }

    if (date.getHours() == 0) {
        hour.innerHTML = "12";
    }

}
setInterval(time, 1000);

function showKey(key) {
    setInterval(() => {
        if (display.value === "") {
            dele.style.display = "none";
            showAddNumber.style.display = "none";

        }
    }, 1000);
    display.value += key;
    dele.style.display = "block";
    showAddNumber.style.display = "block";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function phone() {
    callSection.style.display = "block";
}

function dialNumber() {
    callingSection.style.display = "block";
    callSection.style.display = "none";
    callStatus.innerHTML = "calling..."
    callingNumber.innerHTML = display.value;
    display.value = "";

}

function gotoHome() {
    callSection.style.display = "none";
}

callingNumber.innerHTML = "";
callingNumber.innerHTML = display.value;


function abortCall() {
    callStatus.innerHTML = "call ended...";
    setTimeout(() => {
        callingSection.style.display = "none";
    }, 2000);
    callSection.style.display = "block";

}

let video = document.getElementById('camera-screen');
let canvas = document.getElementById('canvas');

async function startCamera() {
    cameraSection.style.display = 'block';
    let thePix = await navigator.mediaDevices.getUserMedia({audio: false, video:true})
    video.srcObject = thePix;
}

function takePix() {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    
}
