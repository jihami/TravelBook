// 세션이 있다면 로그인 상태 유지
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
