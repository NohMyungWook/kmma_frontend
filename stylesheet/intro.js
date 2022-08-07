var domain = "https://kmma.io/kmma/";

function getIntro(){
    $.ajax({
        type: "GET",
        url: domain + 'introduce',
        contentType: 'application/json',
        success: function(data){
            $('#content_body1').html(data.설립취지);
            $('#content_body2').html(data.MISSION);
        }
    })
}

$(document).ready(function(){
    getIntro();
})