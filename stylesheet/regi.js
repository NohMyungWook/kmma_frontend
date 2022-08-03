var beforeSingText = ""

function moveToRegi(){
    if($("input[name=accept]:checked").attr('id')=="acceptLaw"){
        window.location.href="memberRegistration.html";
    }
    else{
        alert("개인정보 수집 및 이용에 동의해주세요.")
    }
}

function moveToSign(){
    if($("input[name=accept]:checked").attr('id')=="acceptLaw"){
        window.location.href="signup.html";
    }
    else{
        alert("개인정보 수집 및 이용에 동의해주세요.")
    }
}

var domain = "https://kmma.io/kmma/";

function memberSignup(){
    var member_type = $('input[name=flexRadioDefault]:checked').val();
    var member_type_eng;
    var member_name = $('#member_name_kor').val();
    var member_phonenum= $('#member_phonenum').val();
    var member_email = $('#member_email').val();
    var member_company = $('#company_name').val();
    var member_rank = $('#member_rank').val();
    var emailValid = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
    var phoneValid = new RegExp(/^\d{2,3}[-]\d{3,4}[-]\d{4}$/);

    if(member_type == undefined){
        $('#member_type_inform').css('display', 'block');
    }else{
        $('#member_type_inform').css('display', 'none');
        if(member_type == '정회원'){
            member_type_eng = 'regular';
        }
        if(member_type == '준회원'){
            member_type_eng = 'associate';
        }
        if(member_type == '특별회원'){
            member_type_eng = 'special';
        }
        if(member_name == ''){
            $('#member_name_inform').css('display', 'block');
        }else{
            $('#member_name_inform').css('display', 'none');
    
            if(member_company == ''){
                $('#member_company_inform').css('display', 'block');
            }else{
                $('#member_company_inform').css('display', 'none');
                if(member_rank == ''){
                    $('#member_rank_inform').css('display', 'block');
                }else{
                    $('#member_rank_inform').css('display', 'none');if(member_phonenum == ''){
                        $('#member_tel_inform').html('전화번호를 입력해주세요');
                    }else{
                        if(!(phoneValid.test(member_phonenum))){
                            $('#member_phonenum').css('border', '1.5px solid red');
                            $('#member_tel_inform').html('전화번호를 다시입력하세요');
                            return;
                        } else{
                            $('#member_phonenum').css('border', '1px solid black');
                            $('#member_tel_inform').html('');if(member_email == ''){
                                $('#member_email_inform').html('이메일을 입력해주세요');
                            }else{
                                if(!(emailValid.test(member_email))){
                                    $('#member_email').css('border', '1.5px solid red');
                                    $('#member_email_inform').html('이메일을 다시입력하세요');
                                    return;
                                } else{
                                    $('#member_email').css('border', '1px solid black');
                                    $('#member_email_inform').html('');
                                    /* 데이터 전송 */
                                    $.ajax({
                                        type: "POST",
                                        url: domain + "member",
                                        contentType : "application/json",
                                        data: JSON.stringify({
                                            'member' : member_type_eng,
                                            'name' : member_name,
                                            'phone' : member_phonenum,
                                            'email' : member_email,
                                            'company' : member_company,
                                            'position' : member_rank
                                        }),
                                        success: function(data){
                                            alert('등록 신청이 완료되었습니다');
                                            window.location.href='index.html';
                                        },
                                        error: function(request, status, error){
                                            
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    
}