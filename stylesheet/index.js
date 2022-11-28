// 이미지 배너 슬라이딩 효과
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

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
            first_content.css("left", last_content.position().left+last_content.width()+60);
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
    getQr();
    getMainImg();
    getPromotionImage(0);
})

function getPromotionImage(no){
    var back = no-1;
    var next = no+1;
    $.ajax({
        type: "GET",
        url: domain + "promotion/list?page=0",
        contentType: 'application/json',
        success: function(data){
            $('.index_img_wrap').empty();
            if(no == 0) back = 0;
            if(no == data.content.length-4) next = data.content.length-4;
            $('.index_img_wrap').append('<svg xmlns="http://www.w3.org/2000/svg" onclick="getPromotionImage('+back+')" width="40" height="100%" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16" style="cursor: pointer;"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg>');
            for(var i = 0; i < 4; i++){
                $('.index_img_wrap').append('<img src = "'+data.content[i+no]['link']+'">');
            }
            $('.index_img_wrap').append('<svg xmlns="http://www.w3.org/2000/svg" onclick="getPromotionImage('+next+')" width="40" height="100%" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16" style="cursor: pointer;"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg>');
        }
    })
}

function getMainImg(){
    var innerMent = '<div class="carousel-caption"><div class="main_text">KMMA</div><p>Korea Metaverse Media Assoication</p><p>어서오세요. 한국메타버스미디어협회 입니다.</p></div>';
    $.ajax({
        type:"GET",
        url: domain + 'main/image',
        contentType: 'application/json',
        success: function(data){
            var num = data.length;
            if(num > 0){
                $('.carousel-indicators').html('<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>');
                $('.carousel-inner').html('<div class="carousel-item active"><img id="main_1" src="' + data[0]['link'] + '" class="d-block w-100" alt="">' + innerMent + '</div>');
                for(var i = 1; i < num; i++){
                    $('.carousel-indicators').append('<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="' + i + '" aria-label="Slide ' + i + '"></button>');
                    $('.carousel-inner').append('<div class="carousel-item"><img id="main_' + (i+1) + '" src="' + data[i]['link'] + '" class="d-block w-100" alt="">' + innerMent + '</div>');
                }
            }
        }
    })
}

function getQr(){
    $.ajax({
        type:"GET",
        url: domain + 'qr',
        contentType: 'application/json',
        success: function(data){
            $('#qr_img').attr('src', data[0]['link']);
            $('#qr_img').attr('onclick', 'window.open("' + data[1]['link'] + '")');
            $('.qr_content').html(data[2]['link']);
        }
    })
}

function getRollingImg(){
    $.ajax({
        type: "GET",
        url: domain + "logos",
        contentType: "application/json",
        success: function(data){
            for(var j = 0; j < 5; j++){
                for(var i = 0; i < data.length; i++){
                    $('.rolling_wrap').append('<a href="' + data[i]['homepage'] + '"target="_blank" class="content"><img src="' + data[i]['link'] + '" alt=""></a>')
                }

            }
            $(".rolling_wrap a").each(function(){
                $(this).css("left", banner_left);
                $(this).css("cursor", "pointer");
                banner_left += $(this).width()+30;
                $(this).attr("id", "content"+(++img_cnt));
            });
        
            last = img_cnt;
            startAction();
            $(".content").hover(
                function() {stopAction();},
                function() {startAction();}
            );
        }
    })
}

$(document).ready(function(){
    getRollingImg();
    getYoutubeLink();
    getIndexImage();
});