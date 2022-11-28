var domain = "https://kmma.io/kmma/";

function makeNoticePost(){ 
    let check_post_notice = confirm("정말로 등록하시겠습니까?");
    if(check_post_notice){
        var noticeTitle = $('.post_notice_title').val();
        var noticeContent = $('#summernote').summernote('code');

        $.ajax({
            type: "POST",
            url: domain + 'image/notice',
            data:JSON.stringify({
                "title": noticeTitle,
                "content" : noticeContent
            }), 
            contentType: 'application/json',
            success: function(data){
                window.location.href='loadingNotice.html';
            }
        })
    }
    else    return;
}

function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}
$(document).ready(function(){
    postUser();
})

