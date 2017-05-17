$(function () {
    var update = function () {
        $('#serializearray').text(
            JSON.stringify($('form').serializeArray())
        );
        $('#serialize').text(
            JSON.stringify($('form').serialize())
        );
    };
    update();
    $('form').change(update);
})