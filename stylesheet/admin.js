var domain = "https://kmma.io/kmma/";

function approval_btn(approval_mem){
    $.ajax({
        type: 'PUT',
        url: domain + "member/approval/" + approval_mem +"?approval=Y",
        contentType: 'application/json',
        success: function(data){
            location.reload();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function cancle_btn(cancle_mem){
    $.ajax({
        type: 'PUT',
        url: domain + "member/approval/" + cancle_mem +"?approval=N",
        contentType: 'application/json',
        success: function(data){
            location.reload();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function delete_btn(delete_mem){
    $.ajax({
        type: 'DELETE',
        url: domain + "member/" + delete_mem,
        contentType: 'application/json',
        success: function(data){
            location.reload();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function pay_btn(pay_mem){
    $.ajax({
        type: 'PUT',
        url: domain + "member/fee/" + pay_mem +"?fee=Y",
        contentType: 'application/json',
        success: function(data){
            location.reload();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function outstanding_btn(outstanding_mem){
    $.ajax({
        type: 'PUT',
        url: domain + "member/fee/" + outstanding_mem +"?fee=N",
        contentType: 'application/json',
        success: function(data){
            location.reload();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function deleteUser_btn(delete_userId){
    $.ajax({
        type: 'DELETE',
        url: domain + "user/" + delete_userId,
        contentType: 'application/json',
        success: function(data){
            getAllUser();
        },
        error: function(data){
            alert("요청에 실패하였습니다.");
        }
    })
}

function getUnapprovedUser(){
    $.ajax({
        type: 'GET',
        url: domain + "member/unapproved",
        contentType: 'application/json',
        success: function(data){
            var member = "";
            for(var i=0; i<data.length; i++){
                if(data[i].memeber == "regular"){
                    member = "정회원";
                }
                else if(data[i].member == "associate"){
                    member = "준회원";
                }
                else{
                    memeber = "특별회원";
                }
                $("#unApprovedList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+member+'</td><td>'+data[i].name+'</td><td>'+data[i].company+'</td><td>'+data[i].position+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td>'+data[i].regdate+'</td><td class="approval_btn"><button onclick="approval_btn('+data[i].memberNo+')">승인하기</button></td><td class="approval_btn"><button onclick="delete_btn('+data[i].memberNo+')">삭제하기</button></td></tr>');
            }
        }
    })
}

function getOutstandingUer(){
    $.ajax({
        type: 'GET',
        url: domain + "member/outstanding",
        contentType: 'application/json',
        success: function(data){
            var member = "";
            for(var i=0; i<data.length; i++){
                if(data[i].memeber == "regular"){
                    member = "정회원";
                }
                else if(data[i].member == "associate"){
                    member = "준회원";
                }
                else{
                    memeber = "특별회원";
                }
                $("#outstandingList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+member+'</td><td>'+data[i].name+'</td><td>'+data[i].company+'</td><td>'+data[i].position+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td class="approval_btn"><button onclick="pay_btn('+data[i].memberNo+')">납부처리</button></td></tr>');
                
            }
        }
    })
}

function getAllMember(){
    $.ajax({
        type: 'GET',
        url: domain + "member/all",
        contentType: 'application/json',
        success: function(data){
            var member = "";
            for(var i=0; i<data.length; i++){
                if(data[i].memeber == "regular"){
                    member = "정회원";
                }
                else if(data[i].member == "associate"){
                    member = "준회원";
                }
                else{
                    memeber = "특별회원";
                }
                $("#memberList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+member+'</td><td>'+data[i].name+'</td><td>'+data[i].company+'</td><td>'+data[i].position+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td class="approval_btn"><button onclick="cancle_btn('+data[i].memberNo+')">승인취소</button></td></tr>');
            }
        }
    })
}

function getPaymentUser(){
    $.ajax({
        type: 'GET',
        url: domain + "member/payment",
        contentType: 'application/json',
        success: function(data){
            var member = "";
            for(var i=0; i<data.length; i++){
                if(data[i].memeber == "regular"){
                    member = "정회원";
                }
                else if(data[i].member == "associate"){
                    member = "준회원";
                }
                else{
                    memeber = "특별회원";
                }
                $("#paymentList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+member+'</td><td>'+data[i].name+'</td><td>'+data[i].company+'</td><td>'+data[i].position+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td class="approval_btn"><button onclick="outstanding_btn('+data[i].memberNo+')">미납부처리</button></td></tr>');
            }
        }
    })
}

function getAllUser(){
    $('#userList').empty();
    $.ajax({
        type: 'GET',
        url: domain + "alluser",
        contentType: 'application/json',
        success: function(data){
            for(var i=0; i<data.length; i++){
                $("#userList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+data[i].id+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td>'+data[i].department+'</td><td>'+data[i].address + " " + data[i].address_detail+'</td><td>'+data[i].companyYn+'</td><td class="approval_btn"><button onclick="deleteUser_btn(\''+data[i].id+'\')">탈퇴처리</button></td></tr>');
            }
        }
    })
}

function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'validation/authority',
        contentType: 'application/json',
        success: function(data){
        },
        error: function(data){
            window.location.href="index.html";
        }
    })
}

function changeYoutubeLink(){
    var link = $('.linkUrl').val();
    if(!link.includes('https://youtu.be/') && !link.includes('https://www.youtube.com/watch?v=')){
        alert('유효하지 않은 주소입니다.');
    }
    $.ajax({
        type: 'PUT',
        url: domain + 'youtube?link=' + link,
        contentType: 'application/json',
        success: function(data){
            alert('주소 변경이 완료되었습니다.');
            $('.linkUrl').val('');
        },
        error: function(err){
            alert('주소 변경을 실패했습니다.');
        }
    })
}

function deletePromotion(num){
    $.ajax({
        type: "DELETE",
        url: domain + 'promotion/' + num,
        contentType: 'application/json',
        success: function(data){
            alert('삭제가 완료되었습니다.');
            getPromotion();
        }
    })
}

function getPromotion(){
    $('.promotion_content').empty();
    $.ajax({
        type: "GET",
        url: domain + 'promotion',
        contentType: 'application.json',
        success: function(data){
            var length = data.length;
            for(var i = (length - 1); i >= 0; i--){
                $('.promotion_content').append("<div class='promotion_img' id='" + data[i].no + "' style='width: 100px; display: flex; flex-direction:column; margin-right: 15px;'><img style='width:100px; height: 130px;' src='" + data[i].link + "'><button type='button' id='" + data[i].no + "' style='margin-top:5px;' onclick='deletePromotion(" + data[i].no + ")'>삭제하기</button></div>");
            }
        }
    })
}

function postPromotion(){
    var form = $('#uploadForm')[0];
    const formData = new FormData(form);
    if($("input[name='file']").val() != ''){
        $.ajax({
            type: "POST",
            url: domain + 'promotion',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                alert("등록이 완료되었습니다.");
                getPromotion();
                $("#promote_file").val('');
            },
            complete: function(data){
            }
        })
    }
}

function editGreetings(){
    var ment = $('#greetings_ment').val();
    var realMent = ment.replace(/(?:\r\n|\r|\n)/g, '<br />');
    if(ment != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'greetings?greetings=' + realMent,
            contentType: 'application/json',
            success: function(data){
                alert('인사말이 수정되었습니다.');
                getEditContent();
            }
        })
    }
}

function editIntro(){
    var effectment = $('#effect_ment').val();
    var effectRealMent = effectment.replace(/(?:\r\n|\r|\n)/g, '<br />');
    var missionment = $('#mission_ment').val();
    var missionRealMent = missionment.replace(/(?:\r\n|\r|\n)/g, '<br />');

    if(effectment != '' && missionRealMent != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'introduce',
            contentType: 'application/json',
            data: JSON.stringify({
                'MISSION': missionRealMent,
                '설립취지' : effectRealMent
            }),
            success: function(data){
                alert('협회소개가 수정되었습니다.');
                getEditContent();
            }
        })
    }
}

function getEditContent(){
    $('#greetings_ment').val('');
    $('#effect_ment').val('');
    $('#mission_ment').val('');
    $.ajax({
        type: "GET",
        url: domain + 'greetings',
        contentType: 'application/json',
        success: function(data){
            var newData = data.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
            $('#greetings_ment').val(newData);
        }
    })
    $.ajax({
        type: "GET",
        url: domain + 'introduce',
        contentType: 'application/json',
        success: function(data){
            $('#mission_ment').val(data.MISSION);
            $('#effect_ment').val(data.설립취지);
        }
    })
}

//이미지 링크를 보낼라나요..? src를??
function changeQRImg(){
    var form = $('#QR_uploadForm')[0];
    const formData = new FormData(form);
    if($("input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'qr',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                alert('QR 이미지가 변경되었습니다.');
            }
        })
    }
}

function changeQRLink(){
    var url = $('.qrUrl').val();
    $.ajax({
        type: "PUT",
        url: domain + 'qrLink',
        data: {
            'url': url
        },
        contentType: 'application/json',
        success: function(data){
            alert('QR 링크가 변경되었습니다.');
        }
    })
}

function changeGreetingsImg(){
    var form = $('#greetings_uploadForm')[0];
    const formData = new FormData(form);
    if($("input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'greetings',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                alert('인사말 사진이 변경되었습니다.');
            }
        })
    }
}

function changeOrganizationImg(){
    var form = $('#organization_uploadForm')[0];
    const formData = new FormData(form);
    if($("input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'organization',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                alert('임원명단 표 이미지가 변경되었습니다.');
            }
        })
    }
}

function getAboutMemberContent(){
    $('.about_member_ment').val('');
    $.ajax({
        type: "GET",
        url: domain + 'aboutMember',
        contentType: 'application/json',
        success: function(data){
            var newData = data.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
            $('.about_member_ment').val(newData);
        }
    })
}

function editAboutMent(){
    var ment = $('#aboutMember_ment').val();
    var realMent = ment.replace(/(?:\r\n|\r|\n)/g, '<br />');
    if(ment != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'aboutMembers?aboutMember=' + realMent,
            contentType: 'application/json',
            success: function(data){
                alert('가입안내 글이 수정되었습니다.');
                getAboutMemberContent();
            }
        })
    }
}

function changeMainImg(){
    var number = $('.mainNumber').val();
    var form = $('#mainImg_uploadForm')[0];
    const formData = new FormData(form);
    if($("input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'main',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                alert(number + ' 번째 메인 사진이 변경되었습니다.');
            }
        })
    }
}

$(document).ready(function(){
    // postUser();
    getPromotion();
    getUnapprovedUser();
    getOutstandingUer();
    getAllMember();
    getPaymentUser();
    getAllUser();
    getEditContent();
    getAboutMemberContent();
});
