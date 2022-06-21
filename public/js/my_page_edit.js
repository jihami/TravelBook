// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    photoURL = sessionStorage.getItem("photoURL")
    nickName = sessionStorage.getItem("nickName")
    info = sessionStorage.getItem("info")
    if(len !== 0){ //로그인 되어 있으면
        if(nickName == null){
            location.href = "login_info.html";
        }else{
            document.getElementById("userIcon").src = photoURL;
            document.getElementById('login').innerHTML = nickName;
            document.getElementById("profile_img").src = photoURL;
            document.getElementById('nickname').value = nickName;
            document.getElementById('info').value = info;
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
    var slides=$('#slide').find('.slide_img');

    slides.each(function(i){
        slides.eq(i).css({left:100*i+'%'});
    });

    setInterval(function(){
        slides.each(function(i){
            slides.eq(i).stop().animate({
                left:'-=100%'
            }, 500, function(){
                if(slides.eq(i).css('left') <= '0'){
                    slides.eq(i).css('left', '100%');
                }
            });
        });
    },3000);
});

async function save(){
   if(len!==0){
       len = sessionStorage.length
       name = sessionStorage.getItem("name")
       email = sessionStorage.getItem("email")
       let check =  confirm("저장하시겠습니까?");
       if(check >= true) {
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
               document.getElementById('login').innerHTML = nickName
           }
       }

   }else {
       alert("로그인하세요.")
       location.href = "index.html"
   }
}
