var elapsedTime = 0;
var isPaused = false;
var isStarted = false;
var bellAudio;

window.onload = function () {
    setInterval(onTimer, 1000);
};

function startButtonClicked()
{
    bellAudio = new Audio("bell.mp3");
    if (!isStarted)
    {
        isStarted = true;
        isPaused = false;
        elapsedTime = 0;
        updateTimeLabel();
    }
    else
    {
        isPaused = !isPaused;
        updateTimeLabel();
    }

    updateStartButton();
}

function resetButtonClicked()
{
    isStarted = false;
    isPaused = false;
    elapsedTime = 0;

    updateTimeLabel();
    updateStartButton();
}

function onTimer()
{
    if (isStarted)
    {
        if (!isPaused)
        {
            elapsedTime++;

            if (elapsedTime == 3 * 60)
            {
                playBell();
            }
        }
    }

    updateTimeLabel();
}

function playBell()
{
    bellAudio.play();
}

function updateTimeLabel()
{
    let label = document.getElementById("time-label");
    
    let minutes = padZero(Math.floor(elapsedTime / 60), 2);
    let seconds = padZero(elapsedTime % 60, 2);

    label.textContent = minutes + ":" + seconds;
}

function updateStartButton()
{
    let button = document.getElementById("start-button");
    
    if (isStarted)
    {
        if (isPaused)
        {
            button.textContent = "再開";
        }
        else
        {
            button.textContent = "停止";
        }
    }
    else
    {
        button.textContent = "開始";
    }
}

function padZero(number, length){
	return ( Array(length).join('0') + number ).slice( -length );
}