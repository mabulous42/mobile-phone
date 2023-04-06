let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");


function time() {
    let date = new Date();
    console.log(date.getHours());
    hour.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();

    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
    }

    if (date.getHours() == 0){
        hour.innerHTML = "12";
    }

}

setInterval(time, 1000);
