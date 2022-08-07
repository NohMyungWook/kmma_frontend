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

$(document).ready(function(){
    getPromotion();
})