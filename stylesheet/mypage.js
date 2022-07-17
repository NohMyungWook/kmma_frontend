var domain = "http://api.kmma.io:8080/kmma/";
// var domain = "http://localhost:8080/kmma/"

$(document).ready(function(){
    var loginId = sessionStorage.getItem('loginId');

    // 세션 검증
    $.ajax({
        type: "GET",
        url: domain + "validation/session",
        contentType : "application/json",
        dataType : "json",
        success: function(data){
            if(data.loginId == loginId){
                $('.login-signup-bt').css('display', 'none');
                $('.mypage-bt').css('display', 'block');
                $('.name-mypage-bt').html('[' + loginId + ']님 환영합니다');
                $('.mypage_member_name_id').html(loginId+' 님');
                $('.edit_mypage_member_name_id').html(loginId+' 님');
            }
        },
        error: function(data){
            $('.login-signup-bt').css('display', 'block');
            $('.mypage-bt').css('display', 'none');
        }
    })

 
    //로그아웃
    $('.main-logout-bt').click(function(){
        $.ajax({
            type: "GET",
            url: domain + "logout",
            contentType : "application/json",
            success: function(data){
                $('.main-logout-bt').click(function(){
                    sessionStorage.clear();
                })
            },
            error: function(data){
    
            }
        })
    })

    $('.name-mypage-bt').mouseover(function(){
        $('.name-mypage-bt').css('text-decoration', 'underline'); $
    });
    $('.name-mypage-bt').mouseout(function(){
        $('.name-mypage-bt').css('text-decoration', 'none');
    });

     
    //세션 검증(비밀번호)
    $('#mypage_edit_bt').click(function(){

        var inputPw = prompt('비밀번호를 입력하세요');
        //사용자가 비밀번호 입력하기 
        //사용자가 입력한 비밀번호가 맞으면
        $.ajax({
            type: "GET", 
            url: domain + 'validation/password',
            contentType: 'application/JSON',
            success: function(data){
                if(data.pw == inputPw){
                    window.location.href='editMyPage.html';
                }
            },
            error: function(data){

            }
        })
    })
})


