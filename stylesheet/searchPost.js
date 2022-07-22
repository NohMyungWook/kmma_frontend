var domain = "https://kmma.io/kmma/";


function searchNotice(num){
    var searchWord = $('#notice_search_input').val();
    window.location.href="noticeSearch.html";
    searchApi(num, searchWord);

}

function searchApi(num, searchWord){
    alert(searchWord);

    for(var i = 0; i < 10; i++){
        $('#search_notice_link' + i).removeAttr('style');
    }

    $.ajax({
        type: "GET",
        url: domain + 'notice/search/title/' + searchWord + '?page=' + num,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 0;
            var pageNum = totalPage - 10*(num-1);

            if(pageNum > 10){ 
                for(startNum; startNum < 10; startNum++){
                    $('#search_notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#search_notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                }
            } else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#search_notice_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#search_notice_list_time' + startNum).html(data.content[startNum]['regdate']);
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#search_notice_link'+ pageNum).css('display', 'none');
                }
            }
        }
    })
}