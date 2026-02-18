$(document).ready(function() {
    var currentSlide = 0;
    var totalSlides = $('.slide').length;

    // Generate dots berdasarkan jumlah slide
    for (var i = 0; i < totalSlides; i++) {
        $('.dots').append('<div class="dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></div>');
    }

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
        // Loop ke slide pertama/terakhir jika melewati batas
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        currentSlide = index;

        // Update slide aktif
        $('.slide').removeClass('active');
        $('.slide').eq(currentSlide).addClass('active');

        // Update dot aktif
        $('.dot').removeClass('active');
        $('.dot').eq(currentSlide).addClass('active');
    }

    // Event click tombol next
    $('.next-btn').click(function() {
        showSlide(currentSlide + 1);
    });

    // Event click tombol prev
    $('.prev-btn').click(function() {
        showSlide(currentSlide - 1);
    });

    // Event click pada dot
    $('.dots').on('click', '.dot', function() {
        var index = $(this).data('index');
        showSlide(index);
    });
});
