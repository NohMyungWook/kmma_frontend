var domain = "https://kmma.io/kmma/";

function getDataList(){
    $.ajax({
        type: "GET",
        url: domain + 'filelist?page',
        contentType: 'application/json',
        success: function(data){
            var total = data.totalElements;
            for(var i = 0; i < total; i++){
                $('#data_list_title' + i).html(data.content[i].title);
                $('#data_list_time' + i).html(data.content[i].regdate);
                $('#data_link' + i + ' div:nth-child(3)').attr('id', data.content[i].fileDetailNo);
            }
            for(var j = total; j < 10; j++){
                $('#data_link' + j).css('display', 'none');
            }
        }
    })
}

function getDataNum(num){
    $.ajax({
        type: "GET",
        url: domain + "filelist?page=" + num,
        contentType: 'application/json',
        success: function(data){
            var pageNum = data.totalPages + 1;
            for(var i = 1; i < pageNum; i++){
                $('#dataPagination').append('<li class="page-item"><a class="page-link" id="dataPage' + i + '" onclick="getData(' + i + ')">' + i + '</a></li>');
            }
        }
    })
}

function clickData(num){
    var dataNum = $('#data_link' + num + ' div:nth-child(3)').attr('id');
    sessionStorage.setItem('dataNum', dataNum);
    location.href="dataDetail.html";
}


$(document).ready(function(){
    getDataList();
    getDataNum(1);
})

// {
//     "content":[
//     {"fileNo": 1004, "title": "test", "link": "https://s3.ap-northeast-2.amazonaws.com/kmma.io/file/1659063643897test.txt",…},
//     {"fileNo": 9, "title": "fffd", "link": "https://s3.ap-northeast-2.amazonaws.com/kmma.io/file/1659062618099cors.txt",…}
//     ],
//     "pageable":{
//     "sort":{
//     "empty": true,
//     "sorted": false,
//     "unsorted": true
//     },
//     "offset": 0,
//     "pageNumber": 0,
//     "pageSize": 10,
//     "paged": true,
//     "unpaged": false
//     },
//     "totalPages": 1,
//     "totalElements": 2,
//     "last": true,
//     "size": 10,
//     "number": 0,
//     "sort":{
//     "empty": true,
//     "sorted": false,
//     "unsorted": true
//     },
//     "numberOfElements": 2,
//     "first": true,
//     "empty": false
//     }