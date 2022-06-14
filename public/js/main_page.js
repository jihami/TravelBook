// 구글 인증 기능 추가
var provider = new firebase.auth.GoogleAuthProvider();
// db.collection('w2027@e-mirim.hs.kr').get().then(doc => {
//     // if (doc.size <= 1){
//     //     location.href = "login_info.html";
//     // }
//     // console.log(doc.data())
//     doc.forEach((item)=>{
//         console.log(item.data());
//         nick = item.data().nickName;
//         console.log(nick)
//
//         // if (nick == '여행하지'){
//         //     console.log("dd")
//         //     doc.push(doc);
//         //     return false;
//         // }
//     })
// });
// var docRef = db.collection('w2027@e-mirim.hs.kr').doc("3405_김지함");
// docRef.get().then(function(querySnapshot) {
//     if (querySnapshot.exists) {
//         for(let doc in querySnapshot.data()){
//             // doc.dq
//             // console.log(querySnapshot.data()[nickName])
//             console.log( `key : ${doc}, value : ${querySnapshot.data()[doc]}` )
//
//
//         }
//
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
db.collection("w2027@e-mirim.hs.kr").doc("3405_김지함")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        console.log("nickname: ", doc.data().nickName);
    });
function login(){
    // 인증하기
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        // console.log(user)		// 인증 후 어떤 데이터를 받아오는지 확인해보기 위함.
        // console.log(user.displayName)
        // console.log(user.email)
        document.getElementById("login").innerHTML = user.displayName;

        // 로그인 완료 시 로그아웃 버튼 보이기
        $(function(){
            $('#logout').show();
        })

        // 세션에 email 사용하여 저장
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("name", user.displayName);
        const email = user.email;
        const name = user.displayName;
        // console.log(email, name);
        success()
        //닉네임 체크
        function success() { //저장완료시 결과페이지로 넘어가도록
            // db.collection(email).doc(email).add({"name":name,"email":email, info : 0}); // 내용을 하나더 만듦
            db.collection(email).doc(email).set({"name":name,"email":email}); // 내용을 덮어씀
            db.collection('w2027@e-mirim.hs.kr').get().then(doc => {
                // if (doc.size <= 1){
                //     location.href = "login_info.html";
                // }
                doc.forEach(item=>{
                    console.log(item.data());
                    console.log(item.nickName);
                    // console.log(item.data().name.nickName);
                })
                console.log(doc.size);
                console.log(doc);
            });
        }
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
    })

}

// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    if(len !== 0){
        document.getElementById('login').innerHTML = sessionStorage.getItem("name")

        $(function(){
            $('#logout').show();
        })
    }
})

$(function(){
    var slides=$('#slide').find('.slide_img');
    var now=0, tot=2;

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
                };
            });
        });
    },3000);
});
