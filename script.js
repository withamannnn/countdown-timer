    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const startCountdownBtn = document.getElementById('startBtn');
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    const resetBtn = document.querySelector('.reset');
    const mainBox = document.querySelector('.main-box');
    const buttonsBox = document.querySelector('.buttons');
    const popup = document.querySelector('.popup');
    const timeElements = document.querySelectorAll('.time-box h1');

    let countdownInterval;
    let totalTimeInSeconds = 0;

    
    const updateDisplay = (totalSeconds) => {
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        timeElements[0].textContent = days < 10 ? '0' + days : days;
        timeElements[1].textContent = hours < 10 ? '0' + hours : hours;
        timeElements[2].textContent = minutes < 10 ? '0' + minutes : minutes;
        timeElements[3].textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const startCountdown = () => {
        countdownInterval = setInterval(() => {
            if (totalTimeInSeconds > 0) {
                totalTimeInSeconds--;
                updateDisplay(totalTimeInSeconds);
            } else {
                clearInterval(countdownInterval);
                alert("Countdown Complete!");
            }
        }, 1000);
    }

    startCountdownBtn.addEventListener('click', () => {
        const days = parseInt(daysInput.value) || 0;
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;

        totalTimeInSeconds = (days * 24 * 3600) + (hours * 3600) + (minutes * 60);

        if (totalTimeInSeconds > 0) {
            popup.style.display = 'none';
            mainBox.style.display = 'flex';
            buttonsBox.style.display = 'flex';
            updateDisplay(totalTimeInSeconds);
        } else {
            alert("Please enter a valid time.");
        }
    });

    startBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        startCountdown();
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        totalTimeInSeconds = 0;
        updateDisplay(0);
    });

    window.onload = () => {
        const popup = document.getElementById("popup");
        popup.classList.add("active");
    };
    

