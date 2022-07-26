var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
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
            window.location.href = 'activityNews.html';
        }
    })
}