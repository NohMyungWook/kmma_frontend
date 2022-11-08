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
            const result = window.confirm('정말 변경하시겠습니까?');
            if(result){
                alert('성공적으로 변경되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            $('.linkUrl').val('');
        }
    })
}

function deletePromotion(num){
    $.ajax({
        type: "DELETE",
        url: domain + 'promotion/' + num,
        contentType: 'application/json',
        success: function(data){
            const result = window.confirm('정말 삭제하시겠습니까?');
            if(result){
                alert('성공적으로 삭제되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            $('.linkUrl').val('');
            getPromotion();
        }
    })
}

function getPromotion(){
    $('.promotion_content').empty();
    $.ajax({
        type: "GET",
        url: domain + 'promotion',
        contentType: 'application/json',
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
    if($("#uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "POST",
            url: domain + 'promotion',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 등록하시겠습니까?');
                if(result){
                    alert("등록이 완료되었습니다.");
                    getPromotion();
                    $("#promote_file").val('');
                }else{
                    getPromotion();
                    $("#promote_file").val('');
                }
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
            url: domain + 'greetings',
            contentType: 'application/json',
            data: JSON.stringify({
                'content' : realMent
            }),
            success: function(data){
                const result = window.confirm('정말 수정하시겠습니까?');
                if(result){
                    alert('성공적으로 수정되었습니다.');
                    getGreetingsMent();
                    $('.linkUrl').val('');
                }else{
                    $('.linkUrl').val('');
                }
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
                const result = window.confirm('정말 수정하시겠습니까?');
                if(result){
                    alert('성공적으로 수정되었습니다.');
                }
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

function changeQRImgLink(){
    var form = $('#QR_uploadForm')[0];
    var qrLink = $('#qrImgLink').val();
    const formData = new FormData(form);
    if($("#QR_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'qr?link=' + qrLink,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getQr();
                $("#QrImg_file").val('');
            }
        })
    }
}

function changeEducationFirstImg(){
    var num = $('#educationFirstImg').attr('class');
    var form = $('#educationFirst_uploadForm')[0];
    const formData = new FormData(form);
    if($("#educationFirst_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'education/image/' + num,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getEducationImg();
                $("#educationFirst_file").val('');
            }
        })
    }
}

function changeEducationSecondImg(){
    var num = $('#educationSecondImg').attr('class');
    var form = $('#educationSecond_uploadForm')[0];
    const formData = new FormData(form);
    if($("#educationSecond_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'education/image/' + num,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getEducationImg();
                $("#educationSecond_file").val('');
            }
        })
    }
}

function changeEducationThirdImg(){
    var num = $('#educationThirdImg').attr('class');
    var form = $('#educationThird_uploadForm')[0];
    const formData = new FormData(form);
    if($("#educationThird_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'education/image/' + num,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getEducationImg();
                $("#educationThird_file").val('');
            }
        })
    }
}

function changeGreetingsImg(){
    var form = $('#greetings_uploadForm')[0];
    const formData = new FormData(form);
    if($("#greetings_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'greetings/image',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getGreetingsImg();
                $("#greetingsImg_file").val('');
            }
        })
    }
}

function changeMainLogoImg(){
    var form = $('#mainLogo_uploadForm')[0];
    const formData = new FormData(form);
    if($("#mainLogo_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'logo/1',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getLogoImg();
                $("#mainLogo_file").val('');
            }
        })
    }
}

function changeOrganizationImg(){
    var form = $('#organization_uploadForm')[0];
    const formData = new FormData(form);
    if($("#organization_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'organization',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getOrganImg();
                $('#organization_file').val('');
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
            url: domain + 'about/member',
            contentType: 'application/json',
            data: JSON.stringify({
                'content' : realMent
            }),
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getAboutMember();
            }
        })
    }
}

