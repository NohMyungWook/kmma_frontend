var domain = "https://kmma.io/kmma/";

function getMyInfo(){
    $.ajax({
        type: 'GET',
        url: domain + "myinfo",
        contentType: 'application/json',
        success: function(data){
            $('.mypage_email').html(data.email);
            $('.mypage_phone').html(data.phone);

            var myDepartment, myAddress, myAddressDetail, myCompany;
            if(data.dapartment == null){
                myDepartment == "미입력";
            }else{
                myDepartment == data.department;
            }

            if(data.address == null){
                myAddress == "미입력";
            } else{
                myAddress == data.address;
            }

            if(data.address_detail == null){
                myAddressDetail == "미입력";
            }else{
                myAddressDetail == data.address_detail;
            }

            if(data.companyYn == null){
                myCompany == "미입력";
            }else{
                myCompany == data.companyYn;
            }
            
            $('.mypage_department').html(myDepartment);
            $('.mypage_address').html(myAddress + ' ' + myAddressDetail);
            $('.mypage_companyYn').html(myCompany);
        }
    })
}

$(document).ready(function(){
    getMyInfo();
})

