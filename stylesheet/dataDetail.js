var domain = "https://kmma.io/kmma/";
var dataNum = sessionStorage.getItem('dataNum');

function getDataPost(){
    $.ajax({
        type: "GET",
        url: domain + 'filedetail/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            var length = data.fileName.length;
            for(var i = 0; i < length; i++){
                var split = data.fileName[i].split(' :', 1);
                if(i !== 0){
                    $('.data_file').append('<br>');
                }
                $('.data_file').append('<a id="' + split + '" onclick="location.href=\''+ domain + 'file/' + split + '\'">'  + data.fileName[i].substr(18) + '</div>');
            }
            $('#data_details_title').html(data.title);
            $('.data_content').html(data.content);
            $('.data_upload_time').html(data.regdate);
        }
    })
}

function deleteData(){
    $.ajax({
        type: "DELETE",
        url: domain + 'file/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            window.location.href='data.html';
        }
    })
}

function moveBefore(){
    var beforeNo = $('.before_post_link').attr('id');
    sessionStorage.setItem('dataNum', beforeNo);
    location.href = "dataDetail.html";
}

function moveNext(){
    var nextNo = $('.next_post_link').attr('id');
    sessionStorage.setItem('dataNum', nextNo);
    location.href = "dataDetail.html";
}

$(document).ready(function(){
    getDataPost();
})