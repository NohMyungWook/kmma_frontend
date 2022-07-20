var domain = "https://kmma.io/kmma/";

function signUp(){
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
    
    /* 데이터 전송 */
    $.ajax({
        type: "POST",
        url: domain + "signup",
        contentType : "application/json",
        data: JSON.stringify({
            "id" : signup_id,
            "pw" : signup_pw,
            "email" : signup_email,
            "phone" : signup_tel,
            "department" : signup_along,
            "address" : signup_address + " " + signup_detail_address,
            "companyYn" : signup_enterprise
        }),
        success: function(data){
            window.location.href="login.html";
        },
        error: function(request, status, error){
            
        }
    })
}


function logout(){
    //로그아웃
    $.ajax({
        type: "GET",
        url: domain + "logout",
        contentType : "application/json",
        success: function(data){
            sessionStorage.clear();
            location.href="index.html";
        },
    })
}


function editMyPageComplete(){
    var edit_id = $('#editPage_id').text();
    var edit_email = $('#editPage_email').val();
    var edit_tel = $('#editPage_tel').val();
    var edit_department, edit_address, edit_detail_address, edit_enterprise;
    
    if($('#editPage_department').val() == ''){
        edit_department = null;
    }else{
        edit_department = $('#editPage_department').val();
    }

    if($('#editPage_address').val() == ''){
        edit_address = null;
    }else{
        edit_address = $('#editPage_address').val();
    }
    
    if($('#editPage_detail_address').val() == ''){
        edit_detail_address = null;
    }else{
        edit_detail_address = $('#editPage_detail_address').val();
    }
    
    if($("input[name=exampleRadio]:checked").val() == undefined){
        edit_enterprise = null;
    }else{
        edit_enterprise = $("input[name=exampleRadio]:checked").val();
    }

    $.ajax({
        type: 'PUT',
        url: domain + 'user',
        contentType: 'application/json',
        data: JSON.stringify({
            "id" : edit_id,
            "email" : edit_email,
            "phone" : edit_tel,
            "department" : edit_department,
            "address" : edit_address,
            "address_detail": edit_detail_address,
            "companyYn" : edit_enterprise
        }),
        success: function(data){
            logout();
            window.location.href="login.html"
        }

    });
}

