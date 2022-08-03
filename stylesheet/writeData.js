var domain = "https://kmma.io/kmma/";

function addUpload(){
    alert($('#uploadForm').attr('class');
    $('#uploadForm').append('<div style="width: 70%; display: flex; flex-direction: row; justify-content: space-between;"><input type="file" name="file" id="formFile" style="width: 90%;background-color: white;border: 1px solid black;padding: 7px 12px;border-radius: 8px;"><button type="button" class="btn btn-outline-dark" style="width: 8%; margin-top: 10px; height: 50px; margin-left: 0;">X</button></div>');
}

function deleteInput(){
    $(this).closest('.grand-parent-class-name').remove();
}

function submitFile(){
    var form = $('#uploadForm')[0];
    var fileTitle = $('.post_data_title').val();

    console.log(form);
    const formData = new FormData(form);
    $.ajax({
        type: "POST",
        url: domain + 'file/' + fileTitle,
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function(data){
            window.location.href='data.html';
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
    