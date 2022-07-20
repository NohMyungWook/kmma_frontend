// /* 게시판에 적힌 글을 어떻게 가져올건가? */
// $('.make_notice_bt button').click(function(){
//     $.ajax({
//         type: 'POST',
//         url: '',
//         data: JSON.stringify({
//             "post_title" : $('.post_notice_title').val(),
//             "post_content" : $('#summernote').val()
//         }),
//         success: function(data){
//             alert('oh~');
//         },
//         error: function(request, status, error){
            
//         }
//     })
// })

var domain = "https://kmma.io/kmma/";

function postUser(){
    $.ajax({
        type: 'GET',
        url: domain + 'myinfo',
        contentType: 'application/json',
        success: function(data){
            if(data.userRole == 'Admin'){
                $('.notice_write_bt').css('display', 'block');
            }else{
                $('.notice_write_bt').css('display', 'none');
            }
        }
    })
}

$(document).ready(function(){
    postUser();
})
//관리자 검증(게시판 작성 가능 여부)

// $(document).ready(function(){
//     $.ajax({
//         type: "GET",
//         url: domain + 'validation/authority',
//         success: function(data){
//             $('.notice_write_bt').css('display', 'block');
//         },
//         error: function(data){
//             $('.notice_write_bt').css('display', 'none');
//         }
//     })
// })