// 이미지 배너 슬라이딩 효과
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

$(document).ready(function(){
    $(".rolling_wrap a").each(function(){
        $(this).css("left", banner_left);
        banner_left += $(this).width()+30;
        $(this).attr("id", "content"+(++img_cnt));
    });

    last = img_cnt;
    startAction();

    $(".content").hover(
        function() {stopAction();},
        function() {startAction();});
});

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

//index.html 페이지에 최근 공지글 3개
function getIndexNotice(){
    $.ajax({
        type: "GET",
        url: domain + "notice/main",
        contentType: 'application/json',
        success: function(data){
            $('#index_notice_title1').html(data[0]['title']);
            $('#index_notice_content1').html(data[0]['content']);
            $('#index_notice_date1').html(data[0]['regdate']);
            $('#index_notice_title2').html(data[1]['title']);
            $('#index_notice_content2').html(data[1]['content']);
            $('#index_notice_date2').html(data[1]['regdate']);
            $('#index_notice_title3').html(data[2]['title']);
            $('#index_notice_content3').html(data[2]['content']);
            $('#index_notice_date3').html(data[2]['regdate']);
        }
    })
}

$(document).ready(function(){
    getIndexNotice();
})