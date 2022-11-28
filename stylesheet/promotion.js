var domain = "https://kmma.io/kmma/";

function getPromotionPageNum(num){
    $.ajax({
        type: "GET",
        url: domain + "promotion/list?page=" + num,
        contentType: 'application/json',
        success: function(data){
            /* promotion body */
            $('.promotion_content').empty();
            $('#promotionPagination').empty();
            var length = data.content.length;
            for(var i = 0; i < length; i++){
                $('.promotion_content').append("<div class='promotion_img' id='" + data.content[i].no + "'><img src='" + data.content[i].link + "'></div>");
            }
            /* promotion pagination */
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#promotionPagination').append('<li class="page-item"><a class="page-link" id="promotionPage' + i + '" onclick="getPromotionPageNum(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

$(document).ready(function(){
    getPromotionPageNum(0);
})