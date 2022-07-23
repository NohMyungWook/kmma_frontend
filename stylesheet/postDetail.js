var domain = "https://kmma.io/kmma/";

$(document).ready(function(){
    getSearchArticlePageNum();
    $.ajax({
        type: "GET",
        url: domain + "notice/" + sessionStorage.getItem('noticeNum'),
        contentType: 'application/json',
        success: function(data){
            $('#post_details_title').html(data.title);
            $('.post_upload_time').html(data.regdate);
            $('.post_details_content').html(data.content);
        }
    })
    sessionStorage.removeItem('noticeNum');
})

function getSearchArticlePageNum(){
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=1",
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#noticeSearchPagination').append('<li class="page-item"><a class="page-link" id="noticePage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

// function showNotice(data){
//     $.ajax({
//         type: "GET",
//         url: domain + "notice/" + detail,
//         contentType: 'application/json',
//         success: function(data){
//             showNotice(data);
//         }
//     })
// }

// function clickArticle(num){
//     var articleNum = $('#notice_link' + num + ' div:nth-child(3)').attr('id');
//     location='news_postDetails.html';
//     $.ajax({
//         type: "GET",
//         url: domain + "article/" + articleNum,
//         contentType: 'application/json',
//         success: function(data){
//             $('#article_details_title').html(data.title);
//             $('.article_upload_time').html(data.regdate);
//             $('.article_details_content').html(data.content);
//         }
//     })
// }

