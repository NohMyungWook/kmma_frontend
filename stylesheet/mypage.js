var domain = "https://kmma.io/kmma/";

function moveMypage(){
    if(sessionStorage.getItem('loginId') == 'admin'){
        window.location.href='kmmaAdmin.html';
    }else{
        window.location.href='mypage.html';
    }
}

$(document).ready(function(){

    // 세션 검증
    $.ajax({
        type: "GET",
        url: domain + "validation/session/" + sessionStorage.getItem('loginId'),
        contentType : "application/json",
        success: function(data){
            console.log("validation success");
            $('.login-signup-bt').css('display', 'none');
            $('.name-mypage-bt').css('display', 'block');
            $('.index_logout_bt').css('display', 'block');
            $('.index_logout_bt p').css('display', 'block');
            $('.name-mypage-bt').html('[' + sessionStorage.getItem('loginId') + ']님 환영합니다');
            $('.mypage_member_name_id').html(sessionStorage.getItem('loginId') +' 님');
            $('.edit_mypage_member_name_id').html(sessionStorage.getItem('loginId') +' 님');
        },
        error: function(data){
            console.log("validation error");
            sessionStorage.clear();
            $('.login-signup-bt').css('display', 'block');
            $('.name-mypage-bt').css('display', 'none');
            $('.index_logout_bt').css('display', 'none');
            $('.index_logout_bt p').css('display', 'none');
        }
    })
 
    
    $('.name-mypage-bt').mouseover(function(){
        $('.name-mypage-bt').css('text-decoration', 'underline'); $
    });
    $('.name-mypage-bt').mouseout(function(){
        $('.name-mypage-bt').css('text-decoration', 'none');
    });

     
    //세션 검증(비밀번호)
    $('#check_pw_bt').click(function(){
        var check_pw_input = $('#check_pw_input').val();
        $.ajax({
            type: "POST", 
            url: domain + 'validation/password',
            data: JSON.stringify({
                "pw" : check_pw_input
            }),
            contentType: 'application/json',
            success: function(data){
                location.href="editMyPage.html";
            },
            error: function(data){
                document.getElementById("checkPw_title").innerHTML =('비밀번호를 다시 입력하세요');
            }
        })
    })

    
})


