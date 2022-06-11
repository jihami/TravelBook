async function sub(emailI, nameI){
    const email = emailI
    const name = nameI
    nickName = document.querySelector('#nickname');
    info = document.querySelector('#info');
    await db.collection(email).doc(email).set({"name":name,"email":email, "nickname":nickName, "info":info}); // 내용을 덮어씀
    alert("저장 완료!");
    location.href = "index.html";
}
