let hour = document.getElementById("hour");
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


dele.style.display = "none";
showAddNumber.style.display = "none";
callSection.style.display = "none";
callingSection.style.display = "none";





function time() {
    let date = new Date();
    hour.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();

    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
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
    display.value = "";

}

function gotoHome() {
    callSection.style.display = "none";
}

callingNumber.innerHTML = "";
callingNumber.innerHTML = display.value;

callStatus.innerHTML = "calling..."
function abortCall() {    
    // callStatus.innerHTML = "call ended";
    setTimeout(() => {
        callingSection.style.display = "none";
    }, 2000);
    callSection.style.display = "block";
    
}
