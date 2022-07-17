/* 게시판에 적힌 글을 어떻게 가져올건가? */
$('.make_notice_bt button').click(function(){
    $.ajax({
        type: 'POST',
        url: '',
        data: JSON.stringify({
            "post_title" : $('.post_notice_title').val(),
            "post_content" : $('#summernote').val()
        }),
        success: function(data){
            alert('oh~');
        },
        error: function(request, status, error){
            
        }
    })
})