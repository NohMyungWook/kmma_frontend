var domain = "https://kmma.io/kmma/";
var articleNum = sessionStorage.getItem('articleNum');
var articleTitle = sessionStorage.getItem('articleTitle');
var articleContent = sessionStorage.getItem('articleContent');

function getWrotenArticle(){
    $('.post_notice_title').val(articleTitle);
    $('#summernote').html(articleContent);

}

function editArticleUpload(){
    let check_edit_article = confirm("정말로 수정하시겠습니까?");

    if(check_edit_article){
        var articleTitle2 = $('.post_notice_title').val();
        var articleContent2 = $('#summernote').summernote('code');

        $.ajax({
            type: "PUT",
            url: domain + 'article/' + articleNum,
            data:JSON.stringify({
                "title": articleTitle2,
                "content" : articleContent2
            }),
            contentType: 'application/json',
            success: function(data){
                window.location.href = 'loadingEditNews.html';
            }
        })
    }
    else    return;
}

$(document).ready(function(){
    getWrotenArticle();
})
