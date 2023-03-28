$(function () {
    // On document ready, attach a click event listener to the "Convert" button
    $('#convert').click(function () {
        // Get the binary input value
        var binaryStr = $('#binary').val();

        // Convert binary to decimal
        var decimalNum = parseInt(binaryStr, 2);

        // Set the decimal output value
        $('#decimal').val(decimalNum);
    });
});