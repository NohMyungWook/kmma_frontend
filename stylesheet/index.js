// 이미지 배너 슬라이딩 효과
$(document).ready(function() {
    var $banner = $(".logoSlider");

    var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
    var $bannerHeight = $banner.children().outerHeight(); // 높이
    var $length = $banner.children().length;//이미지의 갯수
    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(
        function() { 
            rollingStart();
        });

    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px");
        $banner.css("height", $bannerHeight + "px");
        $banner.animate({left: - $bannerWidth + "px"}, 3000, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});

//정관 클릭 시 내용 변경
$("#first_article").click(function(){
    $(".first_article").css({"display" : "none"});
});