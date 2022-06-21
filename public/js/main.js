// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    nickName = sessionStorage.getItem("nickName")
    photoURL = sessionStorage.getItem("photoURL")
    if(len !== 0){
        if(nickName == null){
            location.href = "login_info.html";
        }else{
            document.getElementById('login').innerHTML = nickName
            document.getElementById("userIcon").src = photoURL;
            $(function(){
                $('#logout').show();
            })
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
        }
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
