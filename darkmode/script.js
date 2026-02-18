$(document).ready(function() {
    $('#darkModeToggle').on('change', function() {
        if ($(this).is(':checked')) {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    });
});
