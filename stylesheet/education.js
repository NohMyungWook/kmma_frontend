function getEducationImg(){
    $.ajax({
        type: "GET",
        url: domain + 'education/image',
        contentType: 'application/json',
        success: function(data){
            $('#educationFirstImg').attr("src", data[0]['link']);
            $('#educationSecondImg').attr("src", data[1]['link']);
            $('#educationThirdImg').attr("src", data[2]['link']);
        }
    })
}

$(document).ready(function(){
    getEducationImg();
})