function openDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('signup_address').value = data.postcode1+data.postcode2+' '+data.address
            document.getElementById('signup_address').focus();
        }
    }).open();
}

function openDaumPostcodeHouse() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('member_house_address').value = data.postcode1+data.postcode2+' '+data.address
            document.getElementById('member_house_address').focus();
        }
    }).open();
}

function openDaumPostcodeCompany() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('member_company_address').value = data.postcode1+data.postcode2+' '+data.address
            document.getElementById('member_company_address').focus();
        }
    }).open();
}

function openDaumPostcodeAddress() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('editPage_address').value = data.postcode1+data.postcode2+' '+data.address
            document.getElementById('editPage_address').focus();
        }
    }).open();
}