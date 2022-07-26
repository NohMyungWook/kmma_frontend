var domain = "https://kmma.io/kmma/";

function ArticlePost(){ 
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

// function postUser(){
//     $.ajax({
//         type: 'GET',
//         url: domain + 'validation/authority',
//         contentType: 'application/json',
//         success: function(data){
//             window.location.href='writeNews.html';
//         },
//         error: function(data){
//             window.location.href='index.html';
//         }
//     })
// }

// $(document).ready(function(){
//     postUser();
// })