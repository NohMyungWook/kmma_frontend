var domain = "https://kmma.io/kmma/";

function ArticlePost(){ 
    let check_post_article = confirm("정말로 등록하시겠습니까?");
    if(check_post_article){
        var articleTitle = $('.post_notice_title').val();
        var articleContent = $('#summernote').summernote('code');

        $.ajax({
            type: "POST",
            url: domain + 'image/article',
            data:JSON.stringify({
                "title": articleTitle,
                "content" : articleContent
            }),
            contentType: 'application/json',
            success: function(data){
                window.location.href='loadingArticle.html';
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