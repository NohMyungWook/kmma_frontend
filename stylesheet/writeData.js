var domain = "https://kmma.io/kmma/";
var formId = 2;

$(document).ready(function(){
    postUser();
})
function addUpload(){
    var className = $('#uploadForm').attr('class');
    $('#uploadForm').attr('class', parseInt(className) + 1);
    if (formId > 5){
        alert('파일은 최대 5개까지만 첨부 가능합니다.');
    }else{
        formId++;
        $('#uploadForm').append('<div id="formFile'+formId+'"style="width: 70%; display: flex; flex-direction: row; justify-content: space-between;"><input type="file" name="file" class="formFile" style="width: 90%;background-color: white;border: 1px solid black;padding: 7px 12px;border-radius: 8px;"><button type="button" onclick="deleteInput('+formId+')" class="btn btn-outline-dark" style="width: 12%; margin-top: 10px; height: 50px; margin-left: 5px;">X</button></div>');
    }
}

function deleteInput(deleteFormId){
    $("#formFile"+deleteFormId).remove();
    formId--;
}

function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}
function submitFile(){
    let check_post_article = confirm("정말로 등록하시겠습니까?");
    if(check_post_article){
        var form = $('#uploadForm')[0];
        var fileTitle = $('.post_data_title').val();

        const formData = new FormData(form);
        $.ajax({
            type: "POST",
            url: domain + 'file/' + fileTitle,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                window.location.href='loadingData.html';
            },
            complete: function(data){
            }
        })
    }
    else    return;
}