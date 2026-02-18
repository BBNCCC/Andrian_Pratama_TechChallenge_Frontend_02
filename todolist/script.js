$(document).ready(function() {
    function updateEmptyState() {
        if ($('#todoList li').length === 0) {
            $('#emptyState').removeClass('hide');
        } else {
            $('#emptyState').addClass('hide');
        }
    }

    function addTodo() {
        var text = $('#todoInput').val().trim();
        if (text === '') return;

        var todoItem = $('<li class="todo-item"></li>');
        todoItem.html(
            '<input type="checkbox">' +
            '<span>' + text + '</span>' +
            '<button class="delete-btn">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>' +
                '</svg>' +
            '</button>'
        );

        $('#todoList').append(todoItem);
        $('#todoInput').val('');
        updateEmptyState();
    }

    // Tambah todo dengan klik button
    $('#addBtn').on('click', addTodo);

    // Tambah todo dengan enter
    $('#todoInput').on('keypress', function(e) {
        if (e.which === 13) addTodo();
    });

    // Toggle completed
    $('#todoList').on('change', 'input[type="checkbox"]', function() {
        $(this).parent().toggleClass('completed');
    });

    // Hapus todo
    $('#todoList').on('click', '.delete-btn', function() {
        $(this).parent().fadeOut(200, function() {
            $(this).remove();
            updateEmptyState();
        });
    });
});
