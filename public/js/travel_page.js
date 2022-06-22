len = sessionStorage.length
// 세션이 있다면 로그인 상태 유지
$(function (){
    let photoURL = sessionStorage.getItem("photoURL")
    let nickName = sessionStorage.getItem("nickName")
    let email = sessionStorage.getItem("email")
    let info = sessionStorage.getItem("info")
    if(email != "null"){ //로그인 되어 있으면
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
    sessionStorage.removeItem("conR");
    sessionStorage.setItem("conR", country);
    location.href = "travelTemp.html";
}
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

$(function(){
    $('.country > img').css({
        opacity:'20%'
    })
    $('#europe').on('mouseover', function(){
        $('#europe > img').css({
            opacity:''
        })
    })
    $('#europe').on('mouseout', function(){
        $('#europe > img').css({
            opacity:'20%'
        })
    })
    $('#north_america').on('mouseover', function(){
        $('#north_america > img').css({
            opacity:''
        })
    })
    $('#north_america').on('mouseout', function(){
        $('#north_america > img').css({
            opacity:'20%'
        })
    })
    $('#south_america').on('mouseover', function(){
        $('#south_america > img').css({
            opacity:''
        })
    })
    $('#south_america').on('mouseout', function(){
        $('#south_america > img').css({
            opacity:'20%'
        })
    })
    $('#asia').on('mouseover', function(){
        $('#asia > img').css({
            opacity:''
        })
    })
    $('#asia').on('mouseout', function(){
        $('#asia > img').css({
            opacity:'20%'
        })
    })
    $('#oceania').on('mouseover', function(){
        $('#oceania > img').css({
            opacity:''
        })
    })
    $('#oceania').on('mouseout', function(){
        $('#oceania > img').css({
            opacity:'20%'
        })
    })
    $('#africa').on('mouseover', function(){
        $('#africa > img').css({
            opacity:''
        })
    })
    $('#africa').on('mouseout', function(){
        $('#africa > img').css({
            opacity:'20%'
        })
    })



})
