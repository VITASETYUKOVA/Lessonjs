const initialTime = 85; 
let timer = initialTime; 
let timerId = null; 

const timeSpan = document.querySelector("#time");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = secs < 10 ? "0" + secs : secs;

    return `${formattedMinutes}:${formattedSeconds}`;
}

document.querySelector("#start").addEventListener("click", () => {
    if (timerId) return; 

    timerId = setInterval(() => {
        timer--;

        timeSpan.textContent = formatTime(timer);

        if (timer <= 0) {
            clearInterval(timerId);
            timerId = null;
        }
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
});


timeSpan.textContent = formatTime(timer);