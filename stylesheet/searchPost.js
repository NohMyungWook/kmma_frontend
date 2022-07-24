// var domain = "https://kmma.io/kmma/";


// function searchNotice(num){
//     var searchWord = $('#notice_search_input').val();
//     searchApi(num, searchWord);

// }


function getSearchNoticePageNum(num){
    $('#pageNav2').css('display', 'block');
    $('#pageNav1').css('display', 'none');
    var searchWord = $('#notice_search_input').val();
    var searchKeyWord = $('.notice_search_select[name=notice_keyword] option:selected').text();
    var page = num;

    if(searchKeyWord == '제목'){
        if(searchWord != ''){
            $.ajax({
                type: "GET",
                url: domain + 'notice/search/title/' + searchWord + '?page=' + page,
                contentType: 'application/json',
                success: function(data){
                  var pageNum = data.totalPages + 1;
                    for(var i = 1; i < pageNum; i++){
                        if(i == 1){
                            $('#noticeSearchPagination').html('<li class="page-item"><a class="page-link" id="noticeSearchPage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                        }else{
                            $('#noticeSearchPagination').append('<li class="page-item"><a class="page-link" id="noticeSearchPage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                        }
                    }
                }
            })
        }else{
            alert('검색어를 입력하세요');
            window.location.reload();
        }
    }

    if(searchKeyWord == '내용'){
        if(searchWord != ''){
            $.ajax({
                type: "GET",
                url: domain + 'notice/search/content/' + searchWord + '?page=' + page,
                contentType: 'application/json',
                success: function(data){
                    var pageNum = data.totalPages + 1;
                    for(var i = 1; i < pageNum; i++){
                        if(i == 1){
                            $('#noticeSearchPagination').html('<li class="page-item"><a class="page-link" id="noticeSearchPage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                        }else{
                            $('#noticeSearchPagination').append('<li class="page-item"><a class="page-link" id="noticeSearchPage' + i + '" onclick="searchApi(' + i + ')">' + i + '</a></li>');
                        }
                    }
                }
            })
        }else{
            alert('검색어를 입력하세요');
            window.location.reload();
        }
    }
}



function searchApi(num){
    window.scrollTo(0,0);
    var searchWord = $('#notice_search_input').val(); 
    var searchKeyWord = $('.notice_search_select[name=notice_keyword] option:selected').text();
    var page = num;

    for(var i = 0; i < 10; i++){
        $('#notice_link' + i).removeAttr('style');
    }
    getSearchNoticePageNum(num);
    if(searchKeyWord == "제목"){
        $.ajax({
            type: "GET",
            url: domain + 'notice/search/title/' + searchWord + '?page=' + page,
            contentType: 'application/json',
            success: function(data){  
                $('#noticeSearchPage' + num).css('background-color', 'rgb(214, 214, 214)');
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

    if(searchKeyWord == '내용'){
        $.ajax({
            type: "GET",
            url: domain + 'notice/search/content/' + searchWord + '?page=' + page,
            contentType: 'application/json',
            success: function(data){  
                $('#noticeSearchPage' + num).css('background-color', 'rgb(214, 214, 214)');
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
}
