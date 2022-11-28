var idx = 1;    //현재 page 번호
var page = 1;   //시작 page 번호

function notice_page(currentPage){
    if(currentPage == 0){
        if(idx==1)  return;
        else idx-=1;
    }
    else if(currentPage == 4){
        if(idx==3)  return;
        else idx+=1;
    }
    else{
        idx = currentPage;
    }
    $('.page-item').attr('class','page-item');
    $('#main_page_item_'+idx).attr('class','page-item active'); 
    if(idx == 1){
        $('#main_page_item_prev').attr('class','page-item disabled');
    }
    else if(idx == 3){
        $('#main_page_item_next').attr('class','page-item disabled');
    }
}

$(document).ready(function(){
});