var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
    postUser();
    $.ajax({
        type: "GET",
        url: domain + "article/" + sessionStorage.getItem('articleNum'),
        contentType: 'application/json',
        success: function(data){
            $('#article_details_title').html(data.title);
            $('.article_upload_time').html(data.regdate);
            $('.article_details_content').html(data.content);
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

function move_editArticle(){
    var articleTitle = $('#article_details_title').html();
    var articleContent = $('.article_details_content').html();
    sessionStorage.setItem('articleTitle', articleTitle);
    sessionStorage.setItem('articleContent', articleContent);
    sessionStorage.setItem('articleNum', articleNum);
    window.location.href='editArticle.html';
}

function delete_article(){
    $.ajax({
        type: "DELETE",
        url: domain + 'article/' + articleNum,
        contentType: 'application/json',
        success: function(data){
            window.location.href = 'loadingDeleteNews.html';
        }
    })
}