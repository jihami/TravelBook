// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    nickName = sessionStorage.getItem("nickName")
    photoURL = sessionStorage.getItem("photoURL")
    email = sessionStorage.getItem("email")
    if(email !== ""){ //로그인 되어 있으면
        if(nickName == null){
            console.log("u")
            // location.href = "login_info.html";
        }else{
            document.getElementById('login').innerHTML = nickName
            document.getElementById("userIcon").src = photoURL;
            $(function(){
                $('#logout').show();
            })
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
        }
    }else{
        console.log("logout")
    }
})
$(function(){
    var slides=$('#slide').find('.slide_img');

    slides.each(function(i){
        slides.eq(i).css({left:100*i+'%'});
    });

    setInterval(function(){
        slides.each(function(i){
            slides.eq(i).stop().animate({
                left:'-=100%'
            }, 500, function(){
                if(slides.eq(i).css('left') <= '0'){
                    slides.eq(i).css('left', '100%');
                }
            });
        });
    },3000);
});
