var domain = "https://kmma.io/kmma/";

function editMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/JSON',
        success: function(data){
            $('#editPage_id').html(data.id);
            $('#editPage_email').attr('value', data.email);
            $('#editPage_tel').attr('value',data.phone);
            $('#editPage_department').attr('value',data.department);
            $('#editPage_address').attr('value',data.address);
            $('#editPage_detail_address').attr('value',data.address_detail);
            var companyYn = data.companyYn;
            $('#' + companyYn + '-check').prop('checked', true);
        }
    })
}

$(document).ready(function(){
    editMyInfo();
})

