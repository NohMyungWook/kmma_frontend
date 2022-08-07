$(document).ready(function() {
    $('#tab1').show();
    $('#tab2').hide();
    $('#tab3').hide();
});

function onDisplay(tabname){
    for (var i = 1; i < 9; i++) {
        $('#tab'+i).hide();
    }
    $('#tab'+tabname).show();
}