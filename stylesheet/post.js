var domain = "https://kmma.io/kmma/";

//관리자 검증
function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            $('.notice_write_bt').css('display', 'block');
            $('.news_write_bt').css('display', 'block');
        },
        error: function(data){
            $('.notice_write_bt').css('display', 'none');
            $('.news_write_bt').css('display', 'none');
        }
    })
}

function writeNoticeUser(){
    $.ajax({
        type: "GET",
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            window.location.href='writeNotice.html';
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}


function clickNotice(num){
    var noticeNum = $('#notice_link' + num + ' div:nth-child(3)').attr('id');
    sessionStorage.setItem('noticeNum', noticeNum);
    location.href="postDetails.html";
}


//notice.html
function getNotice(num){
    window.scrollTo(0,0);
    for(var i = 0; i < 10; i++){
        $('#notice_link' + i).removeAttr('style');
    }
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 0;
            var pageNum = totalPage - 10*(num-1);

            if(pageNum > 10){ 
                for(startNum; startNum < 10; startNum++){
                    $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#notice_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['noticeNo']));
                }
            } else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#notice_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['noticeNo']));
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#notice_link'+ pageNum).css('display', 'none');
                }
            }
        }
    })
}

function getNoticePageNum(num){
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#noticePagination').append('<li class="page-item"><a class="page-link" id="noticePage' + i + '" onclick="getNotice(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

//게시물 상세 조회(공지사항)) -> 클릭했을 때 noticeNo 가 뭔지 어케 알아 
function getNoticeContent(){ 
    $.ajax({
        type: "GET",
        url: domain + "notice/" + noticeNo,
        contentType: 'application/json',
        success: function(data){
            $('#post_details_title').html(data.title);
            $('.post_details_content').html(data.content);
            $('.post_upload_time').html(data.regdate);
        }
    })
}


$(document).ready(function(){
    postUser();
    getNotice(1);
    getNoticePageNum(1);
})