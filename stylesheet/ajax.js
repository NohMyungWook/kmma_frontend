$(document).ready(function(){

    /*로그인 정보*/
    $('#login_main_bt').click(function(){
        var domain = "http://kmma.io";
        var login_id = $('#login_id').val();
        var login_pw = $('#login_pw').val();
        $.ajax({
            type: "POST",
            url: domain + "/kmma/login",
            data: JSON.stringify({
                "id" : login_id,
                "pw" : login_pw
            }),
            contentType : "application/JSON",
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
        var domain = "http://kmma.io";
        var signup_id = $('#signup_id').val();
        var signup_pw = $('#signup_pw').val();
        var signup_email = $('#signup_email').val();
        var signup_tel = $('#signup_tel').val();
        var signup_along, signup_address, signup_detail_address, signup_enterprise;
       
        if($('#signup_along').val() == ''){
            signup_along = null;
        }else{
            signup_along = $('#signup_along').val();
        }

        if($('#signup_address').val() == ''){
            signup_address = null;
        }else{
            signup_address = $('#signup_address').val();
        }
        
        if($('#signup_detail_address').val() == ''){
            signup_detail_address = null;
        }else{
            signup_detail_address = $('#signup_detail_address').val();
        }
        
        if($("input[name=exampleRadios]:checked").val() == undefined){
            signup_enterprise = null;
        }else{
            signup_enterprise = $("input[name=exampleRadios]:checked").val();
        }
        
        console.log('소속 ' + signup_along);
        console.log('주소 ' + signup_address +',' + signup_detail_address);
        console.log('기업여부 ' + signup_enterprise);
        
        /* 데이터 전송 */
        $.ajax({
            type: "POST",
            // url: domain + "/kmma/signup",
            contentType : "application/json",
            data: JSON.stringify({
                "id" : signup_id,
                "pw" : signup_pw,
                "email" : signup_email,
                "phone" : signup_tel,
                "department" : signup_along,
                "address" : signup_address + " " +signup_detail_address,
                "companyYn" : signup_enterprise
            }),
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
        var domain = "http://kmma.io";
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
            contentType : "application/json",
            data:{
                "member_type" : member_type,
                "member_name_kor" : member_name_kor,
                "member_name_eng" : member_name_eng,
                "member_birth" : member_birth, 
                "member_email" : member_email,
                "member_telnum" : member_telnum,
                "member_phonenum" : member_phonenum, 
                "member_house_address" : member_house_address + member_house_detail_address,
                "company_name" : company_name,
                "business_number" : business_number,
                "member_rank" : member_rank,
                "member_company_address" : member_company_address + member_company_detail_address,
                "member_main_career" : member_main_career
            },
            success: function(data, textStatus, xhr){
                console.log("회원등록 정보 전송 완료");
            },
            error: function(request, status, error){
                console.log("회원등록 정보 전송 실패");
                console.log(member_type);
            }
        })
    });

    // /*ID 중복 검사 */
    $('#signup_check_bt').click(function(){
        var domain = "http://kmma.io/kmma";
        var signup_id = $('#signup_id').val();

        /* 아이디 중복 검사 */
        $.ajax({
            type: "GET",
            url: domain + "/validation/" + signup_id,
            success: function(data, textStatus, xhr){
                document.getElementById('#signup_id').disabled = true;
            },
            error: function(request, status, error){
                $('#signup_id').css('border', '1.5px solid red');
                $('#signup_id_inform').html('아이디를 다시입력하세요');
            }
        })
    })

    /*정규식*/
    $('#signup_sub_bt').click(function(){
         var signup_id = $('#signup_id').val();
         var signup_pw = $('#signup_pw').val();
         var signup_pw_check = $('#signup_pw_check').val();
         var signup_email = $('#signup_email').val();
         var signup_tel = $('#signup_tel').val();
         var idValid = new RegExp(/^[0-9|a-z|A-Z]{4,15}$/);
         var pwValid = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/);
         var emailValid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
         var phoneValid = new RegExp(/^\d{2,3}[-]\d{3,4}[-]\d{4}$/);

         if (!(idValid.test(signup_id))){
            $('#signup_id').css('border', '1.5px solid red');
            $('#signup_id_inform').html('아이디를 다시입력하세요');
         } else{
            $('#signup_id').css('border', '1px solid black');
            $('#signup_id_inform').css('display', 'none');
         }
         if(signup_pw != signup_pw_check){
            $('#signup_pw').css('border', '1px solid black');
            $('#signup_pw_check').css('border', '1px solid black');
            $('#signup_pw_inform').html('');
            $('#signup_check_pw_inform').html('');
            $('#signup_pw_check').css('border', '1.5px solid red');
            $('#signup_check_pw_inform').html('비밀번호가 일치하지 않습니다');
         }else{
            if(!(pwValid.test(signup_pw))){
                $('#signup_pw').css('border', '1.5px solid red');
                $('#signup_pw_check').css('border', '1.5px solid red');
                $('#signup_pw_inform').html('비밀번호를 다시입력하세요');
                $('#signup_check_pw_inform').html('비밀번호를 다시입력하세요');
             } else{
                $('#signup_pw').css('border', '1px solid black');
                $('#signup_pw_check').css('border', '1px solid black');
                $('#signup_pw_inform').html('');
                $('#signup_check_pw_inform').html('');
             }
         }
         

         if(!(emailValid.test(signup_email))){
            $('#signup_email').css('border', '1.5px solid red');
            $('#signup_email_inform').html('이메일을 다시입력하세요');
         } else{
            $('#signup_email').css('border', '1px solid black');
            $('#signup_email_inform').css('display', 'none');
         }

         if(!(phoneValid.test(signup_tel))){
            $('#signup_tel').css('border', '1.5px solid red');
            $('#signup_tel_inform').html('전화번호를 다시입력하세요');
         } else{
            $('#signup_tel').css('border', '1px solid black');
            $('#signup_tel_inform').css('display', 'none');
         }
    });
});

