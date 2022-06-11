const firebaseConfig = {
    apiKey: "AIzaSyAJuLCUy6eWpWgZwfD7_MP4sWMZNv4mlIc",
    authDomain: "trip-8b70a.firebaseapp.com",
    projectId: "trip-8b70a",
    storageBucket: "trip-8b70a.appspot.com",
    messagingSenderId: "1057567867513",
    appId: "1:1057567867513:web:0e238f2993fde770138aa8",
    measurementId: "G-L03PDZHGE9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 구글 인증 기능 추가
var provider = new firebase.auth.GoogleAuthProvider();

function login(){
    // 인증하기
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user)		// 인증 후 어떤 데이터를 받아오는지 확인해보기 위함.
        console.log(user.displayName)
        console.log(user.email)
        document.getElementById("login").innerHTML = user.displayName

        // 로그인 완료 시 로그아웃 버튼 보이기
        $(function(){
            $('#logout').show();
        })

        // 세션에 email 사용하여 저장
        sessionStorage.setItem("email", user.email)
        sessionStorage.setItem("name", user.displayName)
        const email = user.email
        const name = user.displayName
        console.log(email, name)
        success()
        //닉네임 체크
        function success() { //저장완료시 결과페이지로 넘어가도록
            // await db.collection(email).doc(email).add({"name":name,"email":email}); // 문서를 하나 더 만듦
            db.collection(email).doc(email).set({"name":name,"email":email, info : " "}); // 내용을 덮어씀
            db.collection(email).get().then((data)=>{
                data.forEach((doc)=>{
                    // console.log(doc.data().email)
                    if (doc.data().info == " "){
                        location.href = "login_info.html";
                    }
                })
            })
        }
    })//.catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    // });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("login").innerHTML = "login"

        // 로그아웃 시 버튼 숨기기
        $(function(){
            $('#logout').hide();
        })

        // 로그아웃 시 세션 삭제
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("name")
    }).catch((error) => {
        // An error happened.
        console.log("logoutError")
    });

}

// 세션이 있다면 로그인 상태 유지
$(function (){
    if(sessionStorage.length != 0){
        document.getElementById('login').innerHTML = sessionStorage.getItem("name")

        $(function(){
            $('#logout').show();
        })
    }
})