function addMainImg(){
    var number = $('.mainNumber').val();
    var form = $('#mainImg_uploadForm')[0];
    const formData = new FormData(form);
    if($("#mainImg_uploadForm input[name='file']").val() != ''){
        $.ajax({
            type: "POST",
            url: domain + 'main/image',
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 추가하시겠습니까?');
                if(result){
                    alert('성공적으로 추가되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getMainImg();
                $('#mainImg_file').val('');
            }
        })
    }
}

function getGreetingsImg(){
    $.ajax({
        type: "GET",
        url: domain + 'greetings',
        contentType: 'application/json',
        success: function(data){
            $('.greetings_img img').attr("src", data[1]['link']);
        }
    })
}

function getEducationImg(){
    $.ajax({
        type: "GET",
        url: domain + 'education/image',
        contentType: 'application/json',
        success: function(data){
            $('#educationFirstImg').attr("src", data[0]['link']);
            $('#educationFirstImg').attr("class", data[0]['no']);
            $('#educationSecondImg').attr("src", data[1]['link']);
            $('#educationSecondImg').attr("class", data[1]['no']);
            $('#educationThirdImg').attr("src", data[2]['link']);
            $('#educationThirdImg').attr("class", data[2]['no']);
        }
    })
}

function getGreetingsMent(){
    $('#greetings_ment').empty();
    $.ajax({
        type: "GET",
        url: domain + 'greetings',
        contentType: 'application/json',
        success: function(data){
            var qrgreetingsMent = data[0]['link'];
            qrgreetingsMent = qrgreetingsMent.replace(/<br>/ig, '\n');
            qrgreetingsMent = qrgreetingsMent.replace(/<\/br>/ig, '\n');
            qrgreetingsMent = qrgreetingsMent.replace(/<br \/>/ig, '\n');
            $('#greetings_ment').val(qrgreetingsMent);
        }
    })
}

function getQr(){
    $('#qrImgLink').empty();
    $('#qrImgContent').empty();
    $.ajax({
        type: "GET",
        url: domain + 'qr',
        contentType: 'application/json',
        success: function(data){
            var qrImgContent = data[2]['link'];
            qrImgContent = qrImgContent.replace(/<br>/ig, '\n');
            qrImgContent = qrImgContent.replace(/<\/br>/ig, '\n');
            qrImgContent = qrImgContent.replace(/<br \/>/ig, '\n');
            $('#qrImg').attr('src', data[0]['link']);
            $('#qrImgLink').val(data[1]['link']);
            $('#qrImgContent').val(qrImgContent);
        }
    })
}

function changeQRContent(){
    var qrContent = $('#qrImgContent').val();
    var qrRealContent = qrContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
    $.ajax({
        type: "PUT",
        url: domain + 'qr/content',
        data: JSON.stringify({
            'content' : qrRealContent
        }),
        contentType: 'application/json',
        success: function(data){
            const result = window.confirm('정말 변경하시겠습니까?');
            if(result){
                alert('성공적으로 변경되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            getQr();

        }
    })
}

function getAboutMember(){
    $('#aboutMember_ment').empty();
    $.ajax({
        type: "GET",
        url: domain + 'about/member',
        contentType: 'application/json',
        success: function(data){
            data = data.replace(/<br>/ig, '\n');
            data = data.replace(/<\/br>/ig, '\n');
            data = data.replace(/<br \/>/ig, '\n');
            $('#aboutMember_ment').val(data);
        }
    })
}

function getOrganImg(){
    $.ajax({
        type: "GET",
        url: domain + 'organization',
        contentType: 'application/json',
        success: function(data){
            $('#organImg').attr('src', data);
        }
    })
}
 
function getMainImg(){
    $('#mainImgList').empty();
    $.ajax({
        type: "GET",
        url: domain + 'main/image',
        contentType: 'application/json',
        success: function(data){
            var num = data.length;
            for(var i = 0; i < num; i++){
                $('#mainImgList').append('<div style="display: flex; flex-direction: column;"><img id="' + data[i]['no'] + '" src="' + data[i]['link'] + '" style="width: 150px; height: 100px; margin-right: 15px;"><button type="button" onclick="deleteMainImg(' + data[i]['no'] + ')" style="width: 80px; margin-top: 10px;">삭제하기</button></div>');
            }
        }

    })
}

function deleteMainImg(num){
    $.ajax({
        type: "DELETE",
        url: domain + 'main/image/' + num,
        contentType: 'application/json',
        success: function(data){
            const result = window.confirm('정말 삭제하시겠습니까?');
            if(result){
                alert('성공적으로 삭제되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            getMainImg();
        }
    })
}

function getMainLogo(){
    $.ajax({
        type: "GET",
        url: domain + "main/logo",
        contentType: "application/json",
        success: function(data){
            $('#navbar-img').attr('src', data);
        }
    })
}

function getCompanyLogo(){
    $.ajax({
        type: "GET",
        url: domain + "logos",
        contentType: "application/json",
        success: function(data){
            $('.companyLogoList').html('');
            console.log(data.length);
            for(var i = 0; i < data.length; i++){
                console.log(data[i]['no']);
                $('.companyLogoList').append('<div style="display: flex; flex-direction: column;"><div style="display: flex; flex-direction: row;"><img id="' + data[i]['no'] + '" src="' + data[i]['link'] + '" style="width: 200px; height: 70px;"><button type="button" style="width: 50px; height:70px; margin-left: 20px;" onclick="deleteCompanyLogoImg(' + data[i]['no'] + ')">삭제하기</button></div><br/><form id="companyLogo_uploadForm' + data[i]['no'] + '" enctype="multipart/form-data"><input type="file" name="file" id="companyLogo_file' + data[i]['no'] + '"></form><div style="display: flex; flex-direction: row; margin-top: 5px;"><input type="text" class="companyInput' + data[i]['no'] + '" style="width: 400px;"/><button type="button" style="width: 100px; margin-left: 10px;" onclick="changeCompanyImg(' + data[i]['no'] + ')">변경하기</button></div><br/><br/>');
            }
            for(var i = 0; i < data.length; i++){
                $('.companyInput'+data[i]['no']).val(data[i]['homepage']);
            }
        }
    })
}

function deleteCompanyLogoImg(data){
    $.ajax({
        type: "DELETE",
        url: domain + 'logo/' + data,
        contentType: "application/json",
        success: function(data){
            const result = window.confirm('정말 삭제하시겠습니까?');
            if(result){
                alert('성공적으로 삭제되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            location.reload();
            getCompanyLogo();
        }
    })
}

function changeCompanyImg(data){
    var form = $('#companyLogo_uploadForm' + data)[0];
    const formData = new FormData(form);
    var formLink = $('.companyInput' + data).val();
    if($("#companyLogo_uploadForm" + data +  " input[name='file']").val() != ''){
        $.ajax({
            type: "PUT",
            url: domain + 'logo/' + data + '?link=' + formLink,
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data){
                const result = window.confirm('정말 변경하시겠습니까?');
                if(result){
                    alert('성공적으로 변경되었습니다.');
                }else{
                    alert('취소되었습니다.');
                }
                getCompanyLogo();
                $("#companyLogo_file" + data).val('');
            }
        })
    }
}

function addCompanyLogoImg(){
    var link = $('#newCompanyLogoLink').val();
    var form = $('#newCompanyLogo_uploadForm')[0];
    const formData = new FormData(form);
    $.ajax({
        type: "POST",
        url: domain + 'logo?link=' + link,
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function(data){
            const result = window.confirm('정말 추가하시겠습니까?');
            if(result){
                alert('성공적으로 추가되었습니다.');
            }else{
                alert('취소되었습니다.');
            }
            $("#newCompanyLogo_file" + data).val('');
            $('#newCompanyLogoLink').val('');
            getCompanyLogo();
        }
    })
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
    getGreetingsImg();
    getGreetingsMent();
    getQr();
    getAboutMember();
    getOrganImg();
    getMainImg();
    getEducationImg();
    getMainLogo();
    getCompanyLogo();
});
