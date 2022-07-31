var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
    postUser();
    getSearchArticlePageNum();
    beforeAfterPost();
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

//이전 게시물 다음 게시물 제목 가져오기
function beforeAfterPost(){
    $.ajax({
        type: "GET",
        url: domain + "pageinfo/notice/" + noticeNum,
        contentType: 'application/json',
        success: function(data){
            var beforeTitle, nextTitle;
            if(data.before == null){
                $('.before_post_link').css('display', 'none');
            }else{
                beforeTitle = data.before;
                $('.before_post_link').attr('id', data.beforeNo);
            }

            if(data.after == null){
                $('.before_post_link').css('border-bottom', '1px solid rgb(184, 184, 184)');
                $('.next_post_link').css('display', 'none');
            }else{
                nextTitle = data.after;
                $('.next_post_link').attr('id', data.afterNo);
            }
            $('.before_post_title').html(beforeTitle);
            $('.next_post_title').html(nextTitle);
        }
    })
}

function moveBefore(){
    var beforeNo = $('.before_post_link').attr('id');
    sessionStorage.setItem('noticeNum', beforeNo);
    location.href = "postDetails.html";
}

function moveNext(){
    var nextNo = $('.next_post_link').attr('id');
    sessionStorage.setItem('noticeNum', nextNo);
    location.href = "postDetails.html";
}

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
