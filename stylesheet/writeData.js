function addUpload(){
    $('.upload_file').append('<form><input type="file" name="file" style="background-color: white;border: 1px solid black;padding: 7px 12px;border-radius: 8px;"></form>');
}

function uploadFile(){
    
        var form = $('#uploadForm')[0];
        var formData = new FormData(form);
     
        $.ajax({
            url : '/url',
            type : 'POST',
            data : formData,
            contentType : false,
            processData : false        
        }).done(function(data){
            callback(data);
        });
    }
    