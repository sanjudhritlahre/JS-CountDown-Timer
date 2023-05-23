const endDate = "16 July 2023 08:30:00 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const endingDate = new Date(endDate);
    const nowDate = new Date();

    // Calculating Differences Between endingDate & nowDate
    const diff = (endingDate - nowDate) / 1000;

    if (diff < 0) return;

    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// inital call
clock();

/* 
    1 Day = 24 Hours
    1 Hour = 60 Minutes
    60 Minutes = 3600 Seconds
*/

setInterval(() => {
    clock();
}, 1000);
