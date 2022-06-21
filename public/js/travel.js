nickName = sessionStorage.getItem("nickName")
email = sessionStorage.getItem("email")

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
