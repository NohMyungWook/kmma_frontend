var domain = "https://kmma.io/kmma/";

function editMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/JSON',
        success: function(data){
            $('#editPage_id').html(data.id);
            $('#editPage_pw').value(data.pw);
            $('#editPage_pw_check').value(data.pw);
            $('#editPage_email').value(data.email)
            $('#editPage_tel').value(data.phone);
            $('#editPage_department').value(data.department);
            $('#editPage_address').value(data.address);
            $('#editPage_detail_address').value(data.address_detail);
            var companyYn = data.companyYn;
            $('#' + companyYn).prop('checked', true);
        }
    })
}

$(document).ready(function(){
    editMyInfo();
})