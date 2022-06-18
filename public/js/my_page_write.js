// 세션이 있다면 로그인 상태 유지
$(function (){
    if(len == 0){
        alert("로그인하세요.")
        location.href = "index.html"
    }
})
function categoryChange(continent) {
    const europe = ["그리스", "덴마크", "스페인", "아이슬란드", "영국", "이탈리아", "프랑스", "헝가리"];
    const north_america = ["멕시코", "미국", "캐나다", "쿠바"];
    const south_america = ["베네수엘라", "볼리비아", "브라질", "아르헨티나", "페루"];
    const asia = ["네팔", "대만", "대한민국", "라오스", "싱가포르", "일본","태국"];
    const oceania = ["뉴질랜드", "호주"];
    const africa = ["마다가스카르", "모로코", "케냐"];
    const target = document.getElementById("country");
    const con = continent.value;
    let d;
    if(con === "europe") d = europe;
    else if(con === "north_america") d = north_america;
    else if(con === "south_america") d = south_america;
    else if(con === "asia") d = asia;
    else if(con === "oceania") d = oceania;
    else d = africa;
    target.options.length = 0;
    for (let x in d) {
        let opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }

    console.log($("select[id=country] option:selected").text());
}
function readURL(input) {
    if (input.files && input.files[0]) {
        $($('#preview')).show()
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview').src = "";
    }
}
function submit(){
    const storage = firebase.storage();




    // var file = document.querySelector('')
    // var storageRef = storage.ref();
    // var route = storageRef.child('image/'+'파일명');
    // var upload = route.put(업도르파일)
    if(len == 0){
        alert("로그인하세요.")
        location.href = "index.html"
    }
    nickName = sessionStorage.getItem("nickName")
    email = sessionStorage.getItem("email")
    let title = document.getElementById("input_title").value
    let text1 = document.getElementById("text1").value
    let text2 = document.getElementById("text2").value
    let text3 = document.getElementById("text3").value
    let text4 = document.getElementById("text4").value
    let starDay = document.getElementById("start_day").value
    let endDay = document.getElementById("end_day").value
    let privacy = document.getElementById("privacy")
    let country = document.getElementById("country").value;

    if (title === "") {
        alert("제목을 입력해 주세요.")
    }else if (country === "나라 선택"){
        alert("나라를 선택해 주세요.")
    }else if (text1 === "" && text2 === "" && text3 === ""  && text4 === "" ){
        alert("내용을 입력해주세요.")
    }else if(starDay === ""){
        alert("여행 시작일을 입력해주세요.")
    }else if(endDay === "") {
        alert("여행 종료일을 입력해주세요.")
    }else {
        if (privacy.checked === false) {
            if (confirm("공개로 기록 등록할까요?") === true){
                console.log("공개로 디비저장")
                //공개로 디비저장
                // db.collection(country).add({"title":title, "name":nickName, "country":country, "text1":text1, "text2":text2,"text3":text3, "text4":text4, "starDay":starDay, "endDay":endDay, "privacy":"false"}); // 내용을 덮어씀
            }
        }else {
            if (confirm("비공개로 기록 등록할까요?") === true){
                console.log("Dd")
                //비공개로 디비저장
                // db.collection(email).doc(title).add({"country":country,"text1":text1,"text2":text2,"text3":text3,"text4":text4,"starDay":starDay,"endDay":endDay,"privacy":"true"}); // 내용을 하나더 만듦

            }
        }
    }
    console.log(title, text4,text3,text2,text2,starDay)

    // db.collection(email).doc(email).set({"name":name,"email":email, "photoURL":photoURL}); // 내용을 덮어씀

}
