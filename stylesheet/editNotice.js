var domain = "https://kmma.io/kmma/";
var noticeNum = sessionStorage.getItem('noticeNum');
var noticeTitle = sessionStorage.getItem('noticeTitle');
var noticeContent = sessionStorage.getItem('noticeContent');

function getWrotenNotice(){
    $('.post_notice_title').val(noticeTitle);
    $('#summernote').html(noticeContent);

}

function editNoticeUpload(){
    let check_edit_notice = confirm("정말로 수정하시겠습니까?");
    if(check_edit_notice){
        var noticeTitle2 = $('.post_notice_title').val();
        var noticeContent2 = $('#summernote').summernote('code');

        $.ajax({
            type: "PUT",
            url: domain + 'notice/' + noticeNum,
            data:JSON.stringify({
                "title": noticeTitle2,
                "content" : noticeContent2
            }),
            contentType: 'application/json',
            success: function(data){
                window.location.href = 'loadingEditNotice.html';
            }
        })
    }
    else    return;
}

$(document).ready(function(){
    getWrotenNotice();
})
