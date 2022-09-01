var domain = "https://kmma.io/kmma/";

function getGreetings(){
    $.ajax({
        type: "GET",
        url: domain + 'greetings',
        contentType: 'application/json',
        success: function(data){ 
            $('.greetings_ment').html(data[0]['link']);
            $('.greetings_img img').attr('src', data[1]['link']);
        }
    })
}

$(document).ready(function(){
    getGreetings();
})