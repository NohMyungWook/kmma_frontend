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

function getAllUser(){
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
                $("#userList").append('<tr><th scope="row">'+(i+1)+'</th><td>'+member+'</td><td>'+data[i].name+'</td><td>'+data[i].company+'</td><td>'+data[i].position+'</td><td>'+data[i].phone+'</td><td>'+data[i].email+'</td><td class="approval_btn"><button onclick="cancle_btn('+data[i].memberNo+')">승인취소</button></td></tr>');
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
    $.ajax({
        type: 'PUT',
        url: domain + 'youtube?link=' + link,
        contentType: 'application/json',
        success: function(data){
            window.location.href='index.html';
        }
    })
}
$(document).ready(function(){
    // postUser();
    getUnapprovedUser();
    getOutstandingUer();
    getAllUser();
    getPaymentUser();
});


