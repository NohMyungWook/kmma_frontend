function getSearchArticlePageNum(num){
    $('#pageNav2').css('display', 'block');
    $('#pageNav1').css('display', 'none');
    var searchWord = $('#article_search_input').val();
    var searchKeyWord = $('.news_search_select[name=article_keyword] option:selected').text();
    var page = num;
    if(searchKeyWord == '제목'){
        if(searchWord != ''){
            $.ajax({
                type: "GET",
                url: domain + 'article/search/title/' + searchWord + '?page=' + page,
                contentType: 'application/json',
                success: function(data){
                    var pageNum = data.totalPages + 1;
                    for(var i = 1; i < pageNum; i++){
                        if(i == 1){
                            $('#articleSearchPagination').html('<li class="page-item"><a class="page-link" id="articleSearchPage' + i + '" onclick="searchArticleApi(' + i + ')">' + i + '</a></li>');
                        }else{
                            $('#articleSearchPagination').append('<li class="page-item"><a class="page-link" id="articleSearchPage' + i + '" onclick="searchArticleApi(' + i + ')">' + i + '</a></li>');
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
                url: domain + 'article/search/content/' + searchWord + '?page=' + page,
                contentType: 'application/json',
                success: function(data){
                    var pageNum = data.totalPages + 1;
                    for(var i = 1; i < pageNum; i++){
                        if(i == 1){
                            $('#articleSearchPagination').html('<li class="page-item"><a class="page-link" id="articleSearchPage' + i + '" onclick="searchArticleApi(' + i + ')">' + i + '</a></li>');
                        }else{
                            $('#articleSearchPagination').append('<li class="page-item"><a class="page-link" id="articleSearchPage' + i + '" onclick="searchArticleApi(' + i + ')">' + i + '</a></li>');
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


function searchArticleApi(num){
    window.scrollTo(0,0);
    var searchWord = $('#article_search_input').val();
    var searchKeyWord = $('.news_search_select[name=article_keyword] option:selected').text();
    var page = num;

    for(var i = 0; i < 5; i++){
        $('#article_link' + i).removeAttr('style');
    }
    getSearchArticlePageNum(num);

    if(searchKeyWord == '제목'){
        $.ajax({
            type: "GET",
            url: domain + 'article/search/title/' + searchWord + '?page=' + page,
            contentType: 'application/json',
            success: function(data){
                $('#articleSearchPage' + num).css('background-color', 'rgb(214, 214, 214)');
                var totalPage = data.totalElements;
                var startNum = 0;
                var pageNum = totalPage - 5*(num-1);
    
                if(pageNum > 5){ 
                    for(startNum; startNum < 5; startNum++){
                        $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                        $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                        $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                    }
                } else{
                    for(startNum; startNum < pageNum; startNum++){
                        $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                        $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                        $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                    }
    
                    for(pageNum; pageNum < 10; pageNum++){
                        $('#article_link'+ pageNum).css('display', 'none');
                    }
                }
            }
        })
    }

    if(searchKeyWord == '내용'){
        $.ajax({
            type: "GET",
            url: domain + 'article/search/content/' + searchWord + '?page=' + page,
            contentType: 'application/json',
            success: function(data){
                $('#articleSearchPage' + num).css('background-color', 'rgb(214, 214, 214)');
                var totalPage = data.totalElements;
                var startNum = 0;
                var pageNum = totalPage - 5*(num-1);
    
                if(pageNum > 5){ 
                    for(startNum; startNum < 5; startNum++){
                        $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                        $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                        $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                    }
                } else{
                    for(startNum; startNum < pageNum; startNum++){
                        $('#news_list_title' + startNum).html(data.content[startNum]['title']);
                        $('#news_list_time' + startNum).html(data.content[startNum]['regdate']);
                        $('#news_list_content' + startNum).html(data.content[startNum]['content']);
                        $('#article_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['articleNo']));
                    }
    
                    for(pageNum; pageNum < 10; pageNum++){
                        $('#article_link'+ pageNum).css('display', 'none');
                    }
                }
            }
        })
    }
}
