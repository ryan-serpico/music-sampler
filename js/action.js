$(document).ready(function() {

// The sliding effect
    $('#10Days').click(function() {
        $('#smokeStuff').slideToggle();
    });
    $('#acidRap').click(function() {
        $('#smokeStuff2').slideToggle();
    });
    $('#coloringBook').click(function() {
        $('#nostalgiaStuff').slideToggle();
    });
    $('#TLOP').click(function() {
        $('#nostalgiaStuff2').slideToggle();
    });

// Hiding the player until clicked
    function hideAll() {
        $('#smokeStuff').hide();
        $('#smokeStuff2').hide();
        $('#nostalgiaStuff').hide();
        $('#nostalgiaStuff2').hide();
    }
    hideAll();

    $('.cover').click(function() {

        hideAll();

        switch ($(this).attr("id")) {
            case "10Days":
                $('#smokeStuff').show();
                break;
            case "acidRap":
                $('#smokeStuff2').show();
                break;
            case "coloringBook":
                $('#nostalgiaStuff').show();
                break;
            case "TLOP":
                $('#nostalgiaStuff2').show();
                break;
        }
    });




});
