var domain = "https://kmma.io/kmma/";

function editMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/json',
        success: function(data){
            $('#editPage_id').html(data.id);
            $('#editPage_email').attr('value', data.email);
            $('#editPage_tel').attr('value',data.phone);
            $('#editPage_department').attr('value',data.department);
            $('#editPage_address').attr('value',data.address);
            $('#editPage_detail_address').attr('value',data.address_detail);
            var companyYn = data.companyYn;
            if(companyYn == 'Y'){
                $("input:radio[name='exampleRadio']:radio[value='Y']").prop('checked', true); 
            } else if(companyYn == 'N') {
                $("input:radio[name='exampleRadio']:radio[value='N']").prop('checked', true); 
            } else{
                $("input:radio[name='exampleRadio']:radio[value='N']").prop('checked', false);
                $("input:radio[name='exampleRadio']:radio[value='Y']").prop('checked', false);  
            }
        }
    })
}
$(document).ready(function(){
    editMyInfo();
})

