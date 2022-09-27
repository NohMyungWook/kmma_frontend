function goToData(){
    if(sessionStorage.getItem("loginId") != null){
        window.location.href="data.html";
    }
    else{
        alert("회원만 접근 가능합니다.");
    }
}

function getMainLogo(){
    $.ajax({
        type: "GET",
        url: domain + "main/logo",
        contentType: "application/json",
        success: function(data){
            $('#navbar-img').attr('src', data);
            $('#footer_img_loco').attr('src', data);
        }
    })
}

$(document).ready(function(){
    getMainLogo();
})