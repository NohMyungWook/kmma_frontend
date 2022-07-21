var domain = "https://kmma.io/kmma/";

//관리자 검증
function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
            $('.notice_write_bt').css('display', 'block');
            $('.news_write_bt').css('display', 'block');
        },
        error: function(data){
            $('.notice_write_bt').css('display', 'none');
            $('.news_write_bt').css('display', 'none');
        }
    })
}

$(document).ready(function(){
    postUser();
})

var data = [{
	"noticeNo" : 57,
	"title" : "공지사항 1번 제목입니다",
	"content" : "This feature is still being prepared.",
	"regdate" : "2022-07-21"
},
{
	"noticeNo" : 56,
	"title" : "공지사항 2번 제목입니다",
	"content" : "This feature is still being prepared.",
	"regdate" : "2022-07-21"
},
{
	"noticeNo" : 55,
	"title" : "공지사항 3번 제목입니다",
	"content" : "This feature is still being prepared.",
	"regdate" : "2022-07-21"
}
]

// alert(data[0]['content']);

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