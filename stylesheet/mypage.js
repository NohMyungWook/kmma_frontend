var domain = "https://api.kmma.io:8080/kmma/";


function passWord(data) {
    var testV = 1;
    var pass1 = prompt('암호를 입력하십시오','암호를 입력하세요'); // 초기시 암호 물어보는 멘트
    while (testV < 3) {
    if (pass1.toLowerCase() == data) { 
        location.href ='editMyPage.html'; // 이동할 웹페이지 지정 - 현재창에서 이동
        break;
    } 
    testV+=1;
    var pass1 = prompt('암호를 확인 하시고 다시 입력하세요!.','암호 확인'); // 암호가 틀렸을때 멘트
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
        history.go(-1);
        return " ";
} 



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
        
        //사용자가 비밀번호 입력하기 
        //사용자가 입력한 비밀번호가 맞으면
        $.ajax({
            type: "GET", 
            url: domain + 'validation/password',
            contentType: 'application/JSON',
            success: function(data){
                passWord(data.pw);
            },
            error: function(data){

            }
        })
    })
})

function passWord() {
    var testV = 1;
    var pass1 = prompt('암호를 입력하십시오','암호를 입력하세요'); // 초기시 암호 물어보는 멘트
    while (testV < 3) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "1234") { // 암호지정
        alert('어서 오세요! 확인을 누르면 지정하신 페이지로 이동합니다.'); // 암호가 맞았을때 나오는 멘트
        // window.open('http://'); // 이동할 웹페이지 지정 - 새창으로 뜰때
        location.href ='editMyPage.html'; // 이동할 웹페이지 지정 - 현재창에서 이동
        break;
    } 
    testV+=1;
    var pass1 = prompt('암호를 확인 하시고 다시 입력하세요!.','암호 확인'); // 암호가 틀렸을때 멘트
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
        history.go(-1);
        return " ";
} 

