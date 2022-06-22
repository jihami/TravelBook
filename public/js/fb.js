const firebaseConfig = {
    apiKey: "AIzaSyAJuLCUy6eWpWgZwfD7_MP4sWMZNv4mlIc",
    authDomain: "trip-8b70a.firebaseapp.com",
    projectId: "trip-8b70a",
    storageBucket: "trip-8b70a.appspot.com",
    messagingSenderId: "1057567867513",
    appId: "1:1057567867513:web:5a7191ae598b4fce138aa8",
    measurementId: "G-6ZZ58NWXBQ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// 구글 인증 기능 추가
var provider = new firebase.auth.GoogleAuthProvider();

function login(){
    // 인증하기
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        // 로그인 완료 시 로그아웃 버튼 보이기
        $(function(){
            $('#logout').show();
        })

        // 세션에 email 사용하여 저장
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("name", user.displayName);
        sessionStorage.setItem("photoURL", user.photoURL);
        const email = user.email;
        const name = user.displayName;
        const photoURL = user.photoURL;
        // db.collection(email).doc(email).add({"name":name,"email":email, info : 0}); // 내용을 하나더 만듦
        db.collection(email).doc(email).set({"name":name,"email":email, "photoURL":photoURL}); // 내용을 덮어씀
        db.collection(email).get().then(doc => {
            if (doc.size <= 1){
                location.href = "login_info.html";
            }else{
                // 닉네임 세션에 저장
                var dbDoc = db.collection(email).doc(name);
                dbDoc.get().then(function(querySnapshot) {
                    if (querySnapshot.exists) {
                        for(let doc in querySnapshot.data()){
                            console.log( `key : ${doc}, value : ${querySnapshot.data()[doc]}` )
                            nickName = querySnapshot.data().nickName
                            info = querySnapshot.data().info
                            sessionStorage.setItem("nickName", nickName);
                            sessionStorage.setItem("info", info);
                            console.log(nickName)
                            console.log(info)
                            document.getElementById('login').innerHTML = nickName;
                            document.getElementById("userIcon").src = photoURL;
                        }
                    }
                })
                $("#login").removeAttr("onclick");
                $("#login").attr("onclick","location.href = 'my_page.html'")
            }
        });
    })
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("login").innerHTML = "Login"
        document.getElementById("userIcon").src = "../img/user.png";

        // 로그아웃 시 버튼 숨기기
        $(function(){
            $('#logout').hide();
        })

        // 로그아웃 시 세션 삭제
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("photoURL");
        sessionStorage.removeItem("nickName");
        sessionStorage.removeItem("info");
        sessionStorage.removeItem("DocId");
        sessionStorage.removeItem("country");
    })

}

