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

function getFooter(){
    $.ajax({
        type: "GET",
        url: domain + "footer",
        contentType: "application/json",
        success: function(data){
            const arr = data.split("$");
            document.getElementById("footer_email_and_tel").innerHTML=arr[0]+"<br>"+arr[1];
            document.getElementById("footer_addr").innerHTML=arr[2];
        }
    })
}

$(document).ready(function(){
    getMainLogo();
    getFooter();
})