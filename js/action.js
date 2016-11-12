$(document).ready(function() {

// The sliding effect
$('#10Days').click(function() {
    $('#nostalgiaStuff').slideToggle();
});
$('#acidRap').click(function() {
    $('#smokeStuff').slideToggle();
});
$('#coloringBook').click(function() {
    $('#problemStuff').slideToggle();
});
$('#TLOP').click(function() {
    $('#ultralightStuff').slideToggle();
});


      // function to hide all divs
      function hideAll() {
        $('#nostalgiaStuff').hide();
        $('#smokeStuff').hide();
        $('#problemStuff').hide();
        $('#ultralightStuff').hide();
      }

      // run that function right away
      hideAll();

      // when any animal is clicked, make the suitable div appear
      $('.cover').click(function() {

        // but first, hide all the divs to ensure that
        // only one will be open, ever
        hideAll();

        // here is a switch statement - this was in Codecademy
        // "Control Flow" lesson 7

        // we can get the ID of the thing that was clicked -
        switch ($(this).attr("id")) {
          case "10Days":
            $('#nostalgiaStuff').show();
            break;
          case "acidRap":
            $('#smokeStuff').show();
            break;
          case "coloringBook":
            $('#problemStuff').show();
            break;
          case "TLOP":
            $('#ultralightStuff').show();
            break;
        }
      }); // end of function for clicking


    });
