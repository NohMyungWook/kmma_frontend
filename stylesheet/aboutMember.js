var domain = "https://kmma.io/kmma/";

function getAboutMember(){
    $.ajax({
        type: 'GET',
        url: domain + "about/member",
        contentType: 'application/json',
        success: function(data){
            $('.about_member_ment').html(data);
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

$(document).ready(function(){
    getAboutMember();
})