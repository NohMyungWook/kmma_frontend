var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
    postUser();
    beforeAfterPost();
    $.ajax({
        type: "GET",
        url: domain + "article/" + sessionStorage.getItem('articleNum'),
        contentType: 'application/json',
        success: function(data){
            $('#article_details_title').html(data.title);
            $('.article_upload_time').html(data.regdate);
            $('.article_details_content').html(data.content);
            $('.article_details_content img').css('width', '100%');
            $('.article_details_content img').css('height', '100%');
            $('.article_details_content img').css('margin-top', '10px');
            $('.article_details_content p').css('display', 'flex');
            $('.article_details_content p').css('flex-direction', 'column');
        }
    })
    sessionStorage.removeItem('articleNum');
})

//관리자 검증
function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            $('#news_post_edit_bt').css('display', 'block');
            $('#news_post_delete_bt').css('display', 'block');
        },
        error: function(data){
            $('#news_post_edit_bt').css('display', 'none');
            $('#news_post_delete_bt').css('display', 'none');
        }
    })
}

var articleNum = sessionStorage.getItem('articleNum');

//이전 게시물 다음 게시물 제목 가져오기
function beforeAfterPost(){
    $.ajax({
        type: "GET",
        url: domain + "pageinfo/article/" + articleNum,
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
    sessionStorage.setItem('articleNum', beforeNo);
    location.href = "news_postDetails.html";
}

function moveNext(){
    var nextNo = $('.next_post_link').attr('id');
    sessionStorage.setItem('articleNum', nextNo);
    location.href = "news_postDetails.html";
}

function move_editArticle(){
    var articleTitle = $('#article_details_title').html();
    var articleContent = $('.article_details_content').html();
    sessionStorage.setItem('articleTitle', articleTitle);
    sessionStorage.setItem('articleContent', articleContent);
    sessionStorage.setItem('articleNum', articleNum);
    window.location.href='editArticle.html';
}

function delete_article(){
    let check_delete_article = confirm("정말로 삭제하시겠습니까?");
    if(check_delete_article){
        $.ajax({
            type: "DELETE",
            url: domain + 'article/' + articleNum,
            contentType: 'application/json',
            success: function(data){
                window.location.href = 'loadingDeleteNews.html';
            }
        })
    }
    else    return;
}