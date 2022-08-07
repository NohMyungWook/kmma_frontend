var domain = "https://kmma.io/kmma/";

function getGreetings(){
    $.ajax({
        type: "GET",
        url: domain + 'greetings',
        contentType: 'application/json',
        success: function(data){
            $('.greetings_ment').html(data);
        }
    })
}

$(document).ready(function(){
    getGreetings();
})