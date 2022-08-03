var domain = "https://kmma.io/kmma/";
var dataNum = sessionStorage.getItem('dataNum');

function getDataPost(){
    $.ajax({
        type: "GET",
        url: domain + 'filedetail/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            var length = data.fileName.length;
            for(var i = 0; i < length; i++){
                var split = data.fileName[i].split(' :', 1);
                if(i !== 0){
                    $('.data_file').append('<br>');
                }
                $('.data_file').append('<a id="' + split + '" onclick="location.href=\''+ domain + 'file/' + split + '\'">'  + data.fileName[i].substr(18) + '</div>');
            }
            $('#data_details_title').html(data.title);
            $('.data_content').html(data.content);
            $('.data_upload_time').html(data.regdate);
        }
    })
}

function loginCheck(){
    // 세션 검증
    $.ajax({
        type: "GET",
        url: domain + "validation/session/" + sessionStorage.getItem('loginId'),
        contentType : "application/json",
        success: function(data){
            window.location.href="dataDetail.html";
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}


function beforeAfterPost(){
    $.ajax({
        type: "GET",
        url: domain + "pageinfo/file/" + dataNum,
        contentType: 'application/json',
        success: function(data){
            var beforeTitle, nextTitle;
            if(data.before == null){
                $('.before_post_link').css('display', 'none');
            }else{
                beforeTitle = data.before;
                $('.before_post_link').attr('id', data.beforeNo);
            }

            if(data.after == null){
                $('.before_post_link').css('border-bottom', '1px solid rgb(184, 184, 184)');
                $('.next_post_link').css('display', 'none');
            }else{
                nextTitle = data.after;
                $('.next_post_link').attr('id', data.afterNo);
            }
            $('.before_post_title').html(beforeTitle);
            $('.next_post_title').html(nextTitle);
        }
    })
}

function deleteData(){
    $.ajax({
        type: "DELETE",
        url: domain + 'file/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            window.location.href='data.html';
        }
    })
}

function moveBefore(){
    var beforeNo = $('.before_post_link').attr('id');
    sessionStorage.setItem('dataNum', beforeNo);
    location.href = "dataDetail.html";
}

function moveNext(){
    var nextNo = $('.next_post_link').attr('id');
    sessionStorage.setItem('dataNum', nextNo);
    location.href = "dataDetail.html";
}

$(document).ready(function(){
    loginCheck();
    beforeAfterPost();
    getDataPost();
})