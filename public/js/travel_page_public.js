nickName = sessionStorage.getItem("nickName")
email = sessionStorage.getItem("email")
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
    }
})

function set(country){
    db.collection(country).get().then((data) => {
        if (data.size < 1) {
            // location.href = "login_info.html";
            document.getElementById('record_list').innerHTML = "기록이 없습니다."
        }else {
            data.forEach((doc) => {
                docId = doc.id
                con = country
                console.log(docId)
                console.log(con)
                console.log(doc.data())
                let themp = `<div class="record">
                    <img src="../img/diary.png" onclick="recordP(docId, con)">
                    <p>${doc.data().title} / ${doc.data().name}</p>
                    <hr style="height:1px; background-color:black;">
                    <p>${doc.data().startDay} ~ ${doc.data().endDay}</p>
                </div>`
                $("#record_list").append(themp)
            })
        }
    })
}
function recordP(id,country){
    sessionStorage.removeItem("DocId");
    sessionStorage.setItem("DocId", id);

    sessionStorage.removeItem("country");
    sessionStorage.setItem("country", country);

    location.href = "record_page_public.html"
    console.log(id,country)
    return id,country
}
id = sessionStorage.getItem("DocId")
con = sessionStorage.getItem("country")
console.log(id)
db.collection(con).doc(id).get().then(function(da) {
    if (da.exists) {
        dt = da.data()
        console.log(dt)
        document.getElementById('con').innerHTML = dt.title+" - "+dt.name;
        document.getElementById('day').innerHTML = dt.startDay + " ~ " + dt.endDay;
        document.getElementById("text1").innerHTML = dt.text1
        document.getElementById("text2").innerHTML = dt.text2
        document.getElementById("text3").innerHTML = dt.text3
        document.getElementById("text4").innerHTML = dt.text4
        document.getElementById("img1").src = dt.Img1
        document.getElementById("img2").src = dt.Img2
        document.getElementById("img3").src = dt.Img3
        document.getElementById("img4").src = dt.Img4
    }
})
