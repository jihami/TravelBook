let click_chk = 0

function favorite_on(country){
    if(click_chk === 0){
        $(function(){
            $('#' + country).css({
                filter:'opacity(100%)'
            })
        })

        click_chk = 1
    } else{
        $(function(){
            $('#' + country).css({
                filter:'opacity(50%)'
            })
        })

        click_chk = 0
    }
}

$(function(){
    $('.country').on('mouseover', function(){
        $('.country > img').css({
            opacity:'20%'
        })
    })
})