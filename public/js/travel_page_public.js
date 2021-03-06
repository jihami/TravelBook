nickName = sessionStorage.getItem("nickName")
email = sessionStorage.getItem("email")
info = sessionStorage.getItem("info")
len = sessionStorage.length
// 세션이 있다면 로그인 상태 유지
$(function (){
    photoURL = sessionStorage.getItem("photoURL")
    if(len >= 4){ //로그인 되어 있으면
        console.log(len)
        console.log("login")
        if(nickName == null){
            console.log("d")
            // location.href = "login_info.html";
        }else{
            document.getElementById("userIcon").src = photoURL;
            document.getElementById('login').innerHTML = nickName;
            $(function(){
                $('#logout').show();
            })
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
        }
    }else{
        console.log("logout")
    }
})

function setCon(country){
    db.collection(country).get().then((data) => {
        if (data.size >= 1) {
            document.getElementById("record_list").innerHTML = "";
            data.forEach((doc) => {
                docId = doc.id
                con = country
                // console.log(docId)
                // console.log(con)
                // console.log(doc.data())
                let themp = `<div class="record">
                    <img src="img/diary.png" id="${doc.id}" onclick="recordP(this.id,con)">
                    <p>${doc.data().title}</p>
                    <hr style="height:1px; background-color:black;">
                    <p>${doc.data().startDay} ~ ${doc.data().endDay}</p>
                </div>`
                $("#record_list").append(themp)

                console.log(2)
            })
        }
    })
}
function recordP(id,country){
    console.log(id,country)
    sessionStorage.removeItem("DocId");
    sessionStorage.setItem("DocId", id);

    sessionStorage.removeItem("country");
    sessionStorage.setItem("country", country);
    sessionStorage.setItem("DocId", id);

    location.href = "record_page_public.html"
    // console.log(id,country)
    return id, country
}

function submitTip(con){
    if (len < 4){ //로그아웃이면
        alert("로그인하세요")
    }else {
        console.log(con)
        let tip = document.getElementById("tip_write").value;
        let photoURL = sessionStorage.getItem("photoURL")
        let info = sessionStorage.getItem("info")
        let name = sessionStorage.getItem("nickName")
        if (tip === ""){
            alert("내용을 입력해 주세요.")
        }else {
            db.collection(con + "TIP").add({"name": name, "info": info, "photoURL": photoURL, 'tip': tip});
            document.getElementById("tip_write").value = "";
            alert("저장 완료!");
            setTip(con);
        }
    }
}
function setTip(country) {
    db.collection(country + "TIP").get().then((data) => {
        if (data.size >= 1) {
            document.getElementById("tip_list").innerHTML = "";
            data.forEach((doc) => {
                // console.log(doc.data().name)
                // console.log(doc.data().photoURL)
                // console.log(doc.data().tip)
                console.log(doc.data())
                let themp = `<div class="tip">
                            <p class="user_id">${doc.data().name} - ${doc.data().info}</p>
                            <img src="${doc.data().photoURL}">
                            <p class="tip_subject">${doc.data().tip}</p>
                        </div>`
                $("#tip_list").append(themp)
            })
        }
    })

}
