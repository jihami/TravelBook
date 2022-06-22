// 나라명 받아오는 것
sessionStorage.removeItem("DocId");
sessionStorage.removeItem("country");
sessionStorage.removeItem("conR");

len = sessionStorage.length
// 세션이 있다면 로그인 상태 유지
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


function favorite_on(country, name){ //로그인이 안되어 있으면 로그인 하라고 하기
    $(function (){
        if(len === 0){
            alert("로그인하세요.")
        }else {
            if(confirm(country+"를 찜행지에 추가하시겠습니까?")===true){
                db.collection(nickName+"찜행지").add({ country:country, countryk:name});
                alert("추가 완료")
                $(`#${country}`).hide()
            }
        }
    })
}
