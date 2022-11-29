var domain = "https://kmma.io/kmma/";

function makeNoticePost(){ 
    let check_post_notice = confirm("정말로 등록하시겠습니까?");
    if(check_post_notice){
        var noticeTitle = $('.post_notice_title').val();
        var noticeContent = $('#summernote').summernote('code');

        $.ajax({
            type: "POST",
            url: domain + 'image/notice',
            data:JSON.stringify({
                "title": noticeTitle,
                "content" : noticeContent
            }), 
            contentType: 'application/json',
            success: function(data){
                window.location.href='loadingNotice.html';
            }
        })
    }
    else    return;
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
$(document).ready(function(){
    postUser();
    
    $('.summernote').summernote({
        height: 300,                 // 에디터 높이
        minHeight: null,             // 최소 높이
        maxHeight: null,             // 최대 높이
        focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
        lang: "ko-KR",					// 한글 설정
        placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
        toolbar: [
            // [groupName, [list of button]]
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
            ['color', ['forecolor','color']],
            ['table', ['table']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert',['picture','link','video']],
            ['view', ['fullscreen', 'help']]
            ],
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
        fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72']
    });
})

