nickName = sessionStorage.getItem("nickName")
email = sessionStorage.getItem("email")
// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    photoURL = sessionStorage.getItem("photoURL")
    nickName = sessionStorage.getItem("nickName")
    email = sessionStorage.getItem("email")
    info = sessionStorage.getItem("info")
    if(len !== 0){ //로그인 되어 있으면
        if(nickName == null){
            location.href = "login_info.html";
        }else{
            document.getElementById("userIcon").src = photoURL;
            document.getElementById('login').innerHTML = nickName;
            $(function(){
                $('#logout').show();
            })
        }
    }else {
        alert("로그인하세요.")
        location.href = "index.html"
    }
})
db.collection(nickName+"찜행지").get().then((data) => {
    // console.log(data.size)
    // console.log(data)
    if (data.size>=1) {
        data.forEach((doc) => {
            // console.log(id)
            console.log(doc.data().country)
            country = doc.data().country
            $(`#${country}`).hide()
        })
    }
})
function favorite_on(country, name){
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

$(function(){
    $('.country').on('mouseover', function(){
        $('.country > img').css({
            opacity:'20%'
        })
    })
})
