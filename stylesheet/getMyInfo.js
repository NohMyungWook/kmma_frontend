var domain = "https://kmma.io/kmma/";

function getMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/json',
        success: function(data){
            $('.mypage_email').html(data.email);
            $('.mypage_phone').html(data.phone);

            if(data.department == null){
                $('.mypage_department').html("미입력");
            }else{
                $('.mypage_department').html(data.department);
            }

            if(data.address == null && data.address_detail == null){
                $('.mypage_address').html("미입력");
            }

            if(data.address != null){
                $('.mypage_address').html(data.address + ' ');
            }
            
            if(data.address_detail != null){
                $('.mypage_address').html(data.address_detail);
            }

            if(data.companyYn == null){
                $('.mypage_companyYn').html("미입력");
            }else if(data.companyYn == 'Y'){
                $('.mypage_companyYn').html('Yes');
            }else if(data.companyYn == 'N'){
                $('.mypage_companyYn').html('No');
            }
            
        }
    })
}

$(document).ready(function(){
    getMyInfo();
})

