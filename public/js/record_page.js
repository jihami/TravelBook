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
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
        }
    }else {
        alert("로그인하세요.")
        location.href = "index.html"
    }
})

const storage = firebase.storage();
nickName = sessionStorage.getItem("nickName")

db.collection(nickName).get().then((data) => {
    // console.log(data.size)
    // console.log(data)
    if (data.size < 1) {
        // location.href = "login_info.html";
        document.getElementById('list').innerHTML = "기록이 없습니다."
    }else {
        data.forEach((doc) => {
            id = doc.id
            // console.log(id)
            // console.log(doc.data())
            let themp = `<a><div class="place" id="${doc.id}" onclick="recordP(this.id)" >
                <img src="../img/diary.png">
                <p class="place_title">${doc.data().title} / ${doc.data().country}</p>
                <hr>
                <p class="place_count">${doc.data().startDay} ~ ${doc.data().endDay}</p>
                </div></a>`
            $("#list").append(themp)
        })
    }
})
function recordP(id){
    sessionStorage.removeItem("DocId");
    sessionStorage.removeItem("country");
    sessionStorage.setItem("DocId", id);
    location.href = "record_page.html"
    return id
}
id = sessionStorage.getItem("DocId")
console.log(id)
db.collection(nickName).doc(id).get().then(function(da) {
    if (da.exists) {
        dt = da.data()
        console.log(dt)
        document.getElementById('con').innerHTML = dt.title+" - "+dt.country;
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
