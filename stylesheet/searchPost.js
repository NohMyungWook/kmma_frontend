// var domain = "https://kmma.io/kmma/";


// function searchNotice(num){
//     var searchWord = $('#notice_search_input').val();
//     searchApi(num, searchWord);

// }

function getSearchNoticePageNum(num){
    $('#pageNav2').css('display', 'block');
    $('#pageNav1').css('display', 'none');
    var searchWord = $('#notice_search_input').val();
    var page = num;

    $.ajax({
        type: "GET",
        url: domain + 'notice/search/title/' + searchWord + '?page=' + page,
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                if(i == 1){
                    $('#noticeSearchPagination').html('<li class="page-item"><a class="page-link" id="noticePage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                }else{
                    $('#noticeSearchPagination').append('<li class="page-item"><a class="page-link" id="noticePage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                }
            }
        }
    })
}

function searchApi(num){
    var searchWord = $('#notice_search_input').val();
    var page = num;

    for(var i = 0; i < 10; i++){
        $('#notice_link' + i).removeAttr('style');
    }
    getSearchNoticePageNum(1);

    $.ajax({
        type: "GET",
        url: domain + 'notice/search/title/' + searchWord + '?page=' + page,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 0;
            var pageNum = totalPage - 10*(num-1);

            if(pageNum > 10){ 
                for(startNum; startNum < 10; startNum++){
                    $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#notice_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['noticeNo']));
                }
            } else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#notice_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['noticeNo']));
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#notice_link'+ pageNum).css('display', 'none');
                }
            }
        }
    })
}


