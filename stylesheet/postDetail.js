var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
    postUser();
    getSearchArticlePageNum();
    $.ajax({
        type: "GET",
        url: domain + "notice/" + sessionStorage.getItem('noticeNum'),
        contentType: 'application/json',
        success: function(data){
            $('#post_details_title').html(data.title);
            $('.post_upload_time').html(data.regdate);
            $('.post_details_content').html(data.content);
        }
    })
    sessionStorage.removeItem('noticeNum');
})

function getSearchArticlePageNum(){
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=1",
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#noticeSearchPagination').append('<li class="page-item"><a class="page-link" id="noticePage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

//관리자 검증
function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            $('#post_edit_bt').css('display', 'block');
            $('#post_delete_bt').css('display', 'block');
        },
        error: function(data){
            $('#post_edit_bt').css('display', 'none');
            $('#post_delete_bt').css('display', 'none');
        }
    })
}


var noticeNum = sessionStorage.getItem('noticeNum');

function move_editNotice(){
    var noticeTitle = $('#post_details_title').html();
    var noticeContent = $('.post_details_content').html();
    sessionStorage.setItem('noticeTitle', noticeTitle);
    sessionStorage.setItem('noticeContent', noticeContent);
    sessionStorage.setItem('noticeNum', noticeNum);
    window.location.href='editNotice.html';
}

function delete_notice(){
    $.ajax({
        type: "DELETE",
        url: domain + 'notice/' + noticeNum,
        contentType: 'application/json',
        success: function(data){
            window.location.href = 'loadingDeleteNotice.html';
        }
    })
}

