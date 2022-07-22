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

$(document).ready(function(){
    postUser();
})

// alert(Object.keys(data).length);
// alert(data[0]['content']);


//notice.html
function getNotice(num){
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

$(document).ready(function(){
    getNotice(1);
})


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
