$(document).ready(function() {
    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
        // Switch to close icon when menu is fully expanded
        $('#toggleIcon').removeClass('fa-bars').addClass('fa-times');
    });

    $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
        // Switch to bars icon when menu is fully collapsed
        $('#toggleIcon').removeClass('fa-times').addClass('fa-bars');
    });

    
});