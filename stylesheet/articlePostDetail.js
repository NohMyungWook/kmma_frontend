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
