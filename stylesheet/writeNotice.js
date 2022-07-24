var domain = "https://kmma.io/kmma/";

function imgChange(){
    // var noticeTitle = $('.post_notice_title').val();
    var content = $('#summernote').text();
    var noticeContent = $('#summernote').summernote('code');
    var firstIndex = noticeContent.indexOf('data:');
    var endIndex = noticeContent.indexOf('data-filename') -2;
    var imgLink = noticeContent.substring(firstIndex, endIndex);
    alert(noticeContent.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, ""));
    $.ajax({
        type: "POST",
        url: domain + 'image',
        data:{
            "base64" : imgLink
        },
        contentType: 'application/json',
        success: function(data){
            var imgUrl = data.link;
            alert(imgUrl);
        }
    })
}

// var text='<p>agasdgsag</p>';
// alert(text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, ""));