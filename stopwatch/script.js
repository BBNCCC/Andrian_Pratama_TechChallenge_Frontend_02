$(document).ready(function() {
    var timer = null;
    var isRunning = false;
    var startTime = 0;
    var elapsedTime = 0;

    function formatNumber(num, digits) {
        return String(num).padStart(digits, '0');
    }

    function updateDisplay() {
        var time = elapsedTime;

        var ms = time % 1000;
        time = Math.floor(time / 1000);

        var secs = time % 60;
        time = Math.floor(time / 60);

        var mins = time % 60;
        var hrs = Math.floor(time / 60);

        $('#hours').text(formatNumber(hrs, 2));
        $('#minutes').text(formatNumber(mins, 2));
        $('#seconds').text(formatNumber(secs, 2));
        $('#milliseconds').text(formatNumber(ms, 3));
    }

    function start() {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime;

            timer = setInterval(function() {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 10);

            $('#startBtn').prop('disabled', true);
            $('#pauseBtn').prop('disabled', false);
        }
    }

    function pause() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);

            $('#startBtn').prop('disabled', false);
            $('#pauseBtn').prop('disabled', true);
        }
    }

    function reset() {
        isRunning = false;
        clearInterval(timer);
        elapsedTime = 0;
        updateDisplay();

        $('#startBtn').prop('disabled', false);
        $('#pauseBtn').prop('disabled', true);
    }

    $('#startBtn').on('click', start);
    $('#pauseBtn').on('click', pause);
    $('#resetBtn').on('click', reset);
});
