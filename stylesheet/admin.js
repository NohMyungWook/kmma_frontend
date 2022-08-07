var domain = "https://kmma.io/kmma/";
document.write('<script src="/stylesheet/tab.js"></script>');

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
            location.reload();
            onDisplay(2);
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
    $.ajax({
        type: 'GET',
        url: domain + "alluser",
        contentType: 'application/json',
        success: function(data){
            for(var i=0; i<data.length; i++){
                $("#userList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+data[i].id+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td>'+data[i].department+'</td><td>'+data[i].address + " " + data[i].address_detail+'</td><td>'+data[i].companyYn+'</td><td class="approval_btn"><button onclick="deleteUser_btn('+data[i].id+')">탈퇴처리</button></td></tr>');
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
            alert('삭제 완료');
        }
    })
}

function getPromotion(){
    $.ajax({
        type: "GET",
        url: domain + 'promotion',
        contentType: 'application.json',
        success: function(data){
            var length = data.length;
            console.log(data);
            for(var i = 0; i < length; i++){
                $('.promotion_content').append("<div class='promotion_img' id='" + data[i].no + "' style='width: 100px; display: flex; flex-direction:column; margin-right: 15px;'><img style='width:100px; height: 130px;' src='" + data[i].link + "'><button type='button' id='" + data[i].no + "' onclick='deletePromotion(" + data[i].no + ")'>삭제하기</button></div>");
            }
        }
    })
}


function postPromotion(){
    var form = $('#uploadForm')[0];
    const formData = new FormData(form);
    $.ajax({
        type: "POST",
        url: domain + 'promotion',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function(data){
            alert('good');
        },
        complete: function(data){
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
});


