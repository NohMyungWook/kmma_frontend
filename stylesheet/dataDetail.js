var domain = "https://kmma.io/kmma/";
var dataNum = sessionStorage.getItem('dataNum');

function getDataPost(){
    $.ajax({
        type: "GET",
        url: domain + 'filedetail/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            $('#data_details_title').html(data.fileNo);
            $('.data_file').html(data.fileName);
            $('.data_content').html(data);
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

$(document).ready(function(){
    alert(dataNum);
    getDataPost();
})