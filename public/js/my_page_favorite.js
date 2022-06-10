$(function(){
    $('#category').on('click', function(){
        $('#category>li ul').stop().slideDown();
    })

    $('#sub_menu').on('mouseout',function(){
        $('#category>li ul').stop().slideUp();
    })
})