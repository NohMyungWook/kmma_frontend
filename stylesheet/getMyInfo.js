var domain = "https://kmma.io/kmma/";

function getMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/JSON',
        success: function(data){
            $('.mypage_email').html('이메일 : ' + data.email);
            $('.mypage_phone').html('전화번호 : ' + data.phone);
            $('.mypage_department').html('소속 : ' + data.department);
            $('.mypage_address').html('주소 : ' + data.address + ' ' + data.address_detail);
            $('.mypage_companyYn').html('기업 여부: ' + data.companyYn);
        }
    })
}

$(document).ready(function(){
    getMyInfo();
})