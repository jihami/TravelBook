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
        }
    }else{
        console.log("logout")
    }
})

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
