var domain = "https://kmma.io/kmma/";

function getPromotion(){
    $.ajax({
        type: "GET",
        url: domain + 'promotion',
        contentType: 'application.json',
        success: function(data){
            var length = data.length;
            for(var i = (length - 1); i >=0; i--){
                $('.promotion_content').append("<div class='promotion_img' id='" + data[i].no + "'><img src='" + data[i].link + "'></div>");
            }
        }
    })
}

function getPromotionPageNum(num){
    $.ajax({
        type: "GET",
        url: domain + "promotion/list?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#noticePagination').append('<li class="page-item"><a class="page-link" id="promotionPage' + i + '" onclick="getNotice(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

$(document).ready(function(){
    getPromotion();
    getPromotionPageNum(1);
})