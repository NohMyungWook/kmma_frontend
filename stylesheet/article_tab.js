$(document).ready(function() {
    $('#tabname1').attr('class', 'article_tabname_active');
    $('#_tab_1').show();
    $('#_tab_2').hide();
    $('#_tab_3').hide();
    $('#_tab_4').hide();
    $('#_tab_5').hide();
    $('#_tab_6').hide();
    $('#_tab_7').hide();
    $('#_tab_8').hide();
});

function onDisplay(tabname){
    for (var i = 1; i < 9; i++) {
        $('#_tab_'+i).hide();
        $('#tabname'+i).attr('class', 'article_content_tabname_style');
    }
    $('#_tab_'+tabname).show();
    $('#tabname'+tabname).attr('class', 'article_tabname_active');
}