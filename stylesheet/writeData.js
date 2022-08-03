var domain = "https://kmma.io/kmma/";
var formId = 2;

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

function submitFile(){
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


// function upload() {
//     const imageInput = $("#imageInput")[0];
//     // 파일을 여러개 선택할 수 있으므로 files 라는 객체에 담긴다.
//     console.log("imageInput: ", imageInput.files)
  
//     if(imageInput.files.length === 0){
//       alert("파일은 선택해주세요");
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("image", imageInput.files[0]);
  
  
//     $.ajax({
//       type:"POST",
//       url: "/temp/api/upload/image/v1",
//       processData: false,
//       contentType: false,
//       data: formData,
//       success: function(rtn){
//         const message = rtn.data.values[0];
//         console.log("message: ", message)
//         $("#resultUploadPath").text(message.uploadFilePath)
//       },
//       err: function(err){
//         console.log("err:", err)
//       }
//     })
//   }
    