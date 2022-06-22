// 세션이 있다면 로그인 상태 유지
$(function (){
    const email = sessionStorage.getItem("email")
    if(email !== ""){ //로그인 되어 있으면
        const name = sessionStorage.getItem("name")
        document.getElementById('title').innerHTML = name + "님의 닉네임 설정"
    }else{
        console.log("logout")
    }
})
async function sub() {
    const email = sessionStorage.getItem("email")
    const name = sessionStorage.getItem("name")
    const nickName = document.getElementById('nickname').value;
    const info = document.getElementById('info').value;
    if (info === "" || nickName === "") {
        alert("내용을 입력하세요")
    } else {
        // await db.collection(email).doc(email).add({"name":name,"email":email}); // 문서를 하나 더 만듦
        await db.collection(email).doc(name).set({"nickName": nickName, "info": info}); // 내용을 덮어씀
        // db.collection(email).doc("name").set({"name":name,"email":email, "nickname":nickName, "info":info}); // 내용을 덮어씀
        alert("저장 완료!");
        sessionStorage.setItem("nickName", nickName);
        sessionStorage.setItem("info", info);
        location.href = "index.html";
    }
}
