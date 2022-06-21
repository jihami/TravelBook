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
nickName = sessionStorage.getItem("nickName")

db.collection(nickName+"찜행지").get().then((data) => {
    // console.log(data.size)
    // console.log(data)
    if (data.size < 1) {
        // location.href = "login_info.html";
        document.getElementById('list').innerHTML = "기록이 없습니다."
    }else {
        data.forEach((doc) => {
            country = doc.data().country
            countryk = doc.data().countryk
            console.log(country)
            console.log(doc.data())
            let themp = `<a href="travel_${country}.html"><div class="place">
                    <img src="../img/${country}/flag.png" alt="img" style="width:172px; height:110px;">
                    <p class="place_title">${countryk}</p>
                </div></a>`
            $("#list").append(themp)
        })
    }
})
