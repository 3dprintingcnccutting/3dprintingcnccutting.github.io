(function ($) {
    $(document).ready(function () {
        const options = {month: 'long', year: 'numeric'};
        const date = new Date()
        $("#date_display").text(date.toLocaleDateString("en-US", options));
    });

})(jQuery);