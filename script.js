let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let display = document.getElementById("show-key");
let dele = document.getElementById("delete");
let showAddNumber = document.getElementById("add-number-text");
let callNumber = document.getElementById("green-call-btn-div");
let callSection = document.getElementById("call-section-div");
let phoneCall = document.getElementById("call");


dele.style.display = "none";
showAddNumber.style.display = "none";
callSection.style.display = "none";




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

}

function gotoHome() {
    callSection.style.display = "none";
}
