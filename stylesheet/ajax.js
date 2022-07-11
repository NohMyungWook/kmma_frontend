$(document).ready(function(){
    /*로그인 정보*/
    $('#login_main_bt').click(function(){
        var login_id = $('#login_id').val();
        var login_pw = $('#login_pw').val();
        $.ajax({
            type: "POST",
            url: "",
            data:{
                "login_id" : login_id,
                "login_pw" : login_pw
            },
            dataType : "text",
            success: function(data, textStatus, xhr){
                console.log("아이디: " + login_id + ", 비밀번호: " + login_pw);
                if (data == 'loginFail'){
                    alert("아이디와 비밀번호를 다시 입력하세요");
                } 
            },
            error: function(request, status, error){
                console.log("아이디: " + login_id + ", 비밀번호: " + login_pw);
                alert("데이터 전송 실패!");
            },
            complete: function(){
                console.log("어쨋든 전송이 되긴 함..");
            }
        })
    });
    
    /*회원가입 정보*/
    $('#signup_sub_bt').click(function(){
        var signup_id = $('#signup_id').val();
        var signup_pw = $('#signup_pw').val();
        var signup_pw_check = $('#signup_pw_check').val();
        var signup_email = $('#signup_email').val();
        var signup_tel = $('#signup_tel').val();
        var signup_along = $('#signup_along').val();
        var signup_address = $('#signup_address').val();
        var signup_detail_address = $('#signup_detail_address').val();
        var signup_enterprise  = $("input[name=exampleRadios]:checked").val();
    
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/kmma/signup",
            data: JSON.stringify({
                "id" : signup_id,
                "pw" : signup_pw,
                "signup_pw_check" : signup_pw_check,
                "email" : signup_email,
                "phone" : signup_tel,
                "department" : signup_along,
                "address" : signup_address + " " +signup_detail_address,
                "companyYn" : signup_enterprise
            }),
            contentType : "application/json",
            success: function(data, textStatus, xhr){
                console.log("회원가입 정보 전송 완료");
            },
            error: function(request, status, error){
                console.log("회원가입 정보 전송 실패");
            }
        })
    });
    
    /*회원등록 정보*/
    $('#registration_bt').click(function(){
        var member_type  = $("input[name=flexRadioDefault]:checked").val();
        var member_name_kor = $('#member_name_kor').val();
        var member_name_eng = $('#member_name_eng').val();
        var member_birth = $('#member_birth').val();
        var member_email = $('#member_email').val();
        var member_telnum = $('#member_telnum').val();
        var member_phonenum = $('#member_phonenum').val();
        var member_house_address = $('#member_house_address').val();
        var member_house_detail_address = $('#member_house_detail_address').val();
        var company_name = $('#company_name').val();
        var business_number = $('#business_number').val();
        var member_rank = $('#business_number').val();
        var member_company_address = $('#member_company_address').val();
        var member_company_detail_address = $('#member_company_detail_address').val();
        var member_main_career = $('#member_main_career').val();
    
        $.ajax({
            type: "POST",
            url: "",
            data:{
                "member_type" : member_type,
                "member_name_kor" : member_name_kor,
                "member_name_eng" : member_name_eng,
                "member_birth" : member_birth, 
                "member_email" : member_email,
                "member_phonenum" : member_phonenum, 
                "member_house_address" : member_house_address + member_house_detail_address,
                "company_name" : company_name,
                "business_number" : business_number,
                "member_rank" : member_rank,
                "member_company_address" : member_company_address + member_company_detail_address,
                "member_main_career" : member_main_career
            },
            dataType : "application/json",
            success: function(data, textStatus, xhr){
                console.log("회원등록 정보 전송 완료");
            },
            error: function(request, status, error){
                console.log("회원등록 정보 전송 실패");
                console.log(member_type);
            },
            complete: function(){
                console.log("어쨋든ㅋㅋ 전송이 되긴 함..");
            }
        })
    });
    
    
});
