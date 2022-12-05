var domain = "https://kmma.io/kmma/";

function getDataList(num){
    $.ajax({
        type: "GET",
        url: domain + 'filelist?page='+num,
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

function loginCheck(){
    // 세션 검증
    $.ajax({
        type: "GET",
        url: domain + "validation/session/" + sessionStorage.getItem('loginId'),
        contentType : "application/json",
        success: function(data){
        },
        error: function(data){
            window.location.href="index.html";
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
                $('#dataPagination').append('<li class="page-item"><a class="page-link" id="dataPage' + i + '" onclick="getDataList(' + i + ')">' + i + '</a></li>');
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
    loginCheck();
    getDataList(1);
    getDataNum(1);
})