$(document).ready(function(){

    /*로그인 정보*/
    $('#login_main_bt').click(function(){
        var login_id = $('#login_id').val();
        var login_pw = $('#login_pw').val();
        $.ajax({
            type: "POST",
            url: domain + "login",
            contentType : "application/json",
            data: JSON.stringify({
                "id" : login_id,
                "pw" : login_pw
            }),
            success: function(data, textStatus, xhr){ 
                sessionStorage.setItem('loginId', login_id);
                window.location.href="index.html"; 
            },
            error: function(request, status, error){
                $('.login_main_warning').html('일치하는 정보가 없습니다.');
                $('.login_main_id input').css('border', '1.5px solid red');
                $('.login_main_pw input').css('border', '1.5px solid red');
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
    
        // $.ajax({
        //     type: "POST",
        //     url: "",
        //     contentType : "application/json",
        //     data:{
        //         "member_type" : member_type,
        //         "member_name_kor" : member_name_kor,
        //         "member_name_eng" : member_name_eng,
        //         "member_birth" : member_birth, 
        //         "member_email" : member_email,
        //         "member_telnum" : member_telnum,
        //         "member_phonenum" : member_phonenum, 
        //         "member_house_address" : member_house_address + member_house_detail_address,
        //         "company_name" : company_name,
        //         "business_number" : business_number,
        //         "member_rank" : member_rank,
        //         "member_company_address" : member_company_address + member_company_detail_address,
        //         "member_main_career" : member_main_career
        //     },
        //     success: function(data, textStatus, xhr){
        //         console.log("회원등록 정보 전송 완료");
        //     },
        //     error: function(request, status, error){
        //         console.log("회원등록 정보 전송 실패");
        //         console.log(member_type);
        //     }
        // })
    });

    // /*ID 중복 검사 */
    $('#signup_check_bt').click(function(){
        var idValid = new RegExp(/^[0-9|a-z|A-Z]{4,15}$/);
        var signup_id = $('#signup_id').val();
        $('#signup_id').css('border', '1.5px solid black');
        $('#signup_id_inform').html('');
        if (!(idValid.test(signup_id))){
            $('#signup_id').css('border', '1.5px solid red');
            $('#signup_id_inform').html('아이디를 다시 입력하세요');
        } else{
            $('#signup_id').css('border', '1px solid black');
            $('#signup_id_inform').html('');

            /* 아이디 중복 검사 */
            $.ajax({
                type: "GET",
                url: domain + "validation/" + signup_id,
                success: function(data, textStatus, xhr){
                    document.getElementById('signup_id').disabled = true;
                    document.getElementById('signup_check_bt').disabled = true;
                },
                error: function(request, status, error){
                    $('#signup_id').css('border', '1.5px solid red');
                    $('#signup_id_inform').html('이미 사용중인 아이디입니다.');
                }
            })  
        }
        
    })

    /*정규식*/
    $('#signup_sub_bt').click(function(){
        var signup_id = $('#signup_id').val();
        var signup_pw = $('#signup_pw').val();
        var signup_pw_check = $('#signup_pw_check').val();
        var signup_email = $('#signup_email').val();
        var signup_tel = $('#signup_tel').val();
        var pwValid = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/);
        var emailValid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
        var phoneValid = new RegExp(/^\d{2,3}[-]\d{3,4}[-]\d{4}$/);

        if(!$("#signup_id").is(":disabled")){
            $('#signup_id').css('border', '1.5px solid red');
            $('#signup_id_inform').html('중복확인을 해주세요');
        }else{
            if(!(pwValid.test(signup_pw))){
                $('#signup_pw').css('border', '1.5px solid red');
                $('#signup_pw_inform').html('비밀번호를 다시입력하세요');
                return;
            } else{
                if(signup_pw != signup_pw_check){
                    $('#signup_pw').css('border', '1px solid black');
                    $('#signup_pw_check').css('border', '1px solid black');
                    $('#signup_pw_inform').html('');
                    $('#signup_check_pw_inform').html('');
                    $('#signup_pw_check').css('border', '1.5px solid red');
                    $('#signup_check_pw_inform').html('비밀번호가 일치하지 않습니다');
                    return;
                }
                else{
                    $('#signup_pw').css('border', '1px solid black');
                    $('#signup_pw_check').css('border', '1px solid black');
                    $('#signup_pw_inform').html('');
                    $('#signup_check_pw_inform').html('');
                }
            }
            
            if(!(emailValid.test(signup_email))){
                $('#signup_email').css('border', '1.5px solid red');
                $('#signup_email_inform').html('이메일을 다시입력하세요');
                return;
            } else{
                $('#signup_email').css('border', '1px solid black');
                $('#signup_email_inform').html('');
            }

            if(!(phoneValid.test(signup_tel))){
                $('#signup_tel').css('border', '1.5px solid red');
                $('#signup_tel_inform').html('전화번호를 다시입력하세요');
                return;
            } else{
                $('#signup_tel').css('border', '1px solid black');
                $('#signup_tel_inform').html('');
            }
        }
        if(pwValid.test(signup_pw) && emailValid.test(signup_email) && phoneValid.test(signup_tel)){
            signUp();
        }
    });


    //마이페이지 수정 정보 보내기
    $('#edit_complete_bt').click(function(){
        var edit_email = $('#editPage_email').val();
        var edit_tel = $('#editPage_tel').val();
        var emailValid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
        var phoneValid = new RegExp(/^\d{2,3}[-]\d{3,4}[-]\d{4}$/);

            
        if(!(phoneValid.test(edit_tel))){
            $('#editPage_tel').css('border', '1.5px solid red');
            $('#editPage_tel_inform').html('전화번호를 다시입력하세요');
            return;
        } else{
            $('#editPage_tel').css('border', '1px solid black');
            $('#editPage_tel_inform').html('');
        }
        
        if(!(emailValid.test(edit_email))){
            $('#editPage_email').css('border', '1.5px solid red');
            $('#editPage_email_inform').html('이메일을 다시입력하세요');
            return;
        } else{
            $('#editPage_email').css('border', '1px solid black');
            $('#editPage_email_inform').html('');
        }
    
        if(emailValid.test(edit_email) && phoneValid.test(edit_tel)){
            editMyPageComplete();
        }
    });

});
