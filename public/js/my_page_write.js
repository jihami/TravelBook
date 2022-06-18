function categoryChange(continent) {
    var europe = ["그리스", "덴마크", "스페인", "아이슬란드", "영국", "이탈리아", "프랑스", "헝가리"];
    var north_america = ["멕시코", "미국", "캐나다", "쿠바"];
    var south_america = ["베네수엘라", "볼리비아", "브라질", "아르헨티나", "페루"];
    var asia = ["네팔", "대만", "대한민국", "라오스", "싱가포르", "일본","태국"];
    var oceania = ["뉴질랜드", "호주"];
    var africa = ["마다가스카르", "모로코", "케냐"];
    var target = document.getElementById("country");
    var con = continent.value;
    if(con === "europe") {
       var d = europe;
    } else if(con === "north_america") {
       var d = north_america;
    } else if(con === "south_america") {
       var d = south_america;
    }else if(con === "asia") {
       var d = asia;
    }else if(con === "oceania") {
       var d = oceania;
    }else{
       var d = africa;
    }
    target.options.length = 0;
    for (x in d) {
        var opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }

    console.log($("select[id=country] option:selected").text());
    var l = document.getElementById("country").value;
    console.log(l)
}
