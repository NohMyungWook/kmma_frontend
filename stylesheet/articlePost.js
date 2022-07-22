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

//articleNews.html에 가져오기
function getArticle(num){
    for(var i = 0; i < 10; i++){
        $('#article_link' + i).removeAttr('style');
    }
    $.ajax({
        type: "GET",
        url: domain + "articlelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 0;
            var pageNum = totalPage - 5*(num-1);

            if(pageNum > 5){ 
                for(startNum; startNum < 5; startNum++){
                    $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                }
            } else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#article_link'+ pageNum).css('display', 'none');
                }
            }
        }
    })
}

//게시물 상세조회(활동소식 및 보도자료)
function getArticleContent(){
    $.ajax({
        type: "GET",
        url: domain + "article/" + articleNo,
        contentType: 'application/json',
        success: function(data){
            $('#article_details_title').html(data.title);
            $('.article_details_content').html(data.content);
            $('.article_upload_time').html(data.regdate);
        }
    })
}

$(document).ready(function(){
    postUser();
    getArticle(1);
})