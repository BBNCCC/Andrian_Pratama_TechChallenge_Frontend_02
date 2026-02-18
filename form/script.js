$(document).ready(function() {
    // Validasi nama - minimal 3 karakter
    function validateName() {
        var name = $('#name').val().trim();
        if (name === '') {
            $('#nameError').text('Nama wajib diisi');
            $('#name').removeClass('valid').addClass('invalid');
            return false;
        } else if (name.length < 3) {
            $('#nameError').text('Nama minimal 3 karakter');
            $('#name').removeClass('valid').addClass('invalid');
            return false;
        }
        $('#nameError').text('');
        $('#name').removeClass('invalid').addClass('valid');
        return true;
    }

    // Validasi email - format email yang benar
    function validateEmail() {
        var email = $('#email').val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            $('#emailError').text('Email wajib diisi');
            $('#email').removeClass('valid').addClass('invalid');
            return false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Format email tidak valid');
            $('#email').removeClass('valid').addClass('invalid');
            return false;
        }
        $('#emailError').text('');
        $('#email').removeClass('invalid').addClass('valid');
        return true;
    }

    // Validasi gender - harus pilih salah satu
    function validateGender() {
        var gender = $('input[name="gender"]:checked').val();
        if (!gender) {
            $('#genderError').text('Pilih jenis kelamin');
            return false;
        }
        $('#genderError').text('');
        return true;
    }

    // Instant validation on keyup
    $('#name').on('keyup', validateName);
    $('#email').on('keyup', validateEmail);
    $('input[name="gender"]').on('change', validateGender);

    // Submit form
    $('#myForm').on('submit', function(e) {
        e.preventDefault();

        var isNameValid = validateName();
        var isEmailValid = validateEmail();
        var isGenderValid = validateGender();

        if (isNameValid && isEmailValid && isGenderValid) {
            $('#popup').addClass('show');
        }
    });

    // Close popup
    $('#closePopup').on('click', function() {
        $('#popup').removeClass('show');
        $('#myForm')[0].reset();
        $('#name, #email').removeClass('valid invalid');
    });
});
