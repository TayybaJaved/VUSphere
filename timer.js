/* =================================
   VUSPHERE STUDY TIMER
================================= */

let studyMinutes = 25;
let studyTimerInterval = null;


/* ===============================
   FORMAT TIME
================================ */

function formatStudyTime(totalSeconds) {

    totalSeconds = Math.max(0, totalSeconds);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    if (hours > 0) {

        return (
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0")
        );

    }

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}


/* ===============================
   GET REMAINING TIME
================================ */

function getRemainingSeconds() {

    const timerEnd =
        localStorage.getItem("studyTimerEnd");

    if (timerEnd) {

        const remaining =
            Math.ceil(
                (Number(timerEnd) - Date.now()) / 1000
            );

        return Math.max(0, remaining);
    }


    const savedMinutes =
        Number(
            localStorage.getItem("studyMinutes")
        );

    if (savedMinutes) {
        studyMinutes = savedMinutes;
    }

    return studyMinutes * 60;
}


/* ===============================
   CREATE FLOATING TIMER
================================ */

function createFloatingTimer() {

    let floatingTimer =
        document.getElementById("floatingStudyTimer");

    if (floatingTimer) {
        return;
    }


    floatingTimer =
        document.createElement("div");

    floatingTimer.id =
        "floatingStudyTimer";

    floatingTimer.innerHTML = `
        <span>⏱️</span>
        <span id="floatingTimerText">25:00</span>
    `;

    document.body.appendChild(floatingTimer);
}


/* ===============================
   UPDATE DISPLAY
================================ */

function updateTimerDisplays() {

    const remaining =
        getRemainingSeconds();

    const formattedTime =
        formatStudyTime(remaining);


    /* Timer inside Study Timer card */

    const timerDisplay =
        document.getElementById("timerDisplay");

    if (timerDisplay) {

        timerDisplay.textContent =
            formattedTime;
    }


    /* Floating timer */

    const floatingText =
        document.getElementById(
            "floatingTimerText"
        );

    const floatingBox =
        document.getElementById(
            "floatingStudyTimer"
        );


    if (floatingText) {

        floatingText.textContent =
            formattedTime;
    }


    const running =
        localStorage.getItem(
            "studyTimerRunning"
        ) === "true";


    if (floatingBox) {

        floatingBox.style.display =
            running ? "flex" : "none";
    }


    /* Start button */

    const startButton =
        document.getElementById(
            "startTimerBtn"
        );

    if (startButton) {

        startButton.textContent =
            running
                ? "Timer Running..."
                : "Start Timer";
    }


    /* Timer complete */

    if (remaining <= 0 && running) {

        finishStudyTimer();
    }
}


/* ===============================
   INCREASE TIMER
================================ */

function increaseTimer() {

    const running =
        localStorage.getItem(
            "studyTimerRunning"
        ) === "true";

    if (running) {
        return;
    }


    if (studyMinutes < 180) {

        studyMinutes += 5;

        localStorage.setItem(
            "studyMinutes",
            studyMinutes
        );

        updateTimerDisplays();
    }
}


/* ===============================
   DECREASE TIMER
================================ */

function decreaseTimer() {

    const running =
        localStorage.getItem(
            "studyTimerRunning"
        ) === "true";

    if (running) {
        return;
    }


    if (studyMinutes > 5) {

        studyMinutes -= 5;

        localStorage.setItem(
            "studyMinutes",
            studyMinutes
        );

        updateTimerDisplays();
    }
}


/* ===============================
   START TIMER
================================ */

function startTimer() {

    const running =
        localStorage.getItem(
            "studyTimerRunning"
        ) === "true";

    if (running) {
        return;
    }


    localStorage.setItem(
        "studyMinutes",
        studyMinutes
    );


    const endTime =
        Date.now() +
        studyMinutes * 60 * 1000;


    localStorage.setItem(
        "studyTimerEnd",
        endTime
    );

    localStorage.setItem(
        "studyTimerRunning",
        "true"
    );


    createFloatingTimer();

    updateTimerDisplays();

    startTimerUpdates();
}


/* ===============================
   TIMER LOOP
================================ */

function startTimerUpdates() {

    clearInterval(
        studyTimerInterval
    );


    studyTimerInterval =
        setInterval(function () {

            updateTimerDisplays();

        }, 1000);
}


/* ===============================
   FINISH TIMER
================================ */

function finishStudyTimer() {

    clearInterval(
        studyTimerInterval
    );


    localStorage.setItem(
        "studyTimerRunning",
        "false"
    );

    localStorage.removeItem(
        "studyTimerEnd"
    );


    const floatingBox =
        document.getElementById(
            "floatingStudyTimer"
        );

    if (floatingBox) {

        floatingBox.style.display =
            "none";
    }


    const timerDisplay =
        document.getElementById(
            "timerDisplay"
        );

    if (timerDisplay) {

        timerDisplay.textContent =
            "Session Complete! 🎉";
    }


    const startButton =
        document.getElementById(
            "startTimerBtn"
        );

    if (startButton) {

        startButton.textContent =
            "Start Timer";
    }


    alert(
        "🎉 Study session completed!"
    );
}


/* ===============================
   LOAD TIMER
================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedMinutes =
            Number(
                localStorage.getItem(
                    "studyMinutes"
                )
            );

        if (savedMinutes) {

            studyMinutes =
                savedMinutes;
        }


        createFloatingTimer();

        updateTimerDisplays();


        const running =
            localStorage.getItem(
                "studyTimerRunning"
            ) === "true";


        if (running) {

            startTimerUpdates();
        }

    }
);