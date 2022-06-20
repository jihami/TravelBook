// 세션이 있다면 로그인 상태 유지
$(function (){
    if(len === 0){
        alert("로그인하세요.")
        location.href = "index.html"
    }
})
const storage = firebase.storage();
nickName = sessionStorage.getItem("nickName")

db.collection(nickName).get().then((data) => {
    console.log(data.size)
    if (data.size < 1) {
        // location.href = "login_info.html";
        document.getElementById('list').innerHTML = "기록이 없습니다."
    }else {
        data.forEach((doc) => {
            console.log(doc.data())
            let themp = `<div class="place">
                <img src="../img/diary.png">
                <p class="place_title">${doc.data().title} / ${doc.data().country}</p>
                <hr>
                <p class="place_count">${doc.data().starDay} ~ ${doc.data().endDay}</p>
                </div>`
            $("#list").append(themp)
        })
    }
})