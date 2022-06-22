// 나라명 받아오는 것
sessionStorage.removeItem("DocId");
sessionStorage.removeItem("country");
sessionStorage.removeItem("conR");

$(function (){
    let photoURL = sessionStorage.getItem("photoURL")
    let nickName = sessionStorage.getItem("nickName")
    let email = sessionStorage.getItem("email")
    let info = sessionStorage.getItem("info")
    if(email !== "null"){ //로그인 되어 있으면
        if(nickName == null){
            console.log()
            // location.href = "login_info.html";
        }else{
            document.getElementById("userIcon").src = photoURL;
            document.getElementById('login').innerHTML = nickName;
            $(function(){
                $('#logout').show();
            })
            $('#login').removeAttr("onclick");
            $('#login').attr("onclick","location.href = 'my_page.html'")
            db.collection(nickName+"찜행지").get().then((data) => {
                // console.log(data.size)
                // console.log(data)
                if (data.size>=1) {
                    data.forEach((doc) => {
                        // console.log(id)
                        console.log(doc.data().country)
                        let country = doc.data().country
                        $(`#${country}`).hide()
                    })
                }
            })
        }
    }else{
        console.log("logout")
    }
})

function goTemp(country){
    sessionStorage.setItem("conR", country);
    location.href = "travelTemp.html";
}
function goTemp2(country){
    sessionStorage.setItem("conR", country);
    location.href = "travelTemp2.html";
}
