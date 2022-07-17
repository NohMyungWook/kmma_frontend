$(document).ready(function(){
    var loginId = sessionStorage.getItem('loginId');

    if(loginId != null){
        $('.login-signup-bt').css('display', 'none');
        $('.mypage-bt').css('display', 'block');
        $('.name-mypage-bt').html('[' + loginId + ']님 환영합니다');
        $('.mypage_member_name_id').html(loginId+' 님');
        $('.edit_mypage_member_name_id').html(loginId+' 님');
    } else{
        $('.login-signup-bt').css('display', 'block');
        $('.mypage-bt').css('display', 'none');
    }


    $('.name-mypage-bt').mouseover(function(){
        $('.name-mypage-bt').css('text-decoration', 'underline');
    });
    $('.name-mypage-bt').mouseout(function(){
        $('.name-mypage-bt').css('text-decoration', 'none');
    });
})

function logout(){
    sessionStorage.clear();
}

