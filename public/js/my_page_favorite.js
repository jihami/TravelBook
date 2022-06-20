// 세션이 있다면 로그인 상태 유지
$(function (){
    if(len === 0){
        alert("로그인하세요.")
        location.href = "index.html"
    }
})
$(function(){
    $('#category').on('click', function(){
        $('#category>li ul').stop().slideDown();
    })

    $('#sub_menu').on('mouseout',function(){
        $('#category>li ul').stop().slideUp();
    })
})
