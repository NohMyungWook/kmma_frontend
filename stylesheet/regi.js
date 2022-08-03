var beforeSingText = ""

function moveToRegi(){
    if($("input[name=accept]:checked").attr('id')=="acceptLaw"){
        window.location.href="memberRegistration.html";
    }
    else{
        alert("개인정보 수집 및 이용에 동의해주세요.")
    }
}

function moveToSign(){
    if($("input[name=accept]:checked").attr('id')=="acceptLaw"){
        window.location.href="signup.html";
    }
    else{
        alert("개인정보 수집 및 이용에 동의해주세요.")
    }
}