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
function submit(){
    let title = document.getElementById("input_title").value
    let text1 = document.getElementById("text1").value
    let text2 = document.getElementById("text2").value
    let text3 = document.getElementById("text3").value
    let text4 = document.getElementById("text4").value
    let starDay = document.getElementById("start_day").value
    let endDay = document.getElementById("end_day").value
    let privacy = document.getElementById("privacy")
    let country = document.getElementById("country").value;
    console.log(country)
    if (title === "") {
        alert("제목을 입력해 주세요.")
    }
    if (country === ""){
        alert("나라를 선택해 주세요.")
    }
    if (text1 === "" && text2 === "" && text3 === ""  && text4 === "" ){
        alert("내용을 입력해주세요.")
    }
    if(starDay === ""){
        alert("여행 시작일을 입력해주세요.")
    }
    if(endDay === ""){
        alert("여행 종료일을 입력해주세요.")
    }
    if (privacy.checked === false) {
        if (confirm("공개로 기록 등록할까요?") === true){
            console.log("Dd") //디비저장
        }
    }else {
        if (confirm("비공개로 기록 등록할까요?") === true){
            console.log("Dd") //디비저장
        }
    }
    console.log(title, text4,text3,text2,text2,starDay,)
}
