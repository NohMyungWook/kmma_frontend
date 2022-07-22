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

// alert(Object.keys(data).length);
// alert(data[0]['content']);


//notice.html
function getNotice(num){
    $.ajax({
        type: "GET",
        url: domain + "noticelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 10 * (num - 1);
            var pageNum = totalPage - startNum;
            var endNum = startNum + pageNum;

            if(pageNum > 10){ 
                for(startNum; startNum < 10; startNum++){
                    $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                }
            } else{
                for(startNum; startNum < endNum ; startNum++){
                    $('#notice_list_title' + (startNum - 10)).html(data.content[startNum]['title']);
                    $('#notice_list_time' + (startNum - 10)).html(data.content[startNum]['regdate']);
                }
                for(;endNum < (10 * num); endNum++){
                    $('#notice_list_title' + (endNum - 10)).css('display', 'none');
                    $('#notice_list_time' + (endNum - 10)).css('display', 'none');
                }
            }
        }
    })
}

$(document).ready(function(){
    getNotice(1);
    getArticle(1);
})

//articleNews.html에 가져오기
    function getArticle(num){
        $.ajax({
            type: "GET",
            url: domain + "articlelist?page=" + num,
            contentType: 'application/json',
            success: function(data){
                var totalPage = data.totalElements;
                var startNum = 5 * (num - 1);
                var pageNum = totalPage - startNum;
                var endNum = startNum + pageNum;
    
                if(pageNum > 5){ 
                    for(startNum; startNum < 5; startNum++){
                        $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                        $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                    }
                } else{
                    for(startNum; startNum < endNum ; startNum++){
                        $('#news_list_title' + (startNum - 5)).html(data.content[startNum]['title']);
                        $('#news_list_time' + (startNum - 5)).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + (startNum - 5)).html(data.content[startNum]['content']);
                    }
                    for(endNum;endNum < (5 * num); endNum++){
                        $('#news_list_title' + (endNum - 5)).css('display', 'none');
                        $('#news_list_time' + (endNum - 5)).css('display', 'none');
                        $('#news_list_content' + (endNum - 5)).css('display', 'none');
                    }
                }
            }
        })
    }

//게시물 상세 조회(공지사항)) -> 클릭했을 때 noticeNo 가 뭔지 어케 알아 
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

//게시물 상세조회(활동소식 및 보도자료)
function getArticleContent(){
    $.ajax({
        type: "GET",
        url: domain + "article/" + articleNo,
        contentType: 'application/json',
        success: function(data){
            $('#article_details_title').html(data.title);
            $('.article_details_content').html(data.content);
            $('.article_upload_time').html(data.regdate);
        }
    })
}

// var data = {"content":
// [{"articleNo":13,
// "title":"한국메타버스미디어협회의 활동 소식을 전해드려요 13",
// "content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..",
// "regdate":"2022-07-22"},
// {"articleNo":12,
//     "title":"한국메타버스미디어협회의 활동 소식을 전해드려요 12",
// "content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..",
// "regdate":"2022-07-22"},
// {"articleNo":11,
// "title":"한국메타버스미디어협회의 활동 소식을 전해드려요 11",
// "content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..",
// "regdate":"2022-07-22"},
// {"articleNo":10,
// "title":"한국메타버스미디어협회의 활동 소식을 전해드려요 10",
// "content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..",
// "regdate":"2022-07-22"},
// {"articleNo":9,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 9","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"},
// {"articleNo":8,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 8","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"},
// {"articleNo":7,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 7","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"},
// {"articleNo":6,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 6","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"},
// {"articleNo":5,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 5","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"},
// {"articleNo":4,"title":"한국메타버스미디어협회의 활동 소식을 전해드려요 4","content":"한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..\r\n 한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다.. \r\n한국메타버스미디어협회는 항상 노력합니다.. 한국메타버스미디어협회는 항상 노력합니다..","regdate":"2022-07-22"}],
// "pageable":{"sort":{"empty":true,"unsorted":true,"sorted":false},"offset":0,"pageNumber":0,"pageSize":10,"paged":true,"unpaged":false},
// "totalPages":2,
// "totalElements":13,
// "last":false,
// "size":10,
// "number":0,
// "sort":{"empty":true,
//         "unsorted":true,
//         "sorted":false},
//         "numberOfElements":10,
//         "first":true,
//         "empty":false}

// alert(data.content[0]['articleNo']);

// alert(data.totalPages);