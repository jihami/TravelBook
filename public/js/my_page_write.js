// 세션이 있다면 로그인 상태 유지
$(function (){
    len = sessionStorage.length
    photoURL = sessionStorage.getItem("photoURL")
    nickName = sessionStorage.getItem("nickName")
    email = sessionStorage.getItem("email")
    info = sessionStorage.getItem("info")
    if(email !== ""){ //로그인 되어 있으면
        if(nickName == null){
            location.href = "login_info.html";
        }else{
            document.getElementById("userIcon").src = photoURL;
            document.getElementById('login').innerHTML = nickName;
            $(function(){
                $('#logout').show();
            })
            $("#login").removeAttr("onclick");
            $("#login").attr("onclick","location.href = 'my_page.html'")
        }
    }else {
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

    // console.log($("select[id=country] option:selected").text());
}
function readURL1(input) {
    if (input.files && input.files[0]) {
        $($('#add_photo1')).hide()
        $($('#preview1')).show()
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview1').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview1').src = "";
    }
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        $($('#add_photo2')).hide()
        $($('#preview2')).show()
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview2').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview2').src = "";
    }
}
function readURL3(input) {
    if (input.files && input.files[0]) {
        $($('#add_photo3')).hide()
        $($('#preview3')).show()
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview3').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview3').src = "";
    }
}
function readURL4(input) {
    if (input.files && input.files[0]) {
        $($('#add_photo4')).hide()
        $($('#preview4')).show()
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview4').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview4').src = "";
    }
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
async function submit() {

    if (len === 0) {
        alert("로그인하세요.")
        location.href = "index.html"
    }
    const storage = firebase.storage();
    let file1 = document.querySelector('#uploadImg1').files[0];
    let file2 = document.querySelector('#uploadImg2').files[0];
    let file3 = document.querySelector('#uploadImg3').files[0];
    let file4 = document.querySelector('#uploadImg4').files[0];

    let nickName = sessionStorage.getItem("nickName");
    let title = document.getElementById("input_title").value;
    let text1 = document.getElementById("record_write1").value;
    let text2 = document.getElementById("record_write2").value;
    let text3 = document.getElementById("record_write3").value;
    let text4 = document.getElementById("record_write4").value;
    let startDay = document.getElementById("start_day").value;
    let endDay = document.getElementById("end_day").value;
    let privacy = document.getElementById("privacy");
    let country = document.getElementById("country").value;
    if (title === "") {
        alert("제목을 입력해 주세요.")
    } else if (country === "나라 선택") {
        alert("나라를 선택해 주세요.")
    } else if (text1 === "" && text2 === "" && text3 === "" && text4 === "") {
        alert("내용을 입력해주세요.")
    } else if (startDay === "") {
        alert("여행 시작일을 입력해주세요.")
    } else if (endDay === "") {
        alert("여행 종료일을 입력해주세요.")
    } else if (file1 === undefined || file2 === undefined || file3 === undefined || file4 === undefined) {
        alert("이미지를 모두 등록해 주세요.")
    } else {
        if (privacy.checked === false) {
            if (confirm("공개로 기록 등록할까요?") === true) {
                let storageRef1 = storage.ref();
                let img1URl = 'image/' + nickName + '/' + country + '/public/' + startDay + '~' + endDay + '/img1';
                let route1 = storageRef1.child(img1URl);
                let upload1 = route1.put(file1)

                let storageRef2 = storage.ref();
                let img2URl = 'image/' + nickName + '/' + country + '/public/' + startDay + '~' + endDay + '/img2';
                let route2 = storageRef2.child(img2URl);
                let upload2 = route2.put(file2)

                let storageRef3 = storage.ref();
                let img3URl = 'image/' + nickName + '/' + country + '/public/' + startDay + '~' + endDay + '/' + '/img3';
                let route3 = storageRef3.child(img3URl);
                let upload3 = route3.put(file3);


                let storageRef4 = storage.ref();
                let img4URl = 'image/' + nickName + '/' + country + '/public/' + startDay + '~' + endDay + '/' + '/img4';
                let route4 = storageRef4.child(img4URl);
                let upload4 = route4.put(file4)
                sleep(2000);
                await upload1.snapshot.ref.getDownloadURL().then((url1) => {
                    console.log(url1)
                    upload2.snapshot.ref.getDownloadURL().then((url2) => {
                        upload3.snapshot.ref.getDownloadURL().then((url3) => {
                            upload4.snapshot.ref.getDownloadURL().then((url4) => {
                                // console.log(url1 + " " + url2)
                                // console.log(url3 + "" + url4)
                                // 공개에 저장될 데이터
                                db.collection(country).add({
                                    "title": title,
                                    "name": nickName,
                                    "text1": text1,
                                    "text2": text2,
                                    "text3": text3,
                                    "text4": text4,
                                    "Img1": url1,
                                    "Img2": url2,
                                    "Img3": url3,
                                    "Img4": url4,
                                    "startDay": startDay,
                                    "endDay": endDay,
                                    "privacy": "false"
                                }); // 내용을 덮어씀
                                // 내가 볼 데이터
                                db.collection(nickName).add({
                                    "title": title,
                                    "country": country,
                                    "text1": text1,
                                    "text2": text2,
                                    "text3": text3,
                                    "text4": text4,
                                    "Img1": url1,
                                    "Img2": url2,
                                    "Img3": url3,
                                    "Img4": url4,
                                    "startDay": startDay,
                                    "endDay": endDay,
                                    "privacy": "false"
                                }); // 내용을 덮어씀

                            });
                        });
                    });
                });

                alert("등록 완료!")
                document.getElementById("input_title").value = "";
                document.getElementById("record_write1").value = "";
                document.getElementById("record_write2").value = "";
                document.getElementById("record_write3").value = "";
                document.getElementById("record_write4").value = "";
                document.getElementById("start_day").value = "";
                document.getElementById("end_day").value = "";
                $("input:checkbox[id='privacy']").prop("checked", false);
                document.getElementById("country").value = "";
                $($('#add_photo1')).show()
                $($('#preview1')).hide()
                $($('#add_photo2')).show()
                $($('#preview2')).hide()
                $($('#add_photo3')).show()
                $($('#preview3')).hide()
                $($('#add_photo4')).show()
                $($('#preview4')).hide()
            }
        } else {
            if (confirm("비공개로 기록 등록할까요?") === true) {
                let storageRef1 = storage.ref();
                let img1URl = 'image/' + nickName + '/' + country + '/privacy/' + startDay + '~' + endDay + '/img1';
                let route1 = storageRef1.child(img1URl);
                let upload1 = route1.put(file1)

                let storageRef2 = storage.ref();
                let img2URl = 'image/' + nickName + '/' + country + '/privacy/' + startDay + '~' + endDay + '/img2';
                let route2 = storageRef2.child(img2URl);
                let upload2 = route2.put(file2)

                let storageRef3 = storage.ref();
                let img3URl = 'image/' + nickName + '/' + country + '/privacy/' + startDay + '~' + endDay + '/' + '/img3';
                let route3 = storageRef3.child(img3URl);
                let upload3 = route3.put(file3);


                let storageRef4 = storage.ref();
                let img4URl = 'image/' + nickName + '/' + country + '/privacy/' + startDay + '~' + endDay + '/' + '/img4';
                let route4 = storageRef4.child(img4URl);
                let upload4 = route4.put(file4)
                sleep(2000);
                await upload1.snapshot.ref.getDownloadURL().then((url1) => {
                    console.log(url1)
                    upload2.snapshot.ref.getDownloadURL().then((url2) => {
                        upload3.snapshot.ref.getDownloadURL().then((url3) => {
                            upload4.snapshot.ref.getDownloadURL().then((url4) => {
                                // console.log(url1 + " " + url2)
                                // console.log(url3 + "" + url4)
                                //비공개로 디비저장
                                db.collection(nickName).add({
                                    "title": title,
                                    "country": country,
                                    "text1": text1,
                                    "text2": text2,
                                    "text3": text3,
                                    "text4": text4,
                                    "Img1": url1,
                                    "Img2": url2,
                                    "Img3": url3,
                                    "Img4": url4,
                                    "startDay": startDay,
                                    "endDay": endDay,
                                    "privacy": "true"
                                }); // 내용을 덮어씀
                            });
                        });
                    });
                });
                // console.log(upload4.snapshot.ref.getDownloadURL().json())
                // console.log(upload4.snapshot.ref.getDownloadURL().PromiseResult)

                alert("등록 완료!")
                document.getElementById("input_title").value = "";
                document.getElementById("record_write1").value = "";
                document.getElementById("record_write2").value = "";
                document.getElementById("record_write3").value = "";
                document.getElementById("record_write4").value = "";
                document.getElementById("start_day").value = "";
                document.getElementById("end_day").value = "";
                $("input:checkbox[id='privacy']").prop("checked", false);
                document.getElementById("country").value = "";
                $($('#add_photo1')).show()
                $($('#preview1')).hide()
                $($('#add_photo2')).show()
                $($('#preview2')).hide()
                $($('#add_photo3')).show()
                $($('#preview3')).hide()
                $($('#add_photo4')).show()
                $($('#preview4')).hide()
            }
        }
    }


}
