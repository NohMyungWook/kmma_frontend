var domain = "https://kmma.io/kmma/";
var dataNum = sessionStorage.getItem('dataNum');

function getDataPost(){
    $.ajax({
        type: "GET",
        url: domain + 'filedetail/' + dataNum,
        contentType: 'application/json',
        success: function(data){
            var length = data.fileName.length;
            console.log(length);
            console.log(data.fileName[0]);
            console.log(data.fileName[1]);
            for(var i = 0; i < length; i++){
                if(i !== 0){
                    $('.data_file').append('<br>');
                }
                $('.data_file').append(data.fileName[i].substr(18));
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

$(document).ready(function(){
    getDataPost();
})