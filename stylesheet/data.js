var domain = "https://kmma.io/kmma/";

function getDataList(num){
    window.scrollTo(0,0);
    for(var i = 0; i < 10; i++){
        $('#data_link' + i).removeAttr('style');
    }
    $('#dataPagination a').css('background-color', 'white');
    $('#dataPage' + num).css('background-color', 'rgb(214, 214, 214)');
    $.ajax({
        type: "GET",
        url: domain + 'filelist?page='+num,
        contentType: 'application/json',
        success: function(data){
            var totalPage = data.totalElements;
            var startNum = 0;
            var pageNum = totalPage - 10*(num-1);

            if(pageNum > 10){
                for(startNum; startNum < 10; startNum++){
                    $('#data_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#data_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#data_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['fileDetailNo']));
                }
            }else{
                for(startNum; startNum < pageNum; startNum++){
                    $('#data_list_title' + startNum).html(data.content[startNum]['title']);
                    $('#data_list_time' + startNum).html(data.content[startNum]['regdate']);
                    $('#data_link' + startNum +' div:nth-child(3)').attr("id", (data.content[startNum]['fileDetailNo']));
                }
                for(pageNum; pageNum < 10; pageNum++){
                    $('#data_link'+ pageNum).css('display', 'none');
                }
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
