var domain = "https://kmma.io/kmma/";

function getOrganization(){
    $.ajax({
        type: 'GET',
        url: domain + "organization",
        contentType: 'application/json',
        success: function(data){
            $('.organization_main_table').attr('src', data);
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

$(document).ready(function(){
    getOrganization();
})