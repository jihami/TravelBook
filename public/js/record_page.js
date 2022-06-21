// 세션이 있다면 로그인 상태 유지
$(function (){
    if(len === 0){
        alert("로그인하세요.")
        location.href = "index.html"
    }
    $("#login").removeAttr("onclick");
    $("#login").attr("onclick","location.href = 'my_page.html'")
})
nickName = sessionStorage.getItem("nickName")
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
