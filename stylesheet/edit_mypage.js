//서버에서 전해주는 데이터가 이거라면?
var data = {
    "id" : "rinlee2001",
    "pw" : "hyerin119@@",
    "email" : "rinlee2001@naver.com",
    "phone" : "010-7561-0561",
    "department" : "상명대학교",
    "address" : "경기도 안양시 만안구 문예로 27 우양파크빌 302호",
    "companyYn" : "Y"
}


// $('.mypage_email').html('이메일: ' + loginEmail);
        // $('.mypage_phone').html('전화번호: ' + loginPhone);
        // $('.mypage_department').html('소속: ' + loginDepartment);
        // $('.mypage_address').html('주소: ' + loginAddress);
        // $('.mypage_companyYn').html('기업여부: ' + loginCompanyYn);


//해당 데이터에서 원하는 것만 가져와서 보여준다.. 근데 이걸 ajax론 어케 접근해?
$(document).ready(function(){
    $('.mypage_email').html('이메일 : ' + data.email);
    $('.mypage_phone').html('전화번호 : ' + data.phone);
    $('.mypage_department').html('소속 : ' + data.department);
    $('.mypage_address').html('주소 : ' + data.address);
    $('.mypage_companyYn').html('기업 여부: ' + data.companyYn);
})