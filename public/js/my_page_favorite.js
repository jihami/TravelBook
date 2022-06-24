// 나라명 받아오는 것
sessionStorage.removeItem("DocId");
sessionStorage.removeItem("country");
sessionStorage.removeItem("conR");

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
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
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
set()
function set(){
    db.collection(nickName+"찜행지").get().then((data) => {
        // console.log(data.size)
        // console.log(data)
        if (data.size >= 1) {
            $('#title').hide()

            data.forEach((doc) => {
                country = doc.data().country
                countryk = doc.data().countryk
                docId = doc.id
                // console.log(country)
                // console.log(doc.id)
                // console.log(doc.data())
                let themp = `<div class="place">
                   
                    <img src="img/${country}/flag.png" alt="img" style="width:172px; height:110px;" id="${country}" onclick="goPage(this.id)">
                    <hr>
                    <p class="place_title">${countryk}</p></a>
                    <button type="button" id="del" name="${doc.id}" onclick="del(this.name)">삭제</button>
                </div>`
                $("#list").append(themp)
            })
        }
    })
}
function goPage(con){
    switch (con) {
        case "greece" : case "denmark": case "spain": case "iceland": case "uk": case "italy": case "france" :
        case "hungary" : case "mexico": case "usa" : case "canada": case "cuba": case "venezuela": case "bolivia": case "brazil":
        case "argentina": case "peru":
            // console.log(con)
            goTemp(con)
            break;
        case "conR" : case "taiwan": case "korea": case "laos": case "singapore": case "japan": case "thailand" :
        case "newZealand" : case "australia": case "madagascar" : case "kenya":
            // console.log(con)
            goTemp2(con)
            break;

    }
}
async function del(id){
    console.log(id)
    if(confirm("정말 삭제하시겠습니까?")==true){
        await db.collection(nickName+"찜행지").doc(id).delete();
        alert("삭제 완료!");
        location.reload()
    }

}
function goTemp(country){
    sessionStorage.setItem("conR", country);
    location.href = "travelTemp.html";
}
function goTemp2(country){
    sessionStorage.setItem("conR", country);
    location.href = "travelTemp2.html";
}
