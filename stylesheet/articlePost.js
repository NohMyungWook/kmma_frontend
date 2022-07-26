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

function writeArticleUser(){
    $.ajax({
        type: "GET",
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            window.location.href='writeArticle.html';
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}


function clickArticle(num){
    var articleNum = $('#article_link' + num + ' div:nth-child(3)').attr('id');
    sessionStorage.setItem('articleNum', articleNum);
    location.href="news_postDetails.html";
    showArticle();
}


//articleNews.html에 가져오기
function getArticle(num){
    window.scrollTo(0,0);
    for(var i = 0; i < 10; i++){
        $('#article_link' + i).removeAttr('style');
    }
    $('#articlePagination a').css('background-color', 'white');
    $('#articlePage' + num).css('background-color', 'rgb(214, 214, 214)');
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
                    $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                }
            } else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                    $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#article_link'+ pageNum).css('display', 'none');
                }
            }
        }
    })
}

function getArticlePageNum(num){
    $.ajax({
        type: "GET",
        url: domain + "articlelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#articlePagination').append('<li class="page-item"><a class="page-link" id="articlePage' + i + '" onclick="getArticle(' + i + ')">' + i + '</a></li>');
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

function noImage(){
    for(var i = 0; i < 5; i++){
        var name = '#news_list_content' + i;
        $(name + 'img').css('display', 'none');
    }
}

$(document).ready(function(){
    postUser();
    getArticle(1);
    noImage();
    getArticlePageNum(1);
})