$(document).ready(function() {
    // Target: 1 Maret 2026
    var targetDate = new Date('2026-03-01T00:00:00').getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        // Jika countdown selesai
        if (distance < 0) {
            clearInterval(timer);
            $('#countdownView').addClass('hide');
            $('#finishedView').addClass('show');
            return;
        }

        // Hitung hari, jam, menit, detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update display
        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));
    }

    // Update setiap detik
    updateCountdown();
    var timer = setInterval(updateCountdown, 1000);
});
