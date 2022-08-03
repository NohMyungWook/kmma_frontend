function goToData(){
    if(sessionStorage.getItem("loginId") != null){
        window.location.href="data.html";
    }
    else{
        alert("회원만 접근 가능합니다.");
    }
}