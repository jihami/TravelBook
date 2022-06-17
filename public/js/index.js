// 구글 인증 기능 추가
var provider = new firebase.auth.GoogleAuthProvider();

function login(){
    // 인증하기
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        // document.getElementById("login").innerHTML = user.displayName;

        // 로그인 완료 시 로그아웃 버튼 보이기
        $(function(){
            $('#logout').show();
        })

        // 세션에 email 사용하여 저장
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("name", user.displayName);
        const email = user.email;
        const name = user.displayName;
        // db.collection(email).doc(email).add({"name":name,"email":email, info : 0}); // 내용을 하나더 만듦
        db.collection(email).doc(email).set({"name":name,"email":email}); // 내용을 덮어씀
        db.collection(email).get().then(doc => {
            if (doc.size <= 1){
                location.href = "login_info.html";
            }else{
                var dbDoc = db.collection(email).doc(name);
                dbDoc.get().then(function(querySnapshot) {
                    if (querySnapshot.exists) {
                        for(let doc in querySnapshot.data()){
                            console.log( `key : ${doc}, value : ${querySnapshot.data()[doc]}` )
                            nickName = querySnapshot.data().nickName
                            info = querySnapshot.data().nickName
                            sessionStorage.setItem("nickName", nickName);
                            sessionStorage.setItem("info", info);
                            console.log(nickName)
                            console.log(info)
                            document.getElementById('login').innerHTML = nickName;
                        }
                    }
                })

            }
        });
    })
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("login").innerHTML = "Login"

        // 로그아웃 시 버튼 숨기기
        $(function(){
            $('#logout').hide();
        })

        // 로그아웃 시 세션 삭제
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("nickName");
        sessionStorage.removeItem("info");
    })

}

// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    nickName = sessionStorage.getItem("nickName")
    if(len !== 0){
        if(nickName == null){
            location.href = "login_info.html";
        }else{
            document.getElementById('login').innerHTML = nickName
            $(function(){
                $('#logout').show();
            })
        }
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
