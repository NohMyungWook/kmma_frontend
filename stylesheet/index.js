// 이미지 배너 슬라이딩 효과
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

$(document).ready(function(){
    getYoutubeLink();
    getIndexImage();
    $(".rolling_wrap a").each(function(){
        $(this).css("left", banner_left);
        banner_left += $(this).width()+30;
        $(this).attr("id", "content"+(++img_cnt));
    });

    last = img_cnt;
    startAction();

    $(".content").hover(
        function() {stopAction();},
        function() {startAction();}
    );
});

function parsingLink(link){
    if(link.includes('https://youtu.be/')){
        var real = link.substr(17);
        var realLink = 'https://www.youtube.com/embed/' + real;
        $('#kmma_youtube').attr('src', realLink);
    }
    if(link.includes('https://www.youtube.com/watch?v=')){
        var real = link.substr(32);
        var realLink = 'https://www.youtube.com/embed/' + real;
        $('#kmma_youtube').attr('src', realLink);
    }
}
function getYoutubeLink(){
    $.ajax({
        type: "GET",
        url: domain + 'youtube',
        contentType: 'application/json',
        success: function(data){
            parsingLink(data);
        }
    })
}

function startAction(){
    interval = setInterval(function(){
        $(".rolling_wrap a").each(function(){
            $(this).css("left", $(this).position().left-1);
        });
        
        var first_content = $("#content"+first);
        var last_content = $("#content"+last);

        if(first_content.position().left < "-"+$(first_content).width()){
            first_content.css("left", last_content.position().left+last_content.width()+30);
            first++;
            last++;
            if(last > img_cnt) { last = 1; }
            if(first > img_cnt) { first = 1; }
        }
    }, 15);
}

function stopAction(){
    clearInterval(interval);
}

function getNotice(num){
    for(var i = 0; i < 10; i++){
        $('#notice_link' + i).removeAttr('style');
    }
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var startNum = 0;
            for(startNum; startNum < 3; startNum++){
                $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                $('#notice_link' + startNum +' div:nth-child(4)').attr("id", (data.content[startNum]['noticeNo']));
            }
        }
    })
}

function clickNotice(num){
    var noticeNum = $('#notice_link' + num + ' div:nth-child(4)').attr('id');
    sessionStorage.setItem('noticeNum', noticeNum);
    location.href="postDetails.html";
}

function getNoticeContent(){ 
    $.ajax({
        type: "GET",
        url: domain + "notice/" + noticeNo,
        contentType: 'application/json',
        success: function(data){
            $('#post_details_title').html(data.title);
            $('.post_details_content').html(data.content);
            $('.post_upload_time').html(data.regdate);
        }
    })
}


//index.html 페이지에 최근 공지글 3개
function getIndexNotice(){
    $.ajax({
        type: "GET",
        url: domain + "notice/main",
        contentType: 'application/json',
        success: function(data){
            for(var i = 0; i < 3; i++){
                $('#index_notice_title' + i).html(data[i]['title']);
                $('#index_notice_content' + i).html(data[i]['content']);
                $('#index_notice_date' + i).html(data[i]['regdate']);
            }
        }
    })
}

$(document).ready(function(){
    getIndexNotice();
    getNotice(1);
})

function getIndexImage(){
    $.ajax({
        type: "GET",
        url: domain + "promotion",
        contentType: 'application/json',
        success: function(data){
            for(var i = 0; i < 4; i++){
                $('.index_img_wrap').append('<img src = "'+data[i]['link']+'">');
            }
        }
    })
}

function showQRpopup(){
    var url = "qr_popup.html";
    var name = "QR 자세히 보기";
    var option = "width = 520, height = 520, top = 100, left = 50, location = no";
    window.open(url, name, option);
}